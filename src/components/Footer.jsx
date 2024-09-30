import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-white transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={24} />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start max-w-xl">
            <h2 className="text-2xl font-bold mb-2">Pratik Harsora</h2>
            <p className="text-gray-400 mb-4">
              Tech Enthusiast with Strong Web Development & Leadership Skills | Experienced in Hackathons and Team Projects
            </p>
            <div className="flex space-x-6 mb-4">
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink href="#" icon={Github} />
              <SocialLink href="#" icon={Mail} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Instagram} />
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Resume
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center">
                <Github size={20} className="mr-2" />
                Star
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/src/components/Logo1.png"
              alt="Pratik Harsora"
              className="w-60 h-60 rounded-full border-4 border-blue-500"
            />
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          Made with ❤️ by Pratik Harsora
        </div>
      </div>
    </footer>
  );
};

export default Footer;