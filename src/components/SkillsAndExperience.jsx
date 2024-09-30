import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight } from 'lucide-react';

const Timeline = ({ children }) => (
  <div className="relative">{children}</div>
);

const TimelineItem = ({ children }) => (
  <div className="mb-8 flex">{children}</div>
);

const TimelineConnector = () => (
  <div className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-primary"></div>
);

const TimelineIcon = ({ children }) => (
  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-8 ring-background">
    {children}
  </div>
);

const TimelineContent = ({ children }) => (
  <div className="ml-6 flex-grow">{children}</div>
);

const SkillsAndExperience = () => {
  const skills = {
    programmingLanguages: [
      { name: 'PHP', proficiency: 90 },
      { name: 'Python', proficiency: 85 },
      { name: 'Java', proficiency: 80 },
      { name: 'JavaScript', proficiency: 95 },
      { name: 'HTML', proficiency: 100 },
      { name: 'CSS', proficiency: 95 },
    ],
    frameworksLibraries: [
      { name: 'Django', proficiency: 85 },
      { name: 'React', proficiency: 90 },
      { name: 'Tailwind CSS', proficiency: 95 },
      { name: 'Bootstrap', proficiency: 90 },
      { name: 'jQuery', proficiency: 85 },
      { name: 'Laravel', proficiency: 80 },
    ],
    tools: [
      { name: 'MySQL', proficiency: 90 },
      { name: 'Postman', proficiency: 85 },
      { name: 'VS Code', proficiency: 95 },
      { name: 'Git', proficiency: 90 },
      { name: 'GitHub', proficiency: 90 },
      { name: 'GitLab', proficiency: 85 },
      { name: 'Netlify', proficiency: 80 },
      { name: 'Vercel', proficiency: 80 },
    ]
  };

  const experiences = [
    {
      company: 'RED Labz',
      position: 'Full stack web application development internship',
      date: 'August 2022 - Present',
      responsibilities: [
        'Implementing security measures such as data validation, encryption, and authentication to protect web applications from security threats.',
        'Working with a diverse set of technologies, including HTML, CSS, JavaScript, PHP, Python, and other relevant languages and frameworks.',
        'Developing and managing databases and integrating them with the application to store and retrieve data.'
      ]
    },
    {
      company: 'RED Labz',
      position: 'Backend web development internship',
      date: 'July 2022 - August 2022',
      responsibilities: [
        'Developing and maintaining the server-side components of web applications using PHP and related technologies.',
        'Creating and managing databases, as well as integrating them with PHP to store and retrieve data efficiently.',
        'Implementing security measures such as data validation, encryption, and authentication to protect web applications from security threats.'
      ]
    },
    {
      company: 'RED Labz',
      position: 'Front-end web development internship',
      date: 'March 2022 - April 2022',
      responsibilities: [
        'Designing and crafting user interfaces that are not only visually appealing but also user-friendly and intuitive.',
        'Gaining hands-on experience with HTML, CSS, and JavaScript to develop interactive and dynamic web applications.',
        'Implementing responsive design principles to ensure that web applications are accessible and function seamlessly on various devices and screen sizes.'
      ]
    }
  ];

  const SkillBar = ({ name, proficiency }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-primary">{name}</span>
        <span className="text-sm font-medium text-primary">{proficiency}%</span>
      </div>
      <Progress value={proficiency} className="w-full" />
    </div>
  );

  const SkillCategory = ({ title, skills }) => (
    <Card className="mb-6">
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} proficiency={skill.proficiency} />
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills-experience" className="py-20 bg-gradient-to-b from-background/60 to-background/40 relative overflow-hidden">
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
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-4xl font-bold text-center mb-10">Skills & <span className="text-primary">Experience</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Proficiencies</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SkillCategory title="Programming Languages" skills={skills.programmingLanguages} />
              <SkillCategory title="Frameworks & Libraries" skills={skills.frameworksLibraries} />
              <SkillCategory title="Tools & Technologies" skills={skills.tools} />
            </motion.div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
            <Card>
              <CardContent className="p-6">
                <Timeline>
                  {experiences.map((exp, index) => (
                    <TimelineItem key={index}>
                      {index !== experiences.length - 1 && <TimelineConnector />}
                      <TimelineIcon>
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-foreground">RL</span>
                        </div>
                      </TimelineIcon>
                      <TimelineContent>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="text-lg font-semibold text-primary">{exp.position}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{exp.company} | {exp.date}</p>
                          <ul className="list-none space-y-1">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="text-sm flex items-start">
                                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;