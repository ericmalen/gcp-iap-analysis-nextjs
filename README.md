# Context-Aware IAP Web App

## Overview

This repository contains a **Next.js web application** designed to demonstrate how to extract and visualize user identity data from the **JWT** added to request headers by **Identity-Aware Proxy (IAP)**. The application provides a simple interface to inspect request headers added by **Google Cloud Platform (GCP)** and **IAP**, helping users understand the structure and contents of the JWT payload.

## Technologies Used

- **Google Cloud Platform (GCP)**
- **Identity-Aware Proxy (IAP)**
- **TypeScript**
- **Next.js**
- **JSON Web Token (JWT)**

## Project Scope

- **Minimal UI design**: The focus was not on creating a polished user interface but rather on demonstrating the technical implementation of extracting and utilizing JWT data.
- **JWT data extraction**: The application showcases how to access and interpret JWT payloads passed via IAP request headers.
- **Header visualization**: Provides a way to inspect the request headers added by GCP and IAP, aiding in debugging and understanding the authentication flow.

## My Role

As the lead developer of my team's **Access Management** project, management expressed interest in exploring **Context-Aware Access**. This led me to research IAP’s authentication mechanisms and the use of JWTs for passing user identity data. After gaining a solid understanding of these concepts, I developed this **Next.js** web application to serve as a practical demonstration of extracting and using JWT payload data within an application.

## Installation & Deployment

To deploy this web application on **Google Cloud Platform (GCP)**:

1. **Push the container image** to **Artifact Registry**.
2. **Deploy the application to Cloud Run**.
3. **Configure an external Application Load Balancer**.
4. **Enable Identity-Aware Proxy (IAP)**.

## Usage

Once deployed, users can visit the web application to:

- View and inspect headers added by GCP and IAP.
- Decode JWT payload data.
- Understand how IAP-authenticated requests pass user identity information.
