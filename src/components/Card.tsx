import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, link }) => {
  return (
    <div className="relative bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
      {/* Image with fixed aspect ratio */}
      <div className="relative w-full h-64">
        <Image
          alt={title}
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      <div className="p-6">
        <h2 className="text-indigo-500 text-xs uppercase font-semibold mb-1">{title}</h2>
        <h3 className="text-lg font-semibold text-gray-300 mb-4">{description}</h3>

        <div className="mt-4 flex justify-end">
          <Link href={link} className="text-indigo-400 hover:text-indigo-600 transition-colors duration-300">
              View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
