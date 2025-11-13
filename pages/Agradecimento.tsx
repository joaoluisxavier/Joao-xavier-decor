
import React from 'react';
import { CheckIcon } from '../components/Icons';

const Agradecimento: React.FC = () => {
  return (
    <div className="bg-zinc-950 text-gray-200 min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-md mx-auto">
        <div className="bg-lime-400 text-black rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
          <CheckIcon className="w-16 h-16" strokeWidth={3}/>
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white">Agradecemos o seu contato!</h1>
        <p className="mt-4 text-base md:text-lg text-gray-400">
          Recebemos suas informações. Em breve, nossa equipe entrará em contato com você pelo WhatsApp para finalizar o agendamento.
        </p>
        <a 
          href="/" 
          className="mt-10 inline-block bg-lime-400 text-black font-bold text-sm md:text-base py-3 px-8 rounded-lg hover:bg-lime-300 transition-all transform hover:scale-[1.03]"
        >
          Voltar para a Página Inicial
        </a>
      </div>
    </div>
  );
};

export default Agradecimento;
