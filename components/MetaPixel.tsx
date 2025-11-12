import { useEffect } from 'react';

// Estende a interface da janela para incluir o fbq para o TypeScript
declare global {
    interface Window {
        fbq: any;
        _fbq: any;
    }
}

const PIXEL_ID = '1912501926344949'; // SEU ID DO PIXEL joaodecorOFICIAL

const MetaPixel = () => {
  useEffect(() => {
    // Evita que o script seja adicionado múltiplas vezes
    if (window.fbq) return;

    // Função auto-executável (IIFE) para carregar o script do Meta Pixel
    (function(f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode!.insertBefore(t,s)})(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
  }, []); // O array vazio [] garante que este código rode apenas uma vez

  return null; // Este componente não renderiza nada visualmente
};

export default MetaPixel;