---
title: "Introduction to Terraform"
description: ""
published_date: "07/03/2026"
last_updated_date: "07/03/2026"
syllabus_code: "NO-IDEA"
authors: "kelvinsekx"
status: "in-progress"
---

Best engineering practices call for consistency across multiple environments in cloud be it dev, staging or production (the three popular environments) as the team apply regular updates, track vulnerabilities, make backups, and do all this while making sure proper root access to every machine.

All of these maintanance and consistency were done manually on the cloud provider. It takes hours to do by hand and discipline to follow ritual steps of instructions for them to work as expected.

Terraform is a tool that allows engineering to discontinue manual work. It equips you with the tool to manage (cloud) infrastructure using code. These type of tools are Infrastructure as Code (IaC). Instead of manually creating servers, databases, networks, etc through (Vendors e.g Google Cloud) dashboards, you define everything in code and Terraform creates them for you. Now, Developers who had no understanding of
networking can spin up VPCs on their own thanks to Terraform.

## What is Terraform?

Terraform is a open-source tool that allows you to automate **infrastructure**, **the platform** where your infrastructure is hosted and **services** that run on that platform. Behind the scene, you'll be writing a declarative language. In short, it a tool for infrastructure provisioning. Popular alternatives are Ansible, CHEF and AWS Cloudformation.

## Why Terraform?

## Manual Infrastructure is Error-Prone

Without Terraform, engineers often create infrastructure manually in dashboards like Amazon Web Service, Google Cloud Platform or Microsoft Azure.

**Problems**

- Someone forgets a setting
- Inconsistent Environment
- Hard to reproduce infrastructure

## Manual Infrastructure makes it difficult to Reproduce environment

## Manual Infra lacks Version Control

Infra changes are tracked in Git, just like application code:

- we can see who changed what
- Roll back changes
- Code reviews before infra changes

## Correct Dependency Mnanagement

Infrastructure components depend on each other:
Example:

- Server needs VPC
- VPC needs subnet
- Subnet needs route table
  Terraform automatically builds things in the correct order.

## Scaling Infrastructure Easily

Instead of creating many servers manually, it is possible with terraform.

## Infrastructure as Code (IaC)

Terraform is not the only IaC tool. There are other platform agnostic ones like Pulumi, while AWS Cloudwatch and GCP deployment manager are vendor specific.

## How does Terraform work?

How is Terraform able to achieve all the thing it is doing like provisioning infrastructure on AWS and so on.

Inorder do these jobs, Terraform has two main components for achieving this:

1. CORE: This compares current state and desired state

- TF-Config
- State

2. PROVIDERS: Like AWS, Azure etc

## Example Terraform File

```bash
// configure the aws provider
provider "aws" {
  version: '~> 2.0',
  region: 'us-east-1'
}

// create a vpc
resource "aws-vpc" "example" {
  cidr_block: "10.0.0.0/16"
}
```

## How Terraform Takes Action

Terraform has several commands:

### `refresh`

### `plan`

It previews what is going to happen.

### `apply`

### `destroy`

Reverting everything that have been created. Like `apply` it checks what exist and what has to be removed.
