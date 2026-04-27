import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Bot, Shield, Activity, GitBranch, Server, Database, Cloud, Zap, Lock, BarChart3, RefreshCw, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Project = {
  title: string;
  company: string;
  companyColor: string;
  category: string;
  categoryIcon: React.ReactNode;
  impact: string;
  description: string;
  tech: string[];
  image: string;
  isAI?: boolean;
};

// company color shorthands
const MW = "bg-violet-500/20 text-violet-300 border-violet-500/40";
const NW = "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
const AK = "bg-amber-500/20 text-amber-300 border-amber-500/40";
const AICOLOR = "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";

const projects: Project[] = [

  // ─────────────────────────────────────────────────────────────────────────
  // MUMZWORLD
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Production Reliability & Downtime Elimination",
    company: "Mumzworld",
    companyColor: MW,
    category: "SRE / Reliability",
    categoryIcon: <Activity className="w-3.5 h-3.5" />,
    impact: "Production incidents down 70% · MTTR cut in half",
    description:
      "Took ownership of production reliability for a high-traffic e-commerce platform where every minute of downtime directly impacts revenue. Introduced synthetic monitoring, proactive alerting on leading indicators (latency spikes, error-rate trends, pod restarts), and SLO-based on-call policies — shifting the team from reactive firefighting to proactive incident prevention.",
    tech: ["Grafana Cloud", "Prometheus", "Synthetic Monitoring", "SLO/SLI", "PagerDuty", "Loki", "Alloy"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Full-Stack Observability Platform",
    company: "Mumzworld",
    companyColor: MW,
    category: "Observability",
    categoryIcon: <BarChart3 className="w-3.5 h-3.5" />,
    impact: "200+ dashboards · Blind spots eliminated",
    description:
      "Designed and deployed end-to-end observability across 20+ microservices using Grafana Cloud, Prometheus, Loki, and OpenTelemetry. Built service-level dashboards, distributed trace correlation, and structured log pipelines via Alloy — giving engineering teams full visibility from infrastructure metrics down to individual request traces.",
    tech: ["Grafana Cloud", "Prometheus", "Loki", "OpenTelemetry", "Alloy", "Tempo", "Alertmanager"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    title: "AWS FinOps — Significant Cost Reduction",
    company: "Mumzworld",
    companyColor: MW,
    category: "FinOps",
    categoryIcon: <BarChart3 className="w-3.5 h-3.5" />,
    impact: "30%+ monthly AWS spend reduced",
    description:
      "Ran a systematic FinOps audit across the entire AWS account — rightsized over-provisioned EC2 and RDS instances, consolidated redundant NAT Gateways, removed idle load balancers, purchased Compute Savings Plans, and implemented EKS namespace cost allocation. Turned cloud spend from an untracked cost center into a measurable, optimized line item.",
    tech: ["AWS Cost Explorer", "EC2 Rightsizing", "Savings Plans", "NAT Gateway", "EKS", "Tagging Strategy", "Trusted Advisor"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
  },
  {
    title: "AI-Powered Observability & Debugging Acceleration",
    company: "Mumzworld",
    companyColor: MW,
    category: "AI + SRE",
    categoryIcon: <Bot className="w-3.5 h-3.5" />,
    impact: "Debug time cut from hours to minutes",
    description:
      "Integrated AI into the observability workflow — used LLMs to auto-generate Grafana dashboards from service specs, summarize Loki log anomalies during incidents, and suggest probable root causes from alert context. Reduced the cognitive load on on-call engineers and dramatically shortened the time from alert to resolution.",
    tech: ["OpenAI", "Grafana API", "Loki", "Python", "LangChain", "Slack API", "Prometheus"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800",
    isAI: true,
  },
  {
    title: "AI Agents for Developer & QA Self-Service",
    company: "Mumzworld",
    companyColor: MW,
    category: "Agentic AI",
    categoryIcon: <Cpu className="w-3.5 h-3.5" />,
    impact: "SRE support tickets reduced by 40%",
    description:
      "Built agentic AI workflows that handle common developer and QA requests autonomously — environment provisioning, log retrieval, deployment status checks, and test environment resets. Developers interact via Slack; the agent executes against Kubernetes and AWS APIs. Freed the SRE team from repetitive support work and improved developer velocity.",
    tech: ["LangChain Agents", "OpenAI", "Kubernetes API", "AWS SDK", "Slack Bolt", "Python", "FastAPI"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
    isAI: true,
  },
  {
    title: "GitOps CI/CD Platform with AI-Gated Deployments",
    company: "Mumzworld",
    companyColor: MW,
    category: "CI/CD",
    categoryIcon: <GitBranch className="w-3.5 h-3.5" />,
    impact: "Deployment failures down 80% · 15+ teams unblocked",
    description:
      "Rebuilt the CI/CD platform from scratch using GitHub Actions with self-hosted EKS runners, multi-stage Docker builds, ECR image scanning via Trivy, and ArgoCD GitOps for automated Helm promotion across dev/staging/prod. Added AI-based pre-deployment validation that checks config diffs, detects risky changes, and blocks unsafe releases before they reach production.",
    tech: ["GitHub Actions", "ArgoCD", "Helm", "Docker", "ECR", "Trivy", "Self-hosted Runners", "OpenAI"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800",
  },
  {
    title: "Production EKS Platform & Kubernetes Engineering",
    company: "Mumzworld",
    companyColor: MW,
    category: "Platform Engineering",
    categoryIcon: <Server className="w-3.5 h-3.5" />,
    impact: "Zero-downtime deploys · Auto-scales to 10x traffic",
    description:
      "Owned the full lifecycle of a production EKS cluster running 20+ microservices for a high-traffic e-commerce platform. Implemented Istio service mesh for traffic management and canary rollouts, KEDA event-driven autoscaling tied to queue depth, HPA for CPU/memory, and ALB ingress with WAF integration — ensuring the platform handles peak sale events without manual intervention.",
    tech: ["AWS EKS", "Kubernetes", "Istio", "ArgoCD", "Helm", "KEDA", "HPA", "ALB", "Karpenter"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
  },
  {
    title: "Disaster Recovery & Backup Strategy",
    company: "Mumzworld",
    companyColor: MW,
    category: "Disaster Recovery",
    categoryIcon: <RefreshCw className="w-3.5 h-3.5" />,
    impact: "RTO < 30 min · RPO < 1 hour · DR tested quarterly",
    description:
      "Designed and implemented a full DR strategy for production workloads — automated RDS snapshots with cross-region replication, EKS cluster state backups via Velero, S3 versioning and lifecycle policies, and runbooks for full environment recovery. Conducted quarterly DR drills to validate recovery time objectives and identify gaps before a real incident does.",
    tech: ["Velero", "AWS RDS Snapshots", "S3 Cross-Region Replication", "Route 53 Failover", "Terraform", "Runbooks"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
  },
  {
    title: "Infrastructure as Code & Environment Standardization",
    company: "Mumzworld",
    companyColor: MW,
    category: "IaC",
    categoryIcon: <Cloud className="w-3.5 h-3.5" />,
    impact: "New env provisioned in minutes · Drift eliminated",
    description:
      "Migrated all AWS infrastructure to Terraform with modular, reusable components for VPC, EKS, RDS, IAM, and CloudFront. Enforced IaC-only changes via CI pipeline gates using tfsec and Checkov for policy compliance. Eliminated environment drift and reduced new environment provisioning from days of manual work to a single pipeline run.",
    tech: ["Terraform", "Ansible", "tfsec", "Checkov", "AWS", "GitHub Actions", "Atlantis"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
  },
  {
    title: "Security Hardening — WAF, Secrets & Compliance",
    company: "Mumzworld",
    companyColor: MW,
    category: "Security",
    categoryIcon: <Shield className="w-3.5 h-3.5" />,
    impact: "95%+ malicious traffic blocked · Zero hardcoded secrets",
    description:
      "Delivered a multi-layer security overhaul: AWS WAF rule groups at CloudFront edge blocking credential stuffing, OTP abuse, and scraping bots; AWS Secrets Manager replacing all hardcoded credentials with IRSA-based rotation; and automated compliance scanning in CI using Checkov and tfsec. Led VAPT remediation cycles and hardened all production VPC security group policies.",
    tech: ["AWS WAF", "CloudFront", "Secrets Manager", "IRSA", "Checkov", "tfsec", "VAPT", "IAM"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800",
  },
  {
    title: "SRE Automation & Internal Workflow Tooling",
    company: "Mumzworld",
    companyColor: MW,
    category: "Automation",
    categoryIcon: <Zap className="w-3.5 h-3.5" />,
    impact: "Hours of weekly toil eliminated",
    description:
      "Identified and automated the highest-friction SRE workflows — certificate renewal checks, stale resource cleanup, deployment health verification, and on-call handoff reports. Built internal CLI tools and Slack bots that give developers self-service access to common ops tasks, reducing dependency on the SRE team for routine requests.",
    tech: ["Python", "Bash", "AWS SDK (boto3)", "Kubernetes API", "Slack API", "GitHub Actions", "Cron"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NESTO / WESTERN INTERNATIONAL GROUP
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Monitoring & Alerting from Zero to Production",
    company: "Nesto / WIG",
    companyColor: NW,
    category: "Observability",
    categoryIcon: <Activity className="w-3.5 h-3.5" />,
    impact: "Blind production systems → full visibility",
    description:
      "Inherited infrastructure with no meaningful monitoring. Built a complete observability stack from scratch using CloudWatch, custom metrics, and alerting pipelines — covering 10+ retail brands including Nesto Online, INAAM loyalty, Geepas, and Wigme. Defined escalation policies and on-call runbooks, giving the team its first structured incident response process.",
    tech: ["CloudWatch", "SNS", "Lambda", "Nagios", "NewRelic", "Slack Webhooks", "Runbooks"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "CI/CD Pipeline Modernization for Multi-Brand Platform",
    company: "Nesto / WIG",
    companyColor: NW,
    category: "CI/CD",
    categoryIcon: <GitBranch className="w-3.5 h-3.5" />,
    impact: "Manual deploys eliminated · 3x release frequency",
    description:
      "Replaced error-prone manual deployments with fully automated Jenkins pipelines for Java and Node.js applications across dev, staging, and production environments. Integrated Ansible for environment-specific config management, automated rollback triggers on health-check failures, and Slack notifications — giving 10+ brand teams reliable, repeatable releases.",
    tech: ["Jenkins", "Ansible", "Docker", "Tomcat", "Apache", "Shell Scripting", "Git", "Slack"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800",
  },
  {
    title: "Kubernetes (EKS) Adoption & Container Migration",
    company: "Nesto / WIG",
    companyColor: NW,
    category: "Platform Engineering",
    categoryIcon: <Server className="w-3.5 h-3.5" />,
    impact: "Monolith containerized · Deployment time cut 60%",
    description:
      "Led the containerization and migration of legacy monolithic applications to Docker and Kubernetes on AWS EKS. Designed Helm chart templates for consistent multi-environment deployments, configured ALB ingress, and set up HPA for traffic-driven autoscaling — laying the foundation for a modern, scalable microservices architecture.",
    tech: ["AWS EKS", "Kubernetes", "Docker", "Helm", "ALB", "HPA", "ECR", "Terraform"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
  },
  {
    title: "Disaster Recovery & Backup Implementation",
    company: "Nesto / WIG",
    companyColor: NW,
    category: "Disaster Recovery",
    categoryIcon: <RefreshCw className="w-3.5 h-3.5" />,
    impact: "First DR plan in org history · Recovery validated",
    description:
      "Designed and implemented the organization's first formal DR strategy — automated RDS and EC2 snapshot schedules, S3 cross-region replication for critical data, and documented recovery runbooks for each application tier. Conducted the first-ever DR drill, validating recovery procedures and identifying gaps that were remediated before a real incident.",
    tech: ["AWS Backup", "RDS Snapshots", "S3 Replication", "EC2 AMI", "Route 53", "Runbooks", "Terraform"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
  },
  {
    title: "Infrastructure Automation with Terraform & Ansible",
    company: "Nesto / WIG",
    companyColor: NW,
    category: "IaC",
    categoryIcon: <Cloud className="w-3.5 h-3.5" />,
    impact: "Manual provisioning eliminated · Consistent envs",
    description:
      "Replaced ad-hoc manual infrastructure provisioning with Terraform modules covering VPC, EC2, RDS, S3, and IAM across all brand environments. Used Ansible for server configuration management and application deployment orchestration — ensuring every environment is provisioned identically and changes are version-controlled and auditable.",
    tech: ["Terraform", "Ansible", "AWS", "VPC", "EC2", "RDS", "IAM", "S3"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // AL KABEER
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Full AWS Cloud Migration from On-Premises",
    company: "Al Kabeer",
    companyColor: AK,
    category: "Cloud Migration",
    categoryIcon: <Cloud className="w-3.5 h-3.5" />,
    impact: "100% workload migrated · HA architecture delivered",
    description:
      "Led the end-to-end migration of all on-premises workloads to AWS for a large food production enterprise. Architected a highly available, fault-tolerant multi-tier infrastructure — custom VPC with public/private subnets, EC2 Auto Scaling groups, RDS Multi-AZ, S3 with lifecycle policies, and CloudFront CDN. Provisioned everything via Terraform and CloudFormation, eliminating manual infrastructure management entirely.",
    tech: ["AWS", "Terraform", "CloudFormation", "EC2 Auto Scaling", "RDS Multi-AZ", "VPC", "S3", "CloudFront"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
  },
  {
    title: "CI/CD Pipelines & Automated Deployments",
    company: "Al Kabeer",
    companyColor: AK,
    category: "CI/CD",
    categoryIcon: <GitBranch className="w-3.5 h-3.5" />,
    impact: "Manual deployments replaced · Release risk reduced",
    description:
      "Built fully automated CI/CD pipelines using Jenkins and AWS CodePipeline for application deployments across multiple environments. Integrated shell script-based configuration management and automated health checks post-deployment — replacing risky manual release processes with a repeatable, auditable pipeline that the team could run with confidence.",
    tech: ["Jenkins", "AWS CodePipeline", "CodeBuild", "Shell Scripting", "S3", "EC2", "Ansible"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800",
  },
  {
    title: "Infrastructure Monitoring & Incident Response Setup",
    company: "Al Kabeer",
    companyColor: AK,
    category: "Monitoring & SRE",
    categoryIcon: <Activity className="w-3.5 h-3.5" />,
    impact: "Incident detection time cut by 70%",
    description:
      "Built the organization's first structured monitoring stack using CloudWatch, Nagios, and NewRelic — covering server health, application performance, and custom business metrics. Defined alerting thresholds, SNS-based escalation policies, and on-call runbooks. Transformed incident response from reactive (users reporting issues) to proactive (alerts firing before users notice).",
    tech: ["CloudWatch", "Nagios", "NewRelic", "SNS", "CloudWatch Alarms", "Runbooks", "Linux", "Bash"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
  },
  {
    title: "Disaster Recovery Design & Backup Automation",
    company: "Al Kabeer",
    companyColor: AK,
    category: "Disaster Recovery",
    categoryIcon: <RefreshCw className="w-3.5 h-3.5" />,
    impact: "Business continuity guaranteed · Recovery validated",
    description:
      "Designed and implemented a comprehensive DR and backup strategy for all migrated workloads — automated daily RDS snapshots, EC2 AMI backups, S3 versioning, and cross-region replication for critical data. Documented recovery runbooks for each application tier and validated the full recovery process, ensuring the business could survive any infrastructure failure.",
    tech: ["AWS Backup", "RDS Snapshots", "EC2 AMI", "S3 Versioning", "Cross-Region Replication", "Route 53", "Terraform"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
  },
  {
    title: "Infrastructure as Code & Operational Efficiency",
    company: "Al Kabeer",
    companyColor: AK,
    category: "IaC",
    categoryIcon: <Database className="w-3.5 h-3.5" />,
    impact: "Provisioning time: days → minutes",
    description:
      "Standardized all infrastructure provisioning using Terraform and Ansible — from VPC and compute to application configuration and OS hardening. Eliminated the inconsistency of manually configured servers, reduced provisioning time from days to minutes, and gave the team a version-controlled, auditable record of every infrastructure change.",
    tech: ["Terraform", "Ansible", "AWS", "Linux", "Bash", "Git", "CloudFormation"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // AI / PERSONAL
  // ─────────────────────────────────────────────────────────────────────────
  {
    title: "Agentic AI for Incident Triage & Auto-Runbooks",
    company: "Personal / AI",
    companyColor: AICOLOR,
    category: "Agentic AI",
    categoryIcon: <Bot className="w-3.5 h-3.5" />,
    impact: "Triage time: 20 min → under 3 min",
    description:
      "Built an agentic AI system that ingests Grafana alerts, pulls correlated log context from Loki, and uses an LLM to generate incident summaries, probable root causes, and step-by-step remediation actions — all delivered to the on-call engineer via Slack before they've even opened their laptop. Turns a stressful 3am alert into a structured, actionable brief.",
    tech: ["OpenAI GPT-4", "LangChain", "Python", "Grafana API", "Loki API", "Slack Bolt", "FastAPI"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800",
    isAI: true,
  },
  {
    title: "AI-Assisted DevOps Tooling & Vibe Coding",
    company: "Personal / AI",
    companyColor: AICOLOR,
    category: "AI Dev",
    categoryIcon: <Zap className="w-3.5 h-3.5" />,
    impact: "Production tools shipped 10x faster",
    description:
      "Use Cursor, Claude, and GitHub Copilot as core development tools to build production-grade DevOps utilities — a Kubernetes cost analyzer, Terraform drift detector, and an internal ops dashboard. This isn't about generating boilerplate; it's about combining deep SRE domain knowledge with AI-assisted coding to ship high-quality, real tools at a pace that wasn't previously possible.",
    tech: ["Cursor", "Claude", "GitHub Copilot", "Python", "Terraform", "Kubernetes", "React", "TypeScript"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
    isAI: true,
  },
];

const categoryColors: Record<string, string> = {
  "SRE / Reliability":   "text-green-400",
  "Observability":       "text-emerald-400",
  "FinOps":              "text-yellow-400",
  "AI + SRE":            "text-cyan-400",
  "Agentic AI":          "text-cyan-400",
  "CI/CD":               "text-orange-400",
  "Platform Engineering":"text-blue-400",
  "Disaster Recovery":   "text-rose-400",
  "IaC":                 "text-sky-400",
  "Security":            "text-red-400",
  "Automation":          "text-purple-400",
  "Cloud Migration":     "text-sky-400",
  "Monitoring & SRE":    "text-green-400",
  "AI Dev":              "text-cyan-400",
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Infrastructure Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Real-world DevOps, SRE, cloud, security, observability, and automation work across
            large-scale e-commerce and enterprise environments.
          </p>

          {/* Company legend */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { label: "Mumzworld",     color: MW },
              { label: "Nesto / WIG",   color: NW },
              { label: "Al Kabeer",     color: AK },
              { label: "AI / Personal", color: AICOLOR },
            ].map((c) => (
              <span key={c.label} className={`px-4 py-1.5 text-sm font-body rounded-full border ${c.color}`}>
                {c.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="h-full"
            >
              <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 h-full flex flex-col">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {project.isAI && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-cyan-500/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                      <Bot className="w-3.5 h-3.5" />
                      AI
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 gap-3">

                  {/* Company + category row */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${project.companyColor}`}>
                      {project.company}
                    </span>
                    <span className={`flex items-center gap-1 text-xs font-medium ${categoryColors[project.category] ?? "text-muted-foreground"}`}>
                      {project.categoryIcon}
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Impact */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-xs text-primary font-semibold">{project.impact}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-body bg-primary/10 text-primary rounded-full border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10 text-xs"
                      asChild
                    >
                      <Link to="/contact">
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        Case Study
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-xs"
                      asChild
                    >
                      <Link to="/contact">
                        <ArrowRight className="w-3.5 h-3.5 mr-1.5" />
                        Discuss
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex justify-center mt-14"
        >
          <Link to="/skills">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background px-8 py-6 text-lg font-body shadow-xl"
            >
              <span className="flex items-center gap-2">
                View Skills
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
