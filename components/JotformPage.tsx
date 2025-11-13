import React, { useEffect } from 'react';
import { CheckIcon, ShieldIcon } from './Icons';

interface JotformPageProps {
  onBack: () => void;
}

const JotformPage: React.FC<JotformPageProps> = ({ onBack }) => {
  useEffect(() => {
    const scriptId = 'jotform-script';

    // Avoid adding the script if it already exists
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/253156169630054';
    script.id = scriptId;
    
    const container = document.getElementById('jotform-container');
    if (container) {
      container.appendChild(script);
    } else {
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup on component unmount
      const jotformScript = document.getElementById(scriptId);
      if (jotformScript) {
        jotformScript.remove();
      }

      const jotformIframe = document.querySelector('iframe[id*="JotFormIFrame"]');
      if (jotformIframe && jotformIframe.parentElement) {
          jotformIframe.parentElement.remove();
      }
      
      const feedbackLink = document.querySelector('.jotform-feedback-link');
      if(feedbackLink && feedbackLink.parentElement) {
          feedbackLink.parentElement.remove();
      }
    };
  }, []);

  return (
    <div className="bg-zinc-950 text-gray-200 min-h-screen p-4 sm:p-6 md:p-12 flex flex-col items-center">
        <div className="w-full max-w-6xl">
             <button 
                onClick={onBack}
                className="mb-8 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors self-start inline-flex items-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="m15 18-6-6 6-6"/></svg>
                Voltar para a página principal
            </button>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                {/* Coluna do Formulário */}
                <div className="bg-zinc-900 p-6 sm:p-8 rounded-lg border border-gray-800 h-full">
                    <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Quase lá! Agende seu Diagnóstico</h1>
                    <p className="text-gray-400 text-center mb-8">Preencha o formulário abaixo para garantir sua vaga. Entraremos em contato em breve para confirmar o melhor horário.</p>
                    <div id="jotform-container" className="min-h-[500px]">
                        {/* The Jotform script will inject the form here. */}
                    </div>
                </div>

                {/* Coluna de Reforço */}
                <div className="space-y-8 row-start-1 lg:row-start-auto">
                    <div className="bg-zinc-900 p-8 rounded-lg border border-gray-800">
                         <img src="https://i.pinimg.com/736x/67/a1/3a/67a13a8537c4dd7c21411c2f96638b1e.jpg" alt="João Xavier" className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-lime-400" />
                        <h2 className="text-xl md:text-2xl font-bold text-white text-center">Você está a um passo de <span className="text-lime-400">transformar sua casa</span>.</h2>
                        <p className="text-gray-400 text-center mt-2">"Estou ansioso para te ajudar a realizar seu sonho. Preencha ao lado e vamos começar!"</p>
                    </div>

                     <div className="bg-zinc-900 p-8 rounded-lg border border-gray-800">
                        <h3 className="font-bold text-lg text-white mb-4">O que você garante ao agendar:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <CheckIcon className="w-5 h-5 text-lime-400 flex-shrink-0 mr-3 mt-1" />
                                <span>Uma <span className="font-semibold text-white">visita presencial</span> para análise completa do seu espaço.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon className="w-5 h-5 text-lime-400 flex-shrink-0 mr-3 mt-1" />
                                <span>Um <span className="font-semibold text-white">Croqui de Soluções em PDF</span>, com o plano de ação inicial.</span>
                            </li>
                             <li className="flex items-start">
                                <CheckIcon className="w-5 h-5 text-lime-400 flex-shrink-0 mr-3 mt-1" />
                                <span>O primeiro passo concreto para ter a casa que você merece, <span className="font-semibold text-white">sem gastar uma fortuna</span>.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-lime-900/50 border border-lime-700 p-6 rounded-lg flex items-start gap-4">
                        <ShieldIcon className="w-8 h-8 text-lime-400 flex-shrink-0 mt-1" />
                        <div>
                             <h4 className="text-lg font-bold text-lime-400">Garantia de Risco Zero</h4>
                             <p className="mt-1 text-lime-300">Lembre-se: O Diagnóstico Estratégico é o investimento mais seguro que você fará. Se ao final da visita você achar que não valeu a pena, você não paga. <span className="font-bold">O risco é todo meu.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default JotformPage;
