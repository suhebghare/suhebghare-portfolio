import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading development of cloud-based solutions and mentoring junior developers.",
    responsibilities: [
      "Architected and implemented microservices infrastructure",
      "Led team of 5 developers in agile environment",
      "Reduced application load time by 60% through optimization",
      "Integrated AI-powered features using modern ML frameworks",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects from concept to deployment.",
    responsibilities: [
      "Built responsive web applications using React and Node.js",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Managed database design and optimization",
      "Implemented CI/CD pipelines for automated deployments",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Creative Studio",
    period: "2019 - 2020",
    description: "Created engaging user interfaces and interactive experiences.",
    responsibilities: [
      "Developed interactive websites using modern JavaScript frameworks",
      "Collaborated with UX team on user research and testing",
      "Implemented complex animations and transitions",
      "Maintained codebase quality and documentation",
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
