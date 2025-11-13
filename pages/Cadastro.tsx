
import React, { useEffect } from 'react';

const Cadastro: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://form.jotform.com/jsform/253156169630054";
    
    const formContainer = document.getElementById('jotform-container');
    
    if (formContainer) {
      formContainer.appendChild(script);
    }
    
    return () => {
      if (formContainer) {
        formContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="bg-zinc-950 text-gray-200 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full mx-auto bg-black p-8 sm:p-12 rounded-lg border border-gray-800">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Agende seu Diagnóstico</h1>
        <p className="text-center text-gray-400 mb-8">Preencha os dados abaixo para que possamos entrar em contato e agendar a sua visita.</p>
        
        <div id="jotform-container"></div>
      </div>
    </div>
  );
};

export default Cadastro;
