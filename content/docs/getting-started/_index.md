---
title: "Getting Started"
description: "Get familiar with basic concepts of OCM and learn how to use different tools in the OCM toolset."
icon: "🚀"
weight: 20
url: /docs/getting-started/
sidebar:
  collapsed: true
---

The Open Component Model (OCM) provides a standard way to describe and package software artifacts along with their metadata. This guide will walk you through the essential steps to start working with OCM.

## The OCM Workflow

```mermaid
flowchart LR
    A[Install CLI] --> B[Create Component]
    B --> C[Add Resources]
    C --> D[Sign]
    D --> E[Transport]
    E --> F[Deploy]
```

## Guides

{{< card-grid >}}
{{< link-card
  title="Install the OCM CLI"
  description="Get started by installing the OCM command-line tool."
  href="/docs/getting-started/installation/"
>}}
{{< link-card
  title="Create Component Versions"
  description="Learn how to create and store component versions."
  href="/docs/getting-started/create-component-version/"
>}}
{{< link-card
  title="Download Resources"
  description="Extract resources from component versions."
  href="/docs/getting-started/download-resources-from-component-versions/"
>}}
{{< link-card
  title="Sign Component Versions"
  description="Ensure authenticity by signing your components."
  href="/docs/getting-started/sign-component-version/"
>}}
{{< link-card
  title="Verify Component Versions"
  description="Verify signatures to ensure integrity."
  href="/docs/getting-started/verify-component-version/"
>}}
{{< link-card
  title="Deploy a Helm Chart"
  description="Deploy applications using OCM controllers."
  href="/docs/getting-started/deploy-helm-chart/"
>}}
{{< /card-grid >}}

{{< callout context="tip" title="New to OCM?" >}}
Start with [installing the OCM CLI]({{< relref "ocm-cli-installation.md" >}}), then follow the guides in order to learn the complete workflow.
{{< /callout >}}
