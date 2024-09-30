import React from 'react';
import { BookOpen, Calendar, MapPin } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const Education = () => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background/80 to-background/60 relative overflow-hidden">
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
      <div className="container mx-auto px-4 max-w-5xl z-10 relative">
        <h2 className={`text-3xl font-bold mb-8 text-center ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Education</h2>
        <div className={`p-8 rounded-lg shadow-md border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} flex flex-col md:flex-row`}>
          <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
            <img 
              src="/src/components/education.png"
              alt="University or Education Image" 
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center mb-6">
              <BookOpen className="w-10 h-10 mr-4 text-teal-500 flex-shrink-0" />
              <div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>LUKHDHIRJI ENGINEERING COLLEGE</h3>
                <p className="text-lg text-teal-500 font-medium">Bachelor of Technology (Diploma)</p>
              </div>
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${isDark ? 'text-gray-200' : 'text-gray-700'} mb-6`}>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-teal-500" />
                <span>2021 - 2024 | Pursuing</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-teal-500" />
                <span>Morbi, Gujarat</span>
              </div>
            </div>
            <div className="mb-4">
              <h4 className={`text-lg font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-2`}>Major</h4>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Information Technology</p>
            </div>
            <div>
              <h4 className={`text-lg font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-2`}>Key Courses</h4>
              <ul className={`list-disc list-inside ${isDark ? 'text-gray-300' : 'text-gray-700'} grid grid-cols-1 sm:grid-cols-2 gap-2`}>
                <li>Data Structures and Algorithms</li>
                <li>Database Management Systems</li>
                <li>Web Development</li>
                <li>Computer Networks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;