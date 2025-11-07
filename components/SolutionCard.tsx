import React from 'react';
import { CheckIcon } from './Icons';

interface SolutionCardProps {
    title: string;
    description: string;
    features: string[];
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, features }) => {
    return (
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-lime-400/30 rounded-lg p-8 h-full flex flex-col transition-all duration-300 hover:border-lime-300 hover:shadow-2xl hover:shadow-lime-400/20 hover:scale-[1.03]">
            <h3 className="text-xl md:text-2xl font-bold text-lime-400">{title}</h3>
            <p className="mt-2 text-gray-400 flex-grow">{description}</p>
            <div className="mt-8 border-t border-gray-700 pt-6 space-y-4">
                <p className="font-bold text-white">O que você recebe:</p>
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-lime-400 flex-shrink-0 mr-3 mt-1" />
                            <span className="text-gray-300">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};