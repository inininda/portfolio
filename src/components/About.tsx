import React from 'react';
import { Calendar, MapPin, Coffee, Code, Users, Award } from 'lucide-react';
import aboutData from '../data/about.json';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        {/* Hero Bio Section */}
        <div className="mb-16">
          <div className="glass rounded-3xl p-8 lg:p-12 hover-lift">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Code className="w-8 h-8 text-purple-400" />
                  My Story
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                  {aboutData.bio.long.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                {/* Current Status */}
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-green-400" />
                    Current Status
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-semibold">{aboutData.currentStatus.availability}</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p><span className="text-gray-400">Location:</span> {aboutData.currentStatus.location}</p>
                      <p><span className="text-gray-400">Work Type:</span> {aboutData.currentStatus.workType}</p>
                      <p><span className="text-gray-400">Currently Learning:</span> {aboutData.currentStatus.currentlyLearning.join(', ')}</p>
                      <p><span className="text-gray-400">Current Project:</span> {aboutData.currentStatus.currentProject}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h4 className="font-bold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey & Fun Facts Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Coding Journey */}
          <div className="glass rounded-2xl p-8 hover-lift">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-blue-400" />
              Coding Journey
            </h3>
            <div className="space-y-6">
              {aboutData.journey.milestones.slice(-4).map((milestone, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{milestone.icon}</span>
                      <h4 className="font-semibold text-white">{milestone.title}</h4>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <div className="glass rounded-2xl p-8 hover-lift">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Coffee className="w-6 h-6 text-yellow-400" />
              Fun Facts
            </h3>
            <div className="space-y-4">
              {aboutData.funFacts.slice(0, 4).map((fact, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-700/30 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-xl">{fact.icon}</span>
                  </div>
                  <p className="text-sm text-gray-300 flex-1">{fact.fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Interests & Hobbies</h3>
          <div className="space-y-8">
            {aboutData.interests.map((category, categoryIndex) => (
              <div key={categoryIndex} className="glass rounded-2xl p-8 hover-lift">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Award className="w-5 h-5 text-purple-400" />
                  {category.category}
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-700/30 transition-colors group">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{item.name}</p>
                        <p className="text-xs text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(aboutData.technicalSkills).map(([key, skill]) => (
              <div key={key} className="glass rounded-xl p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <h4 className="text-lg font-bold text-white">{skill.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.bio.highlights.map((highlight, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center hover-lift">
                <div className="text-3xl mb-3">{highlight.split(' ')[0]}</div>
                <p className="text-sm text-gray-300">{highlight.substring(highlight.indexOf(' ') + 1)}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
