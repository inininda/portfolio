import React from 'react';
import { Heart, Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import aboutData from '../data/about.json';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: aboutData.social.github.url,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: aboutData.social.linkedin.url,
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: `mailto:${aboutData.personal.email}`,
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold text-white font-mono">
                &lt;thisisninda /&gt;
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {aboutData.personal.tagline}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Passionate about creating exceptional digital experiences through
              clean code, innovative solutions, and continuous learning. Always
              ready for the next challenge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-gray-500">Email:</span>
                <br />
                <a
                  href={`mailto:${aboutData.personal.email}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {aboutData.personal.email}
                </a>
              </p>
              <p className="text-gray-400">
                <span className="text-gray-500">Location:</span>
                <br />
                <span className="text-gray-300">
                  {aboutData.personal.location}
                </span>
              </p>
              <p className="text-gray-400">
                <span className="text-gray-500">Status:</span>
                <br />
                <span className="text-green-400">
                  {aboutData.currentStatus.availability}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow me:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <p>
                © {currentYear} {aboutData.personal.name}. Made with{' '}
                <Heart className="w-4 h-4 text-red-400 inline mx-1" />
                and lots of ☕
              </p>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Code-themed Footer Bottom */}
      <div className="bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs text-gray-500 font-mono">
              // Built with React, TypeScript, Tailwind CSS, and passion for
              clean code
            </p>
            <p className="text-xs text-gray-600 font-mono mt-1">
              console.log("Thanks for visiting! 🚀");
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
