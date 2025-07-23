import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Code,
  Briefcase,
  Award,
  TrendingUp,
  Sparkles,
  Zap,
  Target,
  Calendar,
  MapPin,
} from "lucide-react";

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="group relative"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      },
    }}
    whileHover={{ scale: 1.05, rotateY: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="glass-card p-6 rounded-xl border border-primary/20 hover:shadow-glow transition-all duration-300 h-full">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-inner">
            <img
              src={`/icons/${skill.icon}`}
              alt={skill.name}
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="w-10 h-10 hidden items-center justify-center text-primary font-bold text-lg">
              {skill.name.charAt(0)}
            </div>
          </div>
          <motion.div
            className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-3 h-3 text-white" />
          </motion.div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {skill.name}
          </h4>
          <div className="flex items-center justify-center mt-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < (skill.level || 4)
                      ? "bg-primary shadow-glow"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.2,
        },
      },
    }}
    className="group"
  >
    <Card className="glass-card border-0 hover:shadow-2xl transition-all duration-500">
      <CardContent className="p-8">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {experience.position}
                </h3>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  {experience.type}
                </Badge>
              </div>

              <div className="flex items-center space-x-4 text-muted-foreground text-sm mb-3">
                <div className="flex items-center space-x-1">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium">{experience.company}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.duration}</span>
                </div>
                {experience.location && (
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {experience.description}
            </p>

            {experience.achievements && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-foreground flex items-center space-x-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Key Achievements</span>
                </h4>
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {experience.technologies && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-foreground">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Updated skills data with levels
const skillsData = {
  frontend: [
    { name: "React.js", icon: "react.svg", level: 5 },
    { name: "JavaScript", icon: "javascript.svg", level: 5 },
    { name: "HTML5", icon: "html.svg", level: 5 },
    { name: "CSS3", icon: "css.svg", level: 5 },
    { name: "TailwindCSS", icon: "tailwindcss.svg", level: 4 },
    { name: "Bootstrap", icon: "bootstrap.svg", level: 4 },
  ],
  backend: [
    { name: "Node.js", icon: "node-js.svg", level: 4 },
    { name: "Python", icon: "python.svg", level: 4 },
    { name: "PHP", icon: "php.svg", level: 3 },
  ],
  databases: [
    { name: "MySQL", icon: "mysql.svg", level: 4 },
    { name: "PostgreSQL", icon: "postgresql.svg", level: 3 },
  ],
  tools: [
    { name: "Git", icon: "git.svg", level: 4 },
    { name: "GitHub", icon: "github.svg", level: 4 },
    { name: "VS Code", icon: "vscode.svg", level: 5 },
    { name: "Vite", icon: "vite.svg", level: 4 },
  ],
  ai: [
    { name: "OpenAI", icon: "openai.svg", level: 3 },
    { name: "Claude AI", icon: "claude.svg", level: 3 },
  ],
};

const experienceData = [
  {
    position: "Full Stack Developer",
    company: "Freelance",
    type: "Contract",
    duration: "2023 - Present",
    location: "Remote",
    description:
      "Developing modern web applications using React, Node.js, and cutting-edge technologies. Specialized in creating responsive, user-friendly interfaces and robust backend systems.",
    achievements: [
      "Built 10+ responsive web applications with 99% uptime",
      "Improved client website performance by 40% through optimization",
      "Implemented modern UI/UX designs increasing user engagement by 60%",
      "Successfully delivered projects ahead of schedule consistently",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "TailwindCSS",
      "JavaScript",
      "Git",
    ],
  },
  {
    position: "Web Development Lead",
    company: "Tech Startup",
    type: "Part-time",
    duration: "2022 - 2023",
    location: "India",
    description:
      "Led a team of developers in creating innovative web solutions for clients. Focused on modern development practices and agile methodologies.",
    achievements: [
      "Led a team of 3 developers on multiple projects",
      "Established coding standards and best practices",
      "Reduced development time by 30% through efficient workflows",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "PHP", "MySQL", "JavaScript", "Git", "Agile"],
  },
];

const SkillsAndExperience = () => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

  return (
    <section
      ref={sectionRef}
      id="skills-experience"
      className="relative py-20 overflow-hidden bg-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
        <motion.div
          className="absolute top-40 left-20 w-24 h-24 bg-accent/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
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
              <Code className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Skills & Experience
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="hero-name">Technical Expertise</span>
            <motion.span
              className="ml-3 text-primary"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Zap className="w-8 h-8 inline" />
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional digital experiences with
            modern technologies. Here's my technical skill set and professional
            journey in web development.
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-3">
              <Target className="w-6 h-6 text-primary" />
              <span>Technical Skills</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="space-y-12">
            {Object.entries(skillsData).map(
              ([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="space-y-6"
                >
                  <h4 className="text-xl font-semibold capitalize text-primary flex items-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span>{category.replace(/([A-Z])/g, " $1").trim()}</span>
                  </h4>
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                    variants={containerVariants}
                  >
                    {skills.map((skill, index) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        index={index + categoryIndex * 3}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span>Professional Experience</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey in web development and the impact I've made
            </p>
          </motion.div>

          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="glass-card p-8 rounded-2xl border border-primary/20">
              <h4 className="text-2xl font-bold mb-4 flex items-center justify-center space-x-3">
                <Award className="w-6 h-6 text-primary" />
                <span>Always Learning & Growing</span>
              </h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly
                exploring new frameworks, tools, and best practices to deliver
                cutting-edge solutions.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Next.js",
                  "TypeScript",
                  "AI/ML",
                  "Cloud Computing",
                  "Mobile Development",
                ].map((skill, index) => (
                  <Badge
                    key={skill}
                    className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    Currently Learning: {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;
