import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const projects = [
    {
      title: "AI-powered Chatbot",
      description: "An advanced NLP-driven chatbot for automated customer support with seamless ticketing integration. This system leverages cutting-edge machine learning algorithms to provide human-like interactions.",
      techs: ['Next.js', 'React', 'Node.js', 'TensorFlow', 'Flask'],
      logo: "/api/placeholder/100/100",
      link: "#",
      github: "#"
    },
    {
      title: "Blockchain Supply Chain",
      description: "Decentralized application ensuring product authenticity and supply chain transparency via blockchain. This solution revolutionizes traditional supply chain management with immutable record-keeping.",
      techs: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Truffle'],
      logo: "/api/placeholder/100/100",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-24 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Innovative <span className="text-primary">Projects</span>
        </motion.h2>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="grid gap-16 lg:grid-cols-2 max-w-6xl">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out w-full max-w-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-8">
                    <img src={project.logo} alt={`${project.title} logo`} className="w-20 h-20 rounded-full mr-6 border-2 border-primary" />
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-2">{project.title}</h3>
                      <div className="text-sm font-medium text-muted-foreground">Cutting-edge Technology</div>
                    </div>
                  </div>
                  <p className="text-foreground text-base mb-8">{project.description}</p>
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-secondary text-secondary-foreground px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-6 h-6" />
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                    <a href={project.link} className="text-primary hover:text-primary/80 text-base font-medium transition-colors">
                      Learn More →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;