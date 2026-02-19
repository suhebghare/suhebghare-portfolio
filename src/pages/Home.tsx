import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden text-foreground font-sans">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.2); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
      `}</style>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <IntroOverlay key="intro" />
        ) : (
          <MainContent key="content" />
        )}
      </AnimatePresence>
    </div>
  );
};

// --------------------------------------------------------
// 1️⃣ INTRO OVERLAY (matches theme colors now)
// --------------------------------------------------------

const IntroOverlay = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center p-4 relative z-10">
        <div className="mb-6 pb-4">
          <motion.h1
            className="text-7xl md:text-9xl font-black cursive-font tracking-tight text-white"
            initial={{ x: "-120%", opacity: 0, rotateY: -90 }}
            animate={{
              x: "0%",
              opacity: 1,
              rotateY: 0,
            }}
            transition={{
              x: { delay: 0.5, duration: 1.5, ease: "easeOut" },
              opacity: { delay: 0.5, duration: 1.5 },
              rotateY: { delay: 0.5, duration: 1.5 },
            }}
          >
            Suheb Ghare
          </motion.h1>
        </div>

        <div className="pb-4">
          <motion.p
            className="text-3xl md:text-5xl cursive-font tracking-wider"
            style={{
              background: "linear-gradient(90deg, hsl(185 80% 60%), hsl(30 100% 65%), hsl(185 80% 60%))",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ x: "-120%", opacity: 0 }}
            animate={{
              x: "0%",
              opacity: 1,
              backgroundPosition: ["0% center", "200% center"],
            }}
            transition={{
              x: { delay: 1.5, duration: 1.5, ease: "easeOut" },
              opacity: { delay: 1.5, duration: 1.5 },
              backgroundPosition: { delay: 2.2, duration: 3, repeat: Infinity },
            }}
          >
            SRE & DevOps Engineer
          </motion.p>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="mt-8 flex gap-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Code2 className="w-8 h-8 text-cyan-400" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Palette className="w-8 h-8 text-orange-400" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Zap className="w-8 h-8 text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// --------------------------------------------------------
// 2️⃣ MAIN HERO SECTION (now uses theme colors completely)
// --------------------------------------------------------

const MainContent = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">
      <SocialLinks />
      {/* Open to Work Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-30 right-6"
      >
        <div className="relative flex items-center justify-center">
          {/* Glow */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-60"
          />

          {/* Badge */}
          <div className="relative px-4 py-1.5 bg-gradient-to-r from-primary/90 to-secondary/90 rounded-full border border-primary/50 shadow-md">
            <span className="text-xs font-bold text-background">
              Open to Work
            </span>
          </div>
        </div>
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Developer Image with animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <img
                src="/suheb.jpeg"
                alt="Suheb Ghare"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center border-4 border-background"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-accent-foreground" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Name with animated gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-primary/30 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-lg font-semibold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Suheb Ghare
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-6xl md:text-8xl font-display font-bold"
          >
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SRE &
            </motion.span>{" "}
            <motion.span
              className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent inline-block"
              animate={{
                y: [0, -10, 0],
                backgroundPosition: ["0% center", "100% center"],
              }}
              transition={{
                y: { duration: 2, repeat: Infinity, delay: 0.3 },
                backgroundPosition: { duration: 3, repeat: Infinity },
              }}
              style={{ backgroundSize: "200% auto" }}
            >
              DevOps Engineer
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Building reliable, scalable infrastructure and automating everything.
            Specializing in cloud architecture, CI/CD pipelines, and ensuring
            99.9% uptime with modern DevOps practices.
          </motion.p>

          {/* Animated stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
          >
            {[
              { icon: Code2, label: "Deployments", value: "500+" },
              { icon: Zap, label: "Uptime", value: "99.9%" },
              { icon: Palette, label: "Pipelines", value: "50+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-primary/20 rounded-2xl p-6 shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                </motion.div>
                <p className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link to="/projects">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-body shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </Link>
            
            <Button
              size="lg"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Suheb-Ghare-resume.pdf";
                link.download = "Suheb-Ghare-resume.pdf";
                link.click();
              }}
              className="group relative overflow-hidden bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg font-body shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg font-body shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
