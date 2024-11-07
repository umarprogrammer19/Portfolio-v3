import React from 'react';
import ProjectCard from './Card'; // Import the new ProjectCard component

function Project() {
  const projects = [
    {
      title: 'Tic Tac Toe Game',
      description: 'A simple Tic Tac Toe game built with JavaScript.',
      imageSrc: '/project1.jpg',
      link: 'https://tic-tac-toe-game-umber-nu.vercel.app',
    },
    {
      title: 'Resume Project',
      description: 'My personal resume website built using Node and HTML.',
      imageSrc: '/project2.jpg',
      link: 'https://milestone-1-2-sumbul.vercel.app',
    },
    {
      title: 'Todo App',
      description: 'A fully functional Todo App built with React and Next.js.',
      imageSrc: '/project3.jpg',
      link: 'https://gleaming-macaron-fadcf7.netlify.app',
    },
    {
      title: 'Count Down Timer',
      description: 'A simple countdown timer built with JavaScript.',
      imageSrc: '/project4.jpg',
      link: 'https://count-down-timer-8hv4.vercel.app',
    },
    {
      title: 'Website Project',
      description: 'A sample website project using Next.js and TypeScript.',
      imageSrc: '/site.jpg',
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A portfolio website showcasing my work and skills.',
      imageSrc: '/website.jpg',
      link: '#',
    },
  ];

  return (
    <div id="projects">
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-400 underline mb-4">My Projects</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400">
              Each project showcases my commitment to creating user-friendly, efficient, and visually engaging solutions.
            </p>
          </div>

          {/* Grid of Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
