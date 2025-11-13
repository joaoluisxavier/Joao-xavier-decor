import React, { useEffect } from 'react';

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
    
    // The script might take a moment to load and inject the form.
    // We append it to a specific container to have more control.
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

      // The Jotform script typically creates an iframe with an ID like "JotFormIFrame-..."
      // and may wrap it in other elements. We'll try to remove the iframe's container.
      const jotformIframe = document.querySelector('iframe[id*="JotFormIFrame"]');
      if (jotformIframe && jotformIframe.parentElement) {
          jotformIframe.parentElement.remove();
      }
      
      // Also remove the feedback link if it exists
      const feedbackLink = document.querySelector('.jotform-feedback-link');
      if(feedbackLink && feedbackLink.parentElement) {
          feedbackLink.parentElement.remove();
      }
    };
  }, []);

  return (
    <div className="bg-zinc-950 text-gray-200 min-h-screen p-4 sm:p-6 md:p-12 flex flex-col items-center">
        <div className="w-full max-w-4xl">
             <button 
                onClick={onBack}
                className="mb-6 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors self-start"
            >
                &larr; Voltar
            </button>
            <div className="bg-zinc-900 p-6 sm:p-8 rounded-lg border border-gray-800">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Agende seu Diagnóstico</h1>
                <p className="text-gray-400 text-center mb-8">Preencha o formulário abaixo para garantir sua vaga. Entraremos em contato em breve.</p>
                <div id="jotform-container" className="min-h-[500px]">
                    {/* The Jotform script will inject the form here. */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default JotformPage;
