import React, { useState } from 'react';
import { Code, Database, Link, TestTube, ChevronRight, Star, Calendar, Briefcase } from 'lucide-react';
import skillsData from '../data/skills.json';

const categoryIcons = {
  frontend: Code,
  backend: Database,
  blockchain: Link,
  testing: TestTube,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const selectedCategoryData = skillsData.categories.find(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full-stack expertise from traditional web development to cutting-edge Web3 and AI integration
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillsData.categories.map((category) => {
            const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons];
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="text-sm opacity-75">{category.icon}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skills List */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{selectedCategoryData?.icon}</span>
                <h3 className="text-2xl font-bold text-white">{selectedCategoryData?.name}</h3>
              </div>
              <p className="text-gray-400 mb-8">{selectedCategoryData?.description}</p>
              
              <div className="grid gap-4">
                {selectedCategoryData?.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedSkill?.name === skill.name
                        ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/30'
                        : 'bg-slate-700/30 hover:bg-slate-600/30'
                    }`}
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <h4 className="font-semibold text-white">{skill.name}</h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-600 rounded-full h-2 mb-3">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skill Details */}
          <div className="space-y-6">
            {selectedSkill ? (
              <>
                {/* Selected Skill Details */}
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{selectedSkill.icon}</span>
                    <h4 className="text-xl font-bold text-white">{selectedSkill.name}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-300">
                        {selectedSkill.yearsOfExperience} years experience
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">
                        {selectedSkill.projects} projects completed
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-300">
                        {selectedSkill.level}% proficiency
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-white mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="glass rounded-2xl p-6 text-center">
                <Code className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Click on a skill to see details</p>
              </div>
            )}


            {/* Soft Skills */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">Soft Skills</h4>
              <div className="space-y-3">
                {skillsData.softSkills.map((skill, index) => (
                  <div key={index} className="p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <p className="text-xs text-gray-400">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {skillsData.categories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </div>
            <div className="text-gray-400 text-sm">Technical Skills</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {skillsData.categories.length}
            </div>
            <div className="text-gray-400 text-sm">Skill Categories</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {skillsData.softSkills.length}
            </div>
            <div className="text-gray-400 text-sm">Soft Skills</div>
          </div>
        </div>
      </div>
    </section>
  );
};
