# Professional Portfolio | Cloud Solutions Architect & DevOps Engineer

[![Astro](https://img.shields.io/badge/Astro-4.15-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Edge_Network-F38020?style=for-the-badge&logo=cloudflare-pages&logoColor=white)](https://pages.cloudflare.com/)

## Architecture & Deployment Overview

This repository hosts a high-performance portfolio engineered for scalability and global delivery. The architecture emphasizes a "Security-by-Design" and "Infrastructure-as-Code" philosophy:

*   **Astro Framework**: Utilizes a zero-JavaScript client-side delivery model (unless explicitly opted-in), significantly reducing the critical rendering path and optimizing Lighthouse performance scores.
*   **Edge Delivery (Cloudflare Pages)**: Deployed via Cloudflare's global edge network. By caching static assets at the edge, the application achieves sub-50ms latency for global users, bypassing traditional centralized origin bottlenecks.
*   **Containerization**: Implements a multi-stage OCI-compliant Docker build.
    *   **Build Stage**: A Node.js environment handles dependency resolution and static site generation.
    *   **Production Stage**: A hardened Nginx Alpine image serves the final artifacts, ensuring a minimal attack surface and platform-agnostic portability.

## Quick Start (Containerized)

To spin up a production-grade instance of the portfolio locally using Docker, execute the following commands:

```bash
# Build the production image
docker build -t portfolio-devops:latest .

# Deploy the container on port 8080
docker run -d \
  -p 8080:80 \
  --name portfolio-instance \
  portfolio-devops:latest
```

Access the application at `http://localhost:8080`.

## Local Development

For active development and real-time HMR (Hot Module Replacement), follow the standard Node.js workflow:

```bash
# 1. Install dependencies
npm install

# 2. Boot the development server
npm run dev
```

The development server will be available at `http://localhost:4321`.

## Project Structure

A clean separation of concerns is maintained across the repository to facilitate easier CI/CD integration and maintenance:

```text
.
├── public/                # Static assets and global binary resources
├── src/
│   ├── components/        # Atomic UI components and logic
│   ├── data/              # Structured schema for resume content
│   ├── layouts/           # High-level structural page templates
│   └── pages/             # File-based routing and entry points
├── Dockerfile             # Multi-stage build manifest
├── nginx.conf             # Production ingress and routing configuration
└── astro.config.mjs       # Framework-level orchestration
```
