
import React from 'react';

const Cadastro: React.FC = () => {
  return (
    <div className="bg-zinc-950 text-gray-200 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full mx-auto bg-black p-8 sm:p-12 rounded-lg border border-gray-800">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Agende seu Diagnóstico</h1>
        <p className="text-center text-gray-400 mb-8">Preencha os dados abaixo para que possamos entrar em contato e agendar a sua visita.</p>
        <form action="/agradecimento" method="GET">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                className="w-full bg-zinc-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                className="w-full bg-zinc-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
                placeholder="seu.email@exemplo.com"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
              <input 
                type="tel" 
                name="whatsapp" 
                id="whatsapp" 
                required 
                className="w-full bg-zinc-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
                placeholder="(51) 99999-9999"
              />
            </div>
          </div>
          <div className="mt-10">
            <button 
              type="submit"
              className="w-full bg-lime-400 text-black font-bold text-sm md:text-base text-center py-4 rounded-lg hover:bg-lime-300 transition-all transform hover:scale-[1.03] shadow-lg shadow-lime-400/30 hover:shadow-lime-300/40"
            >
              ENVIAR E AGENDAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
