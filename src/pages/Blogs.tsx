import { motion } from "framer-motion";
import { BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6"
          >
            <BookOpen className="w-10 h-10 text-background" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            DevOps & SRE Blogs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Sharing knowledge, experiences, and best practices in DevOps, Site Reliability Engineering, and Cloud Infrastructure
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                What You'll Find Here
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed text-lg">
                I write about real-world DevOps challenges, solutions, and insights gained from managing production infrastructure at scale. My blog covers topics ranging from Kubernetes orchestration to AWS cost optimization, CI/CD best practices, and everything in between.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Infrastructure as Code",
                  description: "Terraform, CloudFormation, and automation strategies"
                },
                {
                  title: "Container Orchestration",
                  description: "Kubernetes, Docker, EKS, and microservices architecture"
                },
                {
                  title: "CI/CD Pipelines",
                  description: "Jenkins, GitHub Actions, GitLab CI, and deployment automation"
                },
                {
                  title: "Monitoring & Observability",
                  description: "Prometheus, Grafana, CloudWatch, and incident management"
                },
                {
                  title: "Cloud Architecture",
                  description: "AWS, GCP best practices and cost optimization techniques"
                },
                {
                  title: "SRE Practices",
                  description: "Reliability engineering, SLOs, SLIs, and on-call strategies"
                },
              ].map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    {topic.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Ready to Dive In?
              </h3>
              <p className="text-muted-foreground font-body mb-6">
                Visit my blog to explore detailed articles, tutorials, and insights from the trenches of DevOps and SRE
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background px-8 py-6 text-lg font-body shadow-xl"
                asChild
              >
                <a
                  href="https://blogs.suhebghare.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2">
                    Visit Blog
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center mt-12"
        >
          <a href="https://blogs.suhebghare.tech" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg font-body"
            >
              <span className="flex items-center gap-2">
                Explore All Articles
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
