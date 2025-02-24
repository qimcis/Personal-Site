import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Pearl",
      description: "Webcomic Ecosystem",
      link: "/pearl",
      image: "/pearl.png"
    },
    {
      title: "Miso",
      description: "AI Flashcards",
      link: "/miso",
      image: "/miso.png"
    },
    {
      title: "Chromatic Data",
      description: "Data Dashboard",
      link: "/chromatic",
      image: "/chromatic.png"
    }
  ];

  return (
    <div className="max-w-xl mx-auto flex flex-col text-black px-6 my-10">
      <h1 className="text-4xl font-bold">what i've been working on:</h1>
      <div className="flex flex-col gap-6 mt-10">
        {projects.map((project) => (
          <Link 
            href={project.link} 
            key={project.title}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-md h-64">
              <Image 
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300" />
              <div className="relative z-10 p-6">
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <p className="text-2xl mt-2 text-white">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;