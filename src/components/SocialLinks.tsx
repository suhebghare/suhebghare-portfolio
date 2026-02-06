import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/suhebghare/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/suhebghare/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/SuhebG", label: "Twitter" },
  { icon: Mail, href: "mailto:suhebgharedxb@gmail.com", label: "Email" },
];

export const SocialLinks = () => {
  return (
    <motion.div
      // initial={{ x: -100, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed left-6 sm:left-2 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4"
    >
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 group"
            aria-label={link.label}
          >
            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>
        );
      })}
    </motion.div>
  );
};
