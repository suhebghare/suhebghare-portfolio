import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AWS Infrastructure Automation",
    description:
      "Automated AWS infrastructure deployment using Terraform. Includes VPC, EC2, RDS, S3, CloudFront, and Lambda with complete CI/CD integration.",
    tech: ["Terraform", "AWS", "Jenkins", "Python", "CloudWatch"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    github: "https://github.com/suhebghare",
    live: "#",
  },
  {
    title: "Kubernetes Cluster Setup",
    description:
      "Production-ready Kubernetes cluster with monitoring, logging, and auto-scaling. Deployed microservices with Helm charts and ArgoCD.",
    tech: ["Kubernetes", "Docker", "Helm", "Prometheus", "Grafana"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
    github: "https://github.com/suhebghare",
    live: "#",
  },
  {
    title: "CI/CD Pipeline with Jenkins",
    description:
      "End-to-end CI/CD pipeline with automated testing, security scanning, Docker image building, and deployment to Kubernetes.",
    tech: ["Jenkins", "Docker", "SonarQube", "Trivy", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800",
    github: "https://github.com/suhebghare",
    live: "#",
  },
  {
    title: "Monitoring Stack Implementation",
    description:
      "Complete observability solution with Prometheus for metrics, Grafana for visualization, and ELK stack for centralized logging.",
    tech: ["Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    github: "https://github.com/suhebghare",
    live: "#",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Multi-cloud infrastructure management using Terraform and Ansible. Automated provisioning and configuration management across AWS and Azure.",
    tech: ["Terraform", "Ansible", "AWS", "Azure", "Python"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    github: "https://github.com/suhebghare",
    live: "#",
  },
  {
    title: "GitOps Workflow",
    description:
      "Implemented GitOps practices using ArgoCD for automated application deployment. Git as single source of truth for declarative infrastructure.",
    tech: ["ArgoCD", "Kubernetes", "Helm", "Git", "GitHub Actions"],
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800",
    github: "https://github.com/suhebghare",
    live: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Infrastructure Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            DevOps and SRE projects showcasing automation and reliability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 h-full flex flex-col justify-between">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground font-body leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-body bg-primary/10 text-primary rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
