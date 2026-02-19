import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Mumbai University",
    location: "MPCOE, Ratnagiri, Maharashtra, India",
    period: "2013 - 2017",
    description: "Focused on computer science fundamentals, software engineering, and system design. Built strong foundation in programming and technology.",
    achievements: ["Computer Science Engineering", "Technical Project Development", "Software Development Skills"],
  },
];

const Education = () => {
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
            Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Academic journey and achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                        <GraduationCap className="w-6 h-6 text-background" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-xl font-body text-muted-foreground mb-4">
                          {edu.school}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-secondary" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-display font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <div className="grid gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.div
                            key={achievement}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            className="flex items-center gap-3 px-4 py-2 bg-background rounded-lg border border-border"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                            <span className="font-body text-sm text-foreground">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center mt-12"
        >
          <Link to="/experience">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background px-8 py-6 text-lg font-body shadow-xl"
            >
              <span className="flex items-center gap-2">
                View Experience
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
