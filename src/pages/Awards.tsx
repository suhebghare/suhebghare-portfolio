import { motion } from "framer-motion";
import { Star, Medal } from "lucide-react";
import { Card } from "@/components/ui/card";

const awards = [
  {
    icon: Star,
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    year: "2023",
    description: "Professional certification demonstrating expertise in designing distributed systems on AWS.",
    color: "from-secondary to-secondary/60",
  },
  {
    icon: Star,
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    year: "2023",
    description: "Foundational certification demonstrating cloud computing knowledge and AWS services expertise.",
    color: "from-primary to-primary/60",
  },
  {
    icon: Medal,
    title: "Hackathon Winner",
    organization: "College Hackathon",
    year: "2017",
    description: "First place in college coding competition with innovative technical solution.",
    color: "from-accent to-accent/60",
  },
];

const Awards = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Awards & Certificates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Recognition and professional certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-500 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="p-8 relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 bg-gradient-to-br ${award.color} rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-background" />
                      </div>
                      <span className="px-3 py-1 bg-background text-primary text-sm font-body rounded-full border border-primary/30">
                        {award.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>

                    <p className="text-lg font-body text-secondary mb-4">
                      {award.organization}
                    </p>

                    <p className="text-muted-foreground font-body leading-relaxed">
                      {award.description}
                    </p>

                    {/* Decorative elements */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Certifications", value: "2" },
            { label: "Awards", value: "5" },
            { label: "Projects", value: "25+" },
            { label: "Years Experience", value: "8+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-body text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Awards;
