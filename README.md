# Context-Aware IAP

## Overview

This project demonstrates how to extend **Identity-Aware Proxy (IAP)** access policies using **Access Levels** and **IAM Conditions** to implement context-aware access for organizational applications. The primary goal was to explore IAP's capabilities and provide a working example of how to extract user data from the **JWT** added to request headers by IAP. Additionally, the application includes a simple interface to visualize the headers added by **Google Cloud Platform (GCP)** and **IAP**, as well as the data contained within the JWT payload.

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

As the lead developer of my team's **Access Management** project, management expressed interest in exploring **Context-Aware Access**. This led me to research IAP’s authentication mechanisms and the use of JWTs for passing user identity data. After gaining a solid understanding of these concepts, I developed a **Next.js** web application to serve as a practical demonstration of extracting and using JWT payload data within an application.

## Installation & Deployment

To deploy this project on **Google Cloud Platform (GCP)**:

1. **Build and push the application image** to **Artifact Registry**.
2. **Deploy the application as a Cloud Run service**.
3. **Configure the external Application Load Balancer**.
4. **Enable Identity-Aware Proxy (IAP)** for secure access control.
