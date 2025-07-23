import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  // Simplified projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React and Node.js featuring user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/pratikharsora",
      demo: "https://github.com/pratikharsora",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management platform with real-time updates and drag-and-drop functionality.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/pratikharsora",
      demo: "https://github.com/pratikharsora",
      category: "frontend",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application with location-based forecasts and beautiful data visualizations.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Chart.js", "Weather API"],
      github: "https://github.com/pratikharsora",
      demo: "https://github.com/pratikharsora",
      category: "frontend",
    },
    {
      id: 4,
      title: "Chat Application",
      description:
        "Real-time chat application with WebSocket integration and user authentication.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      github: "https://github.com/pratikharsora",
      demo: "https://github.com/pratikharsora",
      category: "fullstack",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Modern portfolio website with responsive design and smooth animations.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/pratikharsora",
      demo: "https://github.com/pratikharsora",
      category: "frontend",
    },
    {
      id: 6,
      title: "Blog Platform",
      description:
        "A full-featured blog platform with admin panel and content management.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/pratikharsora",
      demo: "https://github.com/pratikharsora",
      category: "fullstack",
    },
  ];

  const categories = ["all", "frontend", "fullstack"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            💼 Portfolio
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="flex bg-muted/50 backdrop-blur-sm border border-border rounded-xl p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`
                  px-6 py-3 rounded-lg font-medium capitalize transition-all duration-300 relative
                  ${
                    filter === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects List - Modern Timeline Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } max-lg:flex-col`}
              >
                {/* Project Visual */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 border border-border/50 backdrop-blur-sm min-h-[300px] max-w-lg"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                  </div>

                  {/* Project Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20 text-primary">
                      {project.category === "fullstack"
                        ? "⚡"
                        : project.category === "frontend"
                        ? "🎨"
                        : "💻"}
                    </div>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-xl text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </motion.a>
                  </div>
                </motion.div>

                {/* Project Content */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm text-primary font-medium uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="px-4 py-2 bg-muted/50 text-muted-foreground text-sm rounded-lg border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span>Source Code</span>
                    </a>
                    <div className="w-1 h-1 bg-border rounded-full"></div>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < filteredProjects.length - 1 && (
                <div className="flex items-center justify-center mt-16">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-muted/30 backdrop-blur-sm border border-border rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground">
              Interested in collaborating?
            </h3>
            <p className="text-muted-foreground max-w-md">
              Check out more of my work on GitHub or get in touch to discuss
              your next project.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/pratikharsora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Github size={20} />
                GitHub Profile
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border text-foreground font-semibold rounded-xl hover:bg-muted/50 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
