---
title: "AWS for beginners"
lang: "en"
author: Jesús Merlo
email: jesus.lab.tech@gmail.com
date: "2025-11-18"
description: ¿What is AWS? A quick view through the AWS most basic services, like EC2, S3, IAM, ...
tags: [
    "AWS", "Entry-level", "5min", "EC2", "IAM", 
]
draft: false
coverImage: "https://lituus.cl/Analytics/cloud-computing/IMG/Logo-AWS-smile.webp"
---
## What is AWS?

Amazon Web Services (AWS) is the most widely used cloud services platform in the world. It offers more than 200 services for computing, databases, networking, security, monitoring, and more. Since it is fully managed by Amazon, it allows companies and developers to deploy applications without worrying about physical infrastructure.

---

## Exploring the AWS Console

When you access the **AWS Management Console**, you’ll find an interface organized by service categories:

- **Compute**: EC2, Lambda, ECS  
- **Storage**: S3, EFS, Glacier  
- **Database**: DynamoDB, RDS, Aurora  
- **Security & Identity**: IAM, KMS, Cognito  

The top search bar is your best friend: type “EC2,” “S3,” or any service and you’ll jump directly to it.

---

## IAM: access control and security

**IAM (Identity and Access Management)** allows you to control who can do what within your account.

With IAM you can:

- Create individual users or groups.  
- Assign permissions using JSON policies.  
- Enable multi-factor authentication (MFA).  
- Define roles for services such as EC2 or Lambda.  

It is a best practice to **never work with the root user**. Create an admin user and use MFA from day one.

---

## EC2: virtual servers in the cloud

**Amazon EC2 (Elastic Compute Cloud)** lets you launch virtual machines —called _instances_— in the cloud within seconds.

Key points:

- You can choose from hundreds of instance types (t2, t3, m5, c6g...).  
- The default storage comes from **EBS**.  
- You can assign Elastic IP addresses.  
- You can automate deployments with Launch Templates and Auto Scaling Groups.  

For beginners, a **t2.micro or t3.micro** instance within the free tier is enough to learn.

---

## Other important services to get started

### 🔹 S3 — Object Storage
Ideal for storing images, static files, logs, and backups. Commonly used with CloudFront for static websites.

### 🔹 RDS — Managed Databases
Supports MySQL, PostgreSQL, MariaDB, SQL Server, and Oracle. AWS manages patching, backups, and high availability.

### 🔹 CloudWatch — Monitoring
Collects metrics, logs, and events. It’s key to understanding what’s happening in your infrastructure.

---

## Conclusion

AWS offers a huge ecosystem, but to get started you only need to understand three pillars:  
**IAM for security**, **EC2 for compute**, and **S3 for storage**.  
With these services you can build anything from learning environments to full web applications.

As you progress, you’ll be able to explore more advanced services like Lambda, VPC, ECS, DynamoDB, or API Gateway.

---
