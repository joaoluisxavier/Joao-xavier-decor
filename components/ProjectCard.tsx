import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    afterImage: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, afterImage }) => {
    return (
        <div className="group">
            <div className="relative rounded-lg overflow-hidden border-2 border-gray-800 group-hover:border-lime-400/50 transition-colors duration-300">
                <img src={afterImage} alt={`Depois - ${title}`} className="w-full aspect-[9/16] object-cover transition-transform duration-500 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
                </div>
            </div>
            <p className="mt-4 text-gray-400">{description}</p>
        </div>
    );
};
