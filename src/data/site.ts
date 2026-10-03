import CloudMoniDashboard from "@/assets/Cloud-Monitor-Dashboard.webp";
import argocdDashboard from "@/assets/argocd-prod-app-dashboard.webp";
import { getCollection } from "astro:content";

export const profile = {
  name: "Jesús Merlo",
  role: "Cloud Engineer",
  tagline:
    "Building castles in the cloud. Continuous integration and delivery. But above all, continuous learning.",
  quote: "Curiosity is the appetite for knowledge.",
  email: "jesus.lab.tech@gmail.com",
  github: "https://github.com/jesuslabtech",
  linkedin: "https://linkedin.com/in/jesusmerlo",
};

export const nav = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "work", href: "#work" },
  { label: "posts", href: "#posts" },
  { label: "contact", href: "#contact" },
];

export const about = {
  summary:
    "I'm a Cloud Engineer passionate about building scalable, resilient infrastructure. I'm currently open to new opportunities.",
  stack: ["Linux", "AWS", "Terraform", "Docker", "Prometheus"],
  focus: [
    "AWS Infrastructure & Automation",
    "Observability & Monitoring Tools",
    "DevSecOps Pipelines and Principles",
  ],
};

export const experiences = [
  {
    title: "Junior Cloud Engineer",
    company: "Crononauta S.L",
    period: "Nov 2024 - Present",
    location: "Remote",
    description:
      "Maintain and monitor cloud infrastructure on AWS with focus on high availability, automation, and incident response.",
    achievements: [
      "Migration of monitoring infrastructure with zero downtime",
      "24/7 on-call for critical AWS services",
      "Incident resolution in client Cloud environments",
      "Automated routine maintenance tasks with Puppet and Terraform",
    ],
    technologies: ["AWS", "Linux", "Prometheus", "24x7 Support", "Terraform"],
  },
];

export interface Project {
  imgUrl?: string;
  imgWidth?: number;
  imgHeight?: number;
  title: string;
  description: string;
  tags: string[];
  links: { demo?: string; github: string };
}

export const projects: Project[] = [
  {
    imgUrl: CloudMoniDashboard.src,
    imgWidth: CloudMoniDashboard.width,
    imgHeight: CloudMoniDashboard.height,
    title: "Monitoring AWS Stack",
    description:
      "Prometheus + Grafana observability platform deployed on AWS with auto-scaling and high availability.",
    tags: ["AWS", "Prometheus", "Terraform", "Grafana", "Ansible"],
    links: { github: "https://github.com/jesuslabtech/aws-observability-lab" },
  },
  {
    imgUrl: argocdDashboard.src,
    imgWidth: argocdDashboard.width,
    imgHeight: argocdDashboard.height,
    title: "DevSecOps CI/CD Pipeline",
    description:
      "GitOps workflow with ArgoCD, Kubernetes, and GitHub Actions for automated deployments.",
    tags: ["GitHub Actions", "Kubernetes", "ArgoCD"],
    links: { github: "https://github.com/jesuslabtech/task-manager-gitops" },
  },
];

export async function getLatestPosts(count = 2) {
  const posts = await getCollection("posts");
  return posts
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .slice(0, count);
}

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-GB");
