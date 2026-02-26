---
title: "Why I Use Environment Folders in Terraform"
lang: "en"
author: Jesús Merlo
email: jesus.lab.tech@gmail.com
date: "2026-02-21"
description: "After learning Terraform fundamentals, I faced a key decision: how to structure directories. This post explains why I chose environment folders over workspaces."
tags: [
    "Terraform", 
    "Infrastructure as Code",
    "DevOps",
]
draft: false
coverImage: "/Terraform-folder-env.webp"
---

## Planning the future 

After learning the fundamentals of Terraform, I wanted to take the next step: build something real. A project that would force me to apply what I'd learned and face decisions that don't appear in tutorials.

That's how the infrastructure idea I had in mind was born. But before writing the first line of code, I encountered a question that seemed minor but would shape the entire development:

> How should I structure the directories?

It wasn't just an aesthetic question. The way I organized the code would influence how I'd manage environments, handle state, and how easy it would be to scale the project without ending up in a mess.

At that moment, I had to decide whether to use workspaces or organize the environments in separate folders. Which was the better choice?

---

## The Problem with Workspaces

The workspace structure seems ideal on paper: a single root directory, a single set of `.tf` files, and different states depending on the selected workspace.

Each workspace has its own `tfstate`. The code is the same. Terraform exposes the active workspace name through `terraform.workspace`, allowing you to adapt certain values based on the environment.

In small projects, this feels elegant:

- **DRY** (Don't Repeat Yourself): one codebase for all environments.
- **Apparent simplicity**: no duplicated files.
- **Quick switching**: with `terraform workspace select`, you're in another environment.

But that elegance has a hidden cost.

The problem is that workspaces encourage you to manage differences with conditionals. And every time you need something different in an environment, you add an `if`. And another. And another.

What starts as "one code for everything" becomes "one code full of exceptions".

And there's something worse: operational risk. A poorly executed `terraform workspace select`, or assuming you're in the right environment, can lead to modifying production when you thought you were in development.

---

## Environment Folders: The Explicit Alternative

The option I chose was to physically separate each environment into its own folder:

```
infrastructure/
├── env/
│   ├── dev/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── backend.tf
│   ├── staging/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── backend.tf
│   └── prod/
│       ├── main.tf
│       ├── variables.tf
│       └── backend.tf
└── modules/
    ├── networking/
    ├── compute/
    └── database/
```

> Note: This structure is an illustrative example. The actual organization may vary depending on project needs.

Each folder inside `env/` has its own configuration, its own variables, and its own state. Reusable modules are kept in `modules/`, separated from environment-specific configuration.

Is there duplicated code? Yes, partially. But that's not a problem: it's solved with reusable modules. What you gain in return is absolute clarity.

When you open a PR, you see exactly which environment is being modified. When you run `terraform apply` from `prod/`, there's no doubt about where you're applying changes. There's no workspace to select. No assumptions.

---

## State Security

Separating by folders allows you to also separate the backend, and therefore the state.

In my project, all environments share the same S3 bucket to store the `tfstate`. One bucket per environment isn't necessary. What matters is that each one uses a different `key`:

```
env/dev/terraform.tfstate
env/staging/terraform.tfstate
env/prod/terraform.tfstate
```

Although the physical storage is the same, the state is completely isolated.

This matters because the `tfstate` is the most sensitive piece of Terraform: it's the source of truth about what exists in your infrastructure.

Separating states implies:

- An `apply` in `dev` can't affect `prod`, because they point to different states.
- Locks are independent.
- Each environment has its own lifecycle.

And there's an additional advantage: you can apply IAM policies by prefix within the bucket:

- Developers with access to `env/dev/*`
- QA or leads with access to `env/staging/*`
- Only administrators with access to `env/prod/*`

In an ideal scenario, all production `terraform apply` commands should run from controlled pipelines. This separation adds an extra layer of protection: a junior developer or administrator wouldn't have API-keys with sufficient permissions to read the production `tfstate`, reducing the attack surface.

---

## GitOps and Structural Clarity

If we think about the GitOps philosophy—where the repository is the source of truth and reflects the desired state—the folder separation has something very powerful:

- The environment physically exists in the repository.
- PRs clearly show if you're modifying `dev` or `prod`.
- Pipelines can run conditionally based on which folder has changed.

No additional context is needed to understand what's going to be deployed. The file system itself tells the story.

Additionally, this simplifies code reviews. When a reviewer sees a change in `env/prod/`, they immediately know they're reviewing something that affects production. There's no need to check which workspace was active or verify environment variables.

Traceability improves. The commit history shows exactly what changed in each environment and when. If something fails in production, you can go to the specific commit and see what was modified in `env/prod/`.

---

## Conclusion

Workspaces have their place: small projects, identical environments, quick prototypes. But when infrastructure grows and environments diverge, folder separation offers clarity that can't be ignored.

In exchange for some duplication—which is mitigated with modules—you gain security, traceability, and a structure that anyone on the team can understand without explanations.

For my project, the decision was clear. And if I had to start over, I'd make it again.
