import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:suhebgharedxb@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`;
    window.location.href = mailtoLink;
  };

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
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Let's discuss your next project or collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 text-foreground">
                Let's Connect
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "suhebgharedxb@gmail.com",
                  link: "mailto:suhebgharedxb@gmail.com",
                },
                { 
                  icon: Phone, 
                  label: "Phone", 
                  value: "+971-58-2362962",
                  link: "tel:+971582362962",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Dubai, UAE",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/suhebghare",
                  link: "https://www.linkedin.com/in/suhebghare",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "Connect on WhatsApp",
                  link: "https://wa.me/+971582362962",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                      <Icon className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-body">
                        {item.label}
                      </p>
                      <p className="text-foreground font-body">{item.value}</p>
                    </div>
                  </motion.div>
                );
                
                return item.link ? (
                  <a key={item.label} href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="bg-card border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-background font-body text-lg py-6 group"
              >
                <span className="flex items-center gap-2">
                  Send Message
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
