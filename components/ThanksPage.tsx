import React from 'react';
import { CheckIcon } from './Icons';

interface ThanksPageProps {
  onBack: () => void;
}

const ThanksPage: React.FC<ThanksPageProps> = ({ onBack }) => {
  return (
    <div className="bg-zinc-950 text-gray-200 min-h-screen p-4 sm:p-6 md:p-12 flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-2xl bg-zinc-900 p-8 sm:p-12 rounded-lg border border-lime-400/30 shadow-2xl shadow-lime-400/10">
            <div className="w-20 h-20 bg-lime-400/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-lime-400">
                <CheckIcon className="w-12 h-12 text-lime-300" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Obrigado!</h1>
            <p className="text-gray-400 mt-4 text-lg">
                Seu formulário de agendamento foi recebido com sucesso.
            </p>
            <p className="text-gray-300 mt-2">
                Em breve, nossa equipe entrará em contato para confirmar os detalhes do seu <strong>Diagnóstico Estratégico</strong>.
            </p>
            <div className="mt-8">
                <p className="text-sm text-gray-500">
                    <span className="font-bold">Nota:</span> Para que esta página funcione, configure a "Página de Agradecimento" no seu formulário Jotform para redirecionar para a URL da sua landing page com o parâmetro `?page=thanks` no final.
                </p>
            </div>
            <button 
                onClick={onBack}
                className="mt-10 bg-lime-400 hover:bg-lime-300 text-black font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
            >
                Voltar para o Início
            </button>
        </div>
    </div>
  );
};

export default ThanksPage;
