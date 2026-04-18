export const resume = {
    basics: {
        name: "Dev Joshi",
        label: "DevOps & AI Tooling Engineer",
        email: "joshid647@gmail.com",
        phone: "9638140640",
        location: "Ahmedabad, Gujarat",
        handle: "dev-joshi",
        url: "/Dev_Joshi_Resume.pdf",
        summary: "Dynamic DevOps Engineer with a strong expertise in Cloud Infrastructure, Security (IAM/SSO), and emerging AI Agentic technologies. Proven track record in leading large-scale migrations, mastering Liferay clustering, and architecting microservices-driven platforms. Adept at translating complex business requirements into robust, cost-efficient infrastructure while maintaining rigorous SOC 2 compliance standards.",
        profiles: [
            {
                network: "LinkedIn",
                username: "dev-joshi",
                url: "https://www.linkedin.com/in/dev-joshi-b82a04150"
            },
            {
                network: "GitHub",
                username: "dev-joshi-ops",
                url: "https://github.com/dev-joshi-ops"
            }
        ]
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
                "Published two open-source MCP tools to enhance AI agent capabilities and developer productivity.",
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
            { name: "Oracle Cloud", level: 60 },
        ],
        containerization: ["Docker", "Kubernetes (K8s)", "Helm", "OpenShift", "EKS/AKS", "GKE AutoPilot"],
        iac: ["Terraform (Expert)", "Ansible", "CloudFormation", "Pulumi"],
        cicd: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD", "SonarQube"],
        scripting: ["Python", "Bash"],
        observability: ["Prometheus", "Grafana", "Datadog", "ELK Stack"],
        databases: ["Oracle DB", "MongoDB", "PostgreSQL", "MySQL"],
        platforms: ["Liferay DXP", "Kafka"],
        emerging: ["AI Fluency", "Prompt Engineering", "Agentic Workflows", "Claude Skills"],
        security: ["IAM", "SSO", "SOC 2 compliance"]
    },

    projects: [
        {
            name: "Government Customs Portal – Liferay Migration & Clustering",
            description: "Managed the migration of a government customs portal from Liferay 7.2 to 7.4 and designed a highly available clustering setup for improved scalability.",
            category: "devops",
            tags: ["Liferay DXP", "Oracle DB", "Clustering", "Migration", "On-Premise"],
            image: "/images/liferay-logo.png",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Migrating a mission-critical portal in a strict security environment while ensuring zero data loss and achieving high availability through clustering.",
                strategy: "Implemented a two-node Liferay DXP 7.4 cluster behind a Layer 7 Load Balancer and executed a rigorous two-stage database migration protocol.",
                implementation: [
                    "Migration: Led the version upgrade from 7.2 to 7.4 including database schema reconciliation.",
                    "Clustering: Designed and maintained a highly available Liferay setup for scalability.",
                    "Optimization: Oversaw infrastructure provisioning and performance tuning during cutover.",
                    "Collaboration: Worked with QA and dev teams to ensure minimal downtime."
                ],
                metrics: [
                    { label: "Data Fidelity", value: "100%", change: "7.2 → 7.4" },
                    { label: "Availability", value: "High", change: "Clustered Setup" }
                ]
            }
        },
        {
            name: "Cloud Architecture & Cost Optimization",
            description: "Re-architected a Relationship Intelligence Platform on GCP using GKE, achieving 100% cost reduction on external DB dependencies.",
            category: "cloud",
            tags: ["GCP", "GKE", "Bitbucket", "Kubernetes", "Reliability"],
            image: "/images/cloud-architecture.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Bloated database spending and operational inconsistency across environments due to manual oversight.",
                strategy: "Led DevOps efforts on GCP, overseeing deployments and monitoring while maintaining end-to-end reliability of the infrastructure.",
                implementation: [
                    "Orchestration: Architected and maintained a highly available Kubernetes cluster on GKE.",
                    "Infrastructure: Managed full infrastructure using GKE and Bitbucket for automated flows.",
                    "Reliability: Implemented comprehensive monitoring and alerting for platform stability.",
                    "Optimization: Reduced external DB costs by standardizing deployments."
                ],
                metrics: [
                    { label: "DB Cost Reduction", value: "100%", change: "Standardization" },
                    { label: "Uptime", value: "99.99%", change: "High Availability" }
                ]
            }
        },
        {
            name: "Social Media Manager – Event-Driven Architecture",
            description: "Designed a highly available AWS-based infrastructure with blue/green deployment for a microservices-driven social media management platform.",
            category: "cloud",
            tags: ["AWS", "Kafka", "Python", "Microservices", "Event-Driven"],
            image: "/images/event-streaming.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Processing high-velocity webhook data from Facebook and Instagram with zero data loss and real-time durability.",
                strategy: "Architected microservices in Python integrated with Apache Kafka for scalable event processing and AWS best practices.",
                implementation: [
                    "Streaming: Built a Kafka-based pipeline to handle social media webhooks in real-time.",
                    "Deployment: Implemented blue/green strategy for zero-downtime releases.",
                    "Security: Enforced network isolation, IAM role-based access, and encryption.",
                    "Development: Developed core Python services for real-time data ingestion and storage."
                ],
                metrics: [
                    { label: "Throughput", value: "High", change: "Event-Driven" },
                    { label: "Downtime", value: "Zero", change: "Blue/Green" }
                ]
            }
        },
        {
            name: "Funnel Builder – Multi-Tenant Infrastructure",
            description: "Designed and implemented a multi-tenant AWS-based infrastructure for a funnel builder application ensuring high availability and secure isolation.",
            category: "cloud",
            tags: ["AWS", "Multi-Tenant", "Blue/Green", "Security", "Infrastructure"],
            image: "/images/cloud-architecture.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Scaling a multi-tenant application while maintaining strict security isolation between clients.",
                strategy: "Built a highly available AWS setup using network segmentation and blue/green deployment strategy.",
                implementation: [
                    "Isolation: Implemented fine-grained IAM policies and network segmentation (VPCs).",
                    "Deployment: Standardized on blue/green deployment for risk-free updates.",
                    "Automation: Automated infrastructure provisioning with security defaults.",
                    "Resilience: Configured multi-AZ setups for high availability."
                ],
                metrics: [
                    { label: "Isolation", value: "Strict", change: "VPC/IAM" },
                    { label: "Availability", value: "99.9%", change: "Multi-AZ" }
                ]
            }
        },
        {
            name: "University System – Video Encoding Platform",
            description: "Developed a Python-based microservices platform on AWS for real-time video encoding integrated with AWS SQS.",
            category: "cloud",
            tags: ["AWS", "SQS", "Python", "Video Encoding", "Microservices"],
            image: "/images/cloud-architecture.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Handling concurrent video encoding jobs efficiently without impacting backend performance.",
                strategy: "Leveraged AWS SQS to decouple video processing from the main backend and used Python microservices for encoding.",
                implementation: [
                    "Decoupling: Integrated AWS SQS to manage the video processing queue.",
                    "Processing: Developed scalable Python microservices for real-time encoding.",
                    "Security: Secured the platform with IAM-based access control and network segmentation.",
                    "Efficiency: Optimized resource usage for concurrent encoding jobs."
                ],
                metrics: [
                    { label: "Processing", value: "Real-time", change: "Queue-based" },
                    { label: "Scalability", value: "High", change: "Microservices" }
                ]
            }
        },
        {
            name: "Real Estate Website – Lambda & MongoDB",
            description: "Lead DevOps for a multi-tenant real estate platform using AWS Lambda and MongoDB with encrypted cross-VPC connectivity.",
            category: "cloud",
            tags: ["AWS Lambda", "MongoDB", "VPC Peering", "Event-Driven", "Multi-Tenant"],
            image: "/images/cloud-architecture.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Ensuring secure and performant communication between serverless functions and a central MongoDB database across accounts.",
                strategy: "Architected a serverless infrastructure leveraging AWS Lambda and established secure cross-VPC connectivity via VPC peering.",
                implementation: [
                    "Serverless: Migrated key workloads to AWS Lambda for event-driven execution.",
                    "Database: Designed MongoDB architecture with high availability and secure peering.",
                    "Infrastructure: Managed secure cross-VPC networking and encryption at rest/transit.",
                    "Optimization: Achieved significant cost savings using serverless compute models."
                ],
                metrics: [
                    { label: "Security", value: "Enhanced", change: "VPC Peering" },
                    { label: "Cost", value: "Lower", change: "Serverless" }
                ]
            }
        },
        {
            name: "Hospitality Service Management – Multi-Tenant GCP",
            description: "Led DevOps for a multi-tenant hospitality platform on GCP using GKE and GitHub Actions for streamlined CI/CD.",
            category: "cloud",
            tags: ["GCP", "GKE", "GitHub Actions", "Multi-Tenant", "Security"],
            image: "/images/cloud-architecture.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Managing multi-tenant security and performance optimization for a high-traffic hospitality platform.",
                strategy: "Standardized on GKE for orchestration and GitHub for automated CI/CD, focusing on network segmentation.",
                implementation: [
                    "Orchestration: Managed GKE clusters with a focus on multi-tenant isolation.",
                    "CI/CD: Implemented GitHub Actions for automated, secure deployment pipelines.",
                    "Optimization: Applied performance tuning and best practices for high availability.",
                    "Governance: Enforced network segmentation and access control policies."
                ],
                metrics: [
                    { label: "Deployment", value: "Automated", change: "GitHub Actions" },
                    { label: "Uptime", value: "99.99%", change: "Fault Tolerance" }
                ]
            }
        },
    ],
    certifications: [
        { 
            name: "AI Fluency Framework & Foundations", 
            issuer: "Anthropic", 
            date: "Apr 2026",
            link: "https://verify.skilljar.com/c/ys6zc4cqbp3y"
        },
        { 
            name: "Introduction to agent skills", 
            issuer: "Anthropic", 
            date: "Apr 2026",
            link: "https://verify.skilljar.com/c/9znximgm9pid"
        },
        { 
            name: "Introduction to subagents", 
            issuer: "Anthropic", 
            date: "Apr 2026",
            link: "https://verify.skilljar.com/c/kfnmw7tzs8fr"
        }
    ]
};
