import { motion } from "framer-motion";
import { Cloud, Server, GitBranch, Container, Shield, Gauge, Users, Bell } from "lucide-react";

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud Technologies",
    skills: ["AWS", "GCP", "EC2", "S3", "Lambda", "CloudFront", "CloudWatch", "VPC", "IAM", "EKS", "ECS"],
    color: "from-primary to-primary/60",
  },
  {
    icon: Container,
    title: "Containerization & Orchestration",
    skills: ["Docker", "Kubernetes", "EKS", "ECS", "Helm", "GitOps", "ArgoCD", "KEDA", "Karpenter"],
    color: "from-secondary to-secondary/60",
  },
  {
    icon: GitBranch,
    title: "CI/CD & Version Control",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "Code Pipeline", "Git"],
    color: "from-accent to-accent/60",
  },
  {
    icon: Gauge,
    title: "Monitoring & Logging",
    skills: ["CloudWatch", "NewRelic", "Grafana Cloud", "Prometheus", "ELK Stack", "PagerDuty"],
    color: "from-primary to-secondary",
  },
  {
    icon: Server,
    title: "Databases & Storage",
    skills: ["RDS", "PostgreSQL", "DynamoDB", "DocumentDB", "MySQL", "Redis", "S3"],
    color: "from-secondary to-accent",
  },
  {
    icon: Shield,
    title: "Infrastructure & Configuration",
    skills: ["Terraform", "CloudFormation", "Ansible", "Serverless", "Infrastructure as Code", "Linux"],
    color: "from-accent to-primary",
  },
  {
    icon: Users,
    title: "SDLC & Project Management",
    skills: ["Jira", "Confluence", "Agile", "Scrum", "DevOps Practices"],
    color: "from-primary to-accent",
  },
  {
    icon: Bell,
    title: "Collaboration Tools",
    skills: ["Slack", "PagerDuty", "Git", "Documentation"],
    color: "from-secondary to-primary",
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-background via-background/95 to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            DevOps tools and technologies I use to build reliable infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" 
                     style={{ background: `linear-gradient(135deg, hsl(185 80% 50% / 0.3), hsl(30 100% 60% / 0.3))` }} />
                
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                      <Icon className="w-6 h-6 text-background" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-foreground">
                      {category.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-3 flex-1">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + skillIndex * 0.05 }}
                        className="px-4 py-2 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors cursor-default group/skill h-fit"
                      >
                        <span className="text-sm font-body text-foreground group-hover/skill:text-primary transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl shadow-accent/10"
        >
          <h2 className="text-3xl font-display font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Core Competencies</h2>
          <div className="space-y-6">
            {["Infrastructure as Code", "CI/CD Pipeline Design", "System Reliability", "Microservices Architecture", "EKS & Container Orchestration", "AI/ML Infrastructure", "AWS Cost Optimization"].map((skill, index) => (
              <div key={skill}>
                <div className="flex justify-between mb-2">
                  <span className="font-body text-foreground">{skill}</span>
                  <span className="font-body text-primary">99%</span>
                </div>
                <div className="h-3 bg-background rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "99%" }}
                    transition={{ delay: 1 + index * 0.2, duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
