import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        "service_xxivqgd", // Replace with your EmailJS service ID
        "template_8ioc6dn", // Replace with your EmailJS template ID
        form.current,
        "-5dGHqXlX1QxC1OAD" // Replace with your EmailJS public key
      );

      if (result.text === "OK") {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon. 🚀",
        });
        form.current.reset();
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pratikharsora41@gmail.com",
      href: "mailto:pratikharsora41@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "pratik353",
      href: "https://github.com/pratik353",
      color: "text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/pratik-harsora-40b108203",
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
      color: "text-green-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 overflow-hidden bg-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-full">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Get In Touch
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="hero-name">Let's Work Together</span>
            <motion.span
              className="ml-3 text-primary"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 inline" />
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? I'm always excited to discuss new
            projects, creative opportunities, or just have a friendly chat about
            technology.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                <Zap className="w-6 h-6 text-primary" />
                <span>Let's Connect</span>
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have a project in mind? Whether it's a web application, mobile
                app, or just a technical discussion, I'd love to hear from you!
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center space-x-4 p-4 glass-card rounded-xl hover:shadow-glow transition-all duration-300 group-hover:scale-105"
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className={`p-3 rounded-lg bg-background/50 ${item.color}`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {item.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ) : (
                    <div className="flex items-center space-x-4 p-4 glass-card rounded-xl">
                      <div
                        className={`p-3 rounded-lg bg-background/50 ${item.color}`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {item.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-6">
              <div className="p-6 glass-card rounded-xl border border-primary/20">
                <h4 className="font-semibold mb-2 flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Available for</span>
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full-time opportunities</li>
                  <li>• Freelance projects</li>
                  <li>• Technical consultations</li>
                  <li>• Open source collaborations</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="glass-card border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                  <Send className="w-6 h-6 text-primary" />
                  <span>Send Message</span>
                </h3>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg flex items-center space-x-3 ${
                        status.type === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-500"
                          : "bg-red-500/10 border border-red-500/20 text-red-500"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span className="text-sm">{status.message}</span>
                    </motion.div>
                  )}

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full magnetic bg-gradient-to-r from-primary to-accent hover:shadow-glow py-6 text-lg font-semibold"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Click to send your message</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
