import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    beforeImage: string;
    afterImage: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, beforeImage, afterImage }) => {
    return (
        <div className="group">
            <div className="relative rounded-lg overflow-hidden border-2 border-gray-800 group-hover:border-lime-400/50 transition-colors duration-300">
                <img src={afterImage} alt={`Depois - ${title}`} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                    <div className="relative">
                         <img src={beforeImage} alt={`Antes - ${title}`} className="w-32 h-20 object-cover rounded-md border-2 border-black/50" />
                         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <p className="text-white font-bold text-sm tracking-widest uppercase">Antes</p>
                         </div>
                    </div>
                </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                </div>
            </div>
            <p className="mt-4 text-gray-400">{description}</p>
        </div>
    );
};
