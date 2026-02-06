import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "SRE/DevOps Engineer",
    company: "Mumzworld.com",
    period: "2024 - Present",
    description: "Leading Site Reliability Engineering and DevOps operations for e-commerce platform.",
    responsibilities: [
      "Ensure high availability and reliability of production systems",
      "Implement and maintain CI/CD pipelines for continuous delivery",
      "Monitor system performance and optimize infrastructure",
      "Manage cloud infrastructure and containerized applications",
      "Automate operational tasks and improve deployment processes",
      "Collaborate with development teams to enhance system reliability",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Western International LLC",
    period: "2022 - 2024",
    description: "Led DevOps initiatives and cloud infrastructure management for enterprise clients.",
    responsibilities: [
      "Automated deployment procedures for Enterprise applications across Production, Staging, and Development environments",
      "Reduced complexity and closed the gap between application changes and reliability maintenance",
      "Deployed and configured microservice applications using Containerization platforms like Docker",
      "Implemented container orchestration using Kubernetes",
      "Designed and implemented CI/CD pipelines for automated deployments",
      "Managed AWS cloud infrastructure and services",
    ],
  },
  {
    title: "Cloud Engineer",
    company: "Al-Kabeer Group of Companies",
    period: "2018 - 2022",
    description: "Led cloud migration and infrastructure automation initiatives.",
    responsibilities: [
      "Migrated full organizational workload to cloud environments",
      "Architected highly available, scalable, resilient, secure and fault-tolerant solutions on AWS",
      "Successfully migrated infrastructure from non-cloud/cloud to AWS cloud",
      "Configured fully automated CI/CD pipelines using Jenkins, Code Pipeline and Shell Scripts",
      "Provisioned infrastructure using Terraform",
      "Implemented monitoring with CloudWatch, Nagios, and NewRelic",
    ],
  },
  {
    title: "Software Engineer",
    company: "Datagames Pune",
    period: "2017 - 2018",
    description: "Developed and implemented .NET applications and Microsoft platform solutions.",
    responsibilities: [
      "Assisted in analysis, architecture, design, development and implementation of .NET applications",
      "Configured and implemented applications based on Microsoft products/platforms (.NET, SQL Server)",
      "Contributed actively to building and growing the .NET team",
      "Worked on application support and maintenance",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Work Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Professional journey and contributions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background hidden md:block animate-glow" />

                <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-500 ml-0 md:ml-20">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl md:hidden">
                        <Briefcase className="w-6 h-6 text-background" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-xl font-body text-muted-foreground mb-3">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 text-secondary" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      {exp.responsibilities.map((responsibility, i) => (
                        <motion.div
                          key={responsibility}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3 px-4 py-3 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0" />
                          <span className="font-body text-sm text-foreground leading-relaxed">
                            {responsibility}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
