import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
  Award,
  Filter,
  X
} from 'lucide-react';
import worksData from '../data/works.json';

export default function Works() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter projects based on categoryIds
  const allProjects = [...worksData.featured, ...worksData.projects];
  const filteredProjects = selectedCategory === 'all' 
    ? allProjects
    : allProjects.filter((project) =>
        project.categoryIds?.includes(selectedCategory)
      );

  // Get project count for each category
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return allProjects.length;
    return allProjects.filter(project => 
      project.categoryIds?.includes(categoryId)
    ).length;
  };

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-yellow-500';
      case 'planning':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="works" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A curated selection of key projects showcasing my expertise across
            Web3, full-stack development, and smart contracts
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
            }`}
          >
            <Filter className="w-4 h-4" />
            All Projects
            <span className="ml-1 px-2 py-1 bg-black/20 rounded-full text-xs">
              {getCategoryCount('all')}
            </span>
          </button>
          {worksData.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
              <span className="ml-1 px-2 py-1 bg-black/20 rounded-full text-xs">
                {getCategoryCount(category.id)}
              </span>
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-400">
            Showing <span className="text-purple-400 font-semibold">{filteredProjects.length}</span> 
            {selectedCategory === 'all' ? ' projects' : ` ${worksData.categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase()} projects`}
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden hover-lift cursor-pointer group"
              onClick={() => openProjectModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient with initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center"
                  style={{ display: project.image ? 'none' : 'flex' }}
                >
                  <div className="text-4xl font-bold text-white opacity-20">
                    {project.title
                      .split(' ')
                      .map((word: string) => word[0])
                      .join('')
                      .slice(0, 3)}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Github className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                    )}
                    {project.liveUrl && (
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                    )}
                  </div>
                </div>

                <p className="text-sm text-purple-400 mb-2">
                  {project.subtitle}
                </p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies
                    .slice(0, 3)
                    .map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-600 text-xs text-gray-400 rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg mb-4">
              No projects found in this category
            </div>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-800 p-6 border-b border-slate-700 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-purple-400">{selectedProject.subtitle}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Project Image */}
              <div className="h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl overflow-hidden">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      // Fallback to gradient with initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center rounded-xl"
                  style={{ display: selectedProject.image ? 'none' : 'flex' }}
                >
                  <div className="text-6xl font-bold text-white opacity-20">
                    {selectedProject.title
                      .split(' ')
                      .map((word: string) => word[0])
                      .join('')
                      .slice(0, 3)}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  About This Project
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.longDescription ||
                    selectedProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(
                    (tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700 text-gray-300 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Project Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className="text-white capitalize">
                        {selectedProject.status.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white">
                        {selectedProject.category}
                      </span>
                    </div>
                    {selectedProject.teamSize && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Team Size:</span>
                        <span className="text-white">
                          {selectedProject.teamSize} member
                          {selectedProject.teamSize > 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {selectedProject.metrics && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Metrics
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Lines of Code:</span>
                        <span className="text-white">
                          {selectedProject.metrics.codeLines.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Commits:</span>
                        <span className="text-white">
                          {selectedProject.metrics.commits}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Test Coverage:</span>
                        <span className="text-white">
                          {selectedProject.metrics.testCoverage}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Performance:</span>
                        <span className="text-white">
                          {selectedProject.metrics.performanceScore}/100
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Challenges & Achievements */}
              {(selectedProject.challenges || selectedProject.achievements) && (
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedProject.challenges && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Challenges
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map(
                          (challenge: string, index: number) => (
                            <li
                              key={index}
                              className="text-gray-300 text-sm flex items-start gap-2"
                            >
                              <span className="text-red-400 mt-1">•</span>
                              {challenge}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {selectedProject.achievements && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.achievements.map(
                          (achievement: string, index: number) => (
                            <li
                              key={index}
                              className="text-gray-300 text-sm flex items-start gap-2"
                            >
                              <span className="text-green-400 mt-1">•</span>
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-slate-700">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Projects Note */}
      <div className="text-center mt-16 pt-8 border-t border-slate-700/50">
        <p className="text-gray-400 text-sm">
          This portfolio showcases selected key projects. I have worked on{' '}
          <span className="text-purple-400 font-semibold">
            20+ additional projects
          </span>{' '}
          including client work, internal tools, and experimental developments.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Contact me to learn more about my complete project portfolio
        </p>
      </div>
    </section>
  );
};
