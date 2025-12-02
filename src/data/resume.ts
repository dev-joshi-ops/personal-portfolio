export const resume = {
    basics: {
        name: "Dev Joshi",
        label: "DevOps Engineer",
        email: "joshid647@gmail.com",
        phone: "9638140640",
        location: "Ahmedabad, Gujarat",
        handle: "dev-joshi",
        summary: "DevOps Engineer with proven experience managing and optimizing cloud infrastructure across AWS, GCP, and Azure. Skilled in building and maintaining CI/CD pipelines, automating deployments, implementing monitoring solutions, and ensuring security compliance. Adept at collaborating with cross-functional teams to deliver scalable, cost-efficient, and high-performance solutions.",
    },
    education: [
        {
            institution: "Atmiya University",
            area: "Computer Engineering",
            studyType: "B.Tech",
            startDate: "2018",
            endDate: "2022",
        },
    ],
    experience: [
        {
            company: "Inexture Solutions LTD",
            position: "DevOps Engineer",
            startDate: "May 2025",
            endDate: "Present",
            summary: "Architected and managed multi-cloud and hybrid infrastructure across AWS, GCP, and on-premise servers.",
            highlights: [
                "Spearheaded DevOps efforts for major Abu Dhabi Government client projects.",
                "Established and enforced SOC 2 Type II controls within CI/CD and cloud environments.",
                "Designed and maintained robust CI/CD pipelines (Jenkins, GitHub Workflow) with integrated security.",
                "Collaborated with client technical teams to translate business requirements into secure infrastructure designs.",
            ],
        },
        {
            company: "Ninjatechnolabs",
            position: "DevOps Engineer",
            startDate: "Sep 2023",
            endDate: "May 2025",
            summary: "Oversee and manage the entire cloud infrastructure ensuring optimal performance and scalability.",
            highlights: [
                "Managed cloud infrastructure on AWS, GCP, and other platforms.",
                "Configured CI/CD pipelines using GitHub Workflow and Jenkins.",
                "Provided hands-on support to developers for troubleshooting server and code issues.",
                "Collaborated with development, QA, and operations teams to align infrastructure capabilities.",
            ],
        },
        {
            company: "9series Solutions",
            position: "DevOps Engineer",
            startDate: "Jul 2021",
            endDate: "Sep 2023",
            summary: "Provision, configure, and manage cloud infrastructure on AWS, Azure, and GCP.",
            highlights: [
                "Set up and maintained CI/CD pipelines for automated build, test, and deployment.",
                "Used Ansible and Jenkins to manage and automate server and app configurations.",
                "Implemented monitoring solutions like Datadog and Cronitor.",
                "Ensured security compliance by identifying gaps and meeting SOC2 requirements.",
            ],
        },
    ],
    skills: {
        cloud: [
            { name: "AWS (Advanced)", level: 95 },
            { name: "Azure", level: 80 },
            { name: "GCP", level: 70 },
        ],
        containerization: ["Docker", "Kubernetes (K8s)", "Helm", "OpenShift", "EKS/AKS"],
        iac: ["Terraform (Expert)", "Ansible", "CloudFormation", "Pulumi"],
        cicd: ["Jenkins", "GitLab CI", "GitHub Actions"],
        scripting: ["Python", "Bash"],
        observability: ["Prometheus", "Grafana", "Datadog", "ELK Stack"],
    },

    projects: [
        {
            name: "Intranet Portal Migration & Platform Modernization",
            description: "Migrated a mission-critical employee portal from Liferay DXP 7.2 to 7.4 in a high-security, air-gapped environment. Achieved high availability with a Layer 7 clustered architecture.",
            category: "devops",
            tags: ["Liferay DXP", "Oracle DB", "On-Premise", "High Availability", "Migration"],
            image: "/images/intranet-migration.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Migrating a mission-critical portal in a strict air-gapped environment with no CI/CD or observability. Incompatible Oracle database schemas and custom locale requirements (ar_AE) posed significant risks.",
                strategy: "Pivoted from automation-first to a process-first governance approach. Implemented a two-stage migration protocol (Baseline + Verification) and a Layer 7 clustered architecture for high availability.",
                implementation: [
                    "Architecture: Designed a two-node Liferay DXP 7.4 cluster behind a Layer 7 Load Balancer.",
                    "Migration: Executed a two-stage protocol: Native Liferay upgrade followed by custom SQL integrity checks.",
                    "Localization: Manually configured and verified custom ar_AE locale support.",
                    "Governance: Established strict manual deployment checklists validated by the Change Advisory Board (CAB)."
                ],
                metrics: [
                    { label: "Data Fidelity", value: "100%", change: "7.2 → 7.4" },
                    { label: "Availability", value: "High", change: "Clustered Setup" },
                    { label: "Downtime Risk", value: "Minimized", change: "Resilient Arch" }
                ]
            }
        },
        {
            name: "Cloud Architecture & Cost Optimization",
            description: "Re-architected a fintech AI platform to eliminate 100% of external database costs and standardize deployments using GitOps on GKE AutoPilot.",
            category: "cloud",
            tags: ["GCP", "GKE AutoPilot", "ArgoCD", "MongoDB", "GitOps"],
            image: "/images/cloud-architecture.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Ferret.ai faced bloated database spending due to vendor lock-in and operational inconsistency across environments. Deployments were prone to drift, requiring manual oversight.",
                strategy: "Migrated to a self-managed, sharded MongoDB on GCE to slash costs to $0. Standardized deployments using GitOps (ArgoCD) on GKE AutoPilot for consistency and rapid deployment.",
                implementation: [
                    "Database: Architected self-managed MongoDB on GCE, reducing external vendor costs to $0.",
                    "Orchestration: Migrated to GKE AutoPilot to offload node management and patching.",
                    "GitOps: Implemented ArgoCD for consistent, automated deployments across 4 environments.",
                    "Scaling: Configured HPA for auto-scaling based on CPU and custom metrics to ensure 99.99% uptime."
                ],
                metrics: [
                    { label: "DB Cost Reduction", value: "100%", change: "Vendor → Self-Hosted" },
                    { label: "Deployment Errors", value: "~0%", change: "Manual → GitOps" },
                    { label: "Uptime", value: "99.99%", change: "High Availability" }
                ]
            }
        },
        {
            name: "Real-Time Event Streaming Platform",
            description: "Architected a high-volume social media webhook platform on AWS using Kafka and Docker Swarm to process 1,000+ events/minute with 99.9% uptime.",
            category: "cloud",
            tags: ["AWS", "Docker Swarm", "Kafka", "Python"],
            image: "/images/event-streaming.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Handling a high-velocity, unpredictable firehose of webhook data (1,000+ events/minute) from social media APIs. The goal was to build a highly available platform capable of real-time processing with zero data loss.",
                strategy: "Implemented an event-driven architecture using a self-managed Apache Kafka cluster as the durable message bus. Leveraged Docker Swarm for lightweight microservices orchestration and AWS (EC2, ASG, ALB) for infrastructure resilience.",
                implementation: [
                    "Architecture: Deployed multi-AZ AWS infrastructure with EC2, Auto Scaling Groups, and ALB for high availability.",
                    "Streaming: Built a self-managed Apache Kafka cluster to decouple producers from consumers and ensure data durability.",
                    "Orchestration: Used Docker Swarm to manage Python-based microservices for real-time data processing.",
                    "Observability: Implemented custom monitoring for Consumer Group Lag and Broker Disk I/O to prevent bottlenecks."
                ],
                metrics: [
                    { label: "Throughput", value: "1k+ ev/min", change: "Zero Backpressure" },
                    { label: "Uptime", value: "99.9%", change: "High Availability" },
                    { label: "Latency", value: "Real-time", change: "Immediate Scaling" }
                ]
            }
        },
        {
            name: "Enterprise Cloud Migration",
            description: "Migrated a monolithic on-prem legacy application to a microservices architecture on AWS. Reduced downtime by 40% and infrastructure costs by 25%.",
            category: "cloud",
            tags: ["Terraform", "EC2", "RDS"],
            image: "/images/enterprise-migration.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "The client was running a critical e-commerce monolith on aging on-premise hardware. Scaling was manual and took days, leading to outages during traffic spikes. Maintenance costs were spiraling, and deployment times exceeded 4 hours.",
                strategy: "We adopted a 'Re-platform' followed by 'Refactor' approach. Initially, we lifted and shifted the workload to AWS EC2 with Auto Scaling Groups (ASG) to stabilize operations. Phase 2 involved breaking down core services into Docker containers orchestrated by ECS Fargate.",
                implementation: [
                    "Infrastructure as Code: 100% Terraform coverage for VPCs, Subnets, and IAM roles.",
                    "Database: Migrated Oracle DB to Amazon RDS for PostgreSQL using AWS DMS (Database Migration Service).",
                    "Security: Implemented WAF and Shield for DDoS protection; privatized all subnets."
                ],
                metrics: [
                    { label: "Uptime Improvement", value: "99.99%", change: "99.5% → 99.99%" },
                    { label: "Cost Savings", value: "25% Monthly", change: "" },
                    { label: "Deployment Time", value: "15m", change: "4h → 15m" }
                ]
            }
        },
        {
            name: "K8s Autoscaling Platform",
            description: "Designed a multi-cluster Kubernetes environment with Karpenter for aggressive node autoscaling, handling 5x traffic spikes during Black Friday.",
            category: "kubernetes",
            tags: ["EKS", "Helm", "Prometheus"],
            image: "/images/kubernetes-autoscaling.png",
            link: "#",
            cta: "View Architecture",
            details: {
                challenge: "During peak sales events like Black Friday, the existing static cluster setup couldn't handle sudden 5x traffic spikes, resulting in dropped requests and slow checkout experiences. Over-provisioning for peaks was wasting $15k/month.",
                strategy: "Implemented a dynamic scaling architecture using Amazon EKS and Karpenter. This allowed for 'Just-in-Time' node provisioning based on pending pod resource requirements, rather than waiting for CPU thresholds to trigger ASGs.",
                implementation: [
                    "Autoscaling: Replaced Cluster Autoscaler with Karpenter for sub-minute node provisioning.",
                    "Cost Optimization: Configured Spot Instances for stateless workloads, reducing compute costs by 60%.",
                    "Observability: Deployed Prometheus & Grafana for real-time pod metrics and custom alerts."
                ],
                metrics: [
                    { label: "Scale-up Time", value: "45s", change: "5m → 45s" },
                    { label: "Cost Reduction", value: "$15k/mo", change: "" },
                    { label: "Traffic Handled", value: "50k RPS", change: "Peak Load" }
                ]
            }
        },
        {
            name: "GitOps Deployment Pipeline",
            description: "Implemented a full GitOps workflow using ArgoCD and GitHub Actions. Enabled developers to deploy to production in under 5 minutes with automated rollbacks.",
            category: "cicd",
            tags: ["ArgoCD", "GitHub Actions", "Kustomize"],
            image: "/images/gitops-pipeline.jpg",
            link: "#",
            cta: "View Pipeline",
            details: {
                challenge: "Developers were manually deploying to production via SSH, leading to configuration drift and 'it works on my machine' issues. Rollbacks were manual, error-prone, and took over 30 minutes to execute.",
                strategy: "Adopted a GitOps methodology where Git is the single source of truth. Changes to infrastructure and applications are made via Pull Requests, which automatically trigger synchronization to the cluster via ArgoCD.",
                implementation: [
                    "CI Pipeline: GitHub Actions builds Docker images, scans for vulnerabilities (Trivy), and pushes to ECR.",
                    "CD Pipeline: ArgoCD monitors the Helm chart repository and automatically syncs changes to the cluster.",
                    "Safety: Implemented Canary deployments using Argo Rollouts for zero-downtime updates."
                ],
                metrics: [
                    { label: "Deployment Freq", value: "15/day", change: "2/week → 15/day" },
                    { label: "Rollback Time", value: "< 1m", change: "30m → < 1m" },
                    { label: "Dev Productivity", value: "+40%", change: "" }
                ]
            }
        },
    ],
};
