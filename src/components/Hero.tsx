import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import aboutData from '../data/about.json';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full-Stack Developer',
    'React Specialist',
    'Node.js Expert',
    'Problem Solver',
    'Code Architect'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 text-purple-300/20 font-mono text-sm animate-pulse">
        {'{ coding: true }'}
      </div>
      <div className="absolute top-40 right-20 text-blue-300/20 font-mono text-sm animate-pulse delay-1000">
        {'console.log("Hello World")'}
      </div>
      <div className="absolute bottom-40 left-20 text-green-300/20 font-mono text-sm animate-pulse delay-2000">
        {'npm run dev'}
      </div>
      <div className="absolute bottom-20 right-10 text-yellow-300/20 font-mono text-sm animate-pulse delay-500">
        {'git commit -m "feat: awesome"'}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-500 p-1 hover:scale-110 transition-transform duration-300">
              <img
                src="/thisisninda.png"
                alt="Ninda Mawarni - Full-Stack Developer"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">
              {aboutData.personal.name.split(' ')[0]}
            </span>
          </h1>

          {/* Animated Role */}
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 h-12 flex items-center justify-center">
            <span className="font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            {aboutData.personal.tagline}
          </p>

          {/* Bio */}
          <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {aboutData.bio.short}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </button>
            <button
              onClick={scrollToAbout}
              className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              View My Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                100K+
              </div>
              <div className="text-gray-400 text-sm">Lines of Code</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                1.8K+
              </div>
              <div className="text-gray-400 text-sm">Coffee Cups</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-purple-400 transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};
