import React from 'react';
import { SolutionCard } from './components/SolutionCard';
import { ProjectCard } from './components/ProjectCard';
import { HomeIcon, FileTextIcon, ClockIcon, LightbulbIcon } from './components/Icons';
import MetaPixel from './components/MetaPixel';

const App: React.FC = () => {
    return (
        <div className="bg-zinc-950 text-gray-200 min-h-screen">
            <MetaPixel />
            <main>
                {/* Seção 1: A Promessa */}
                <section className="text-center py-12 md:py-20 px-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/80 via-zinc-950 to-zinc-950">
                    <div className="max-w-5xl mx-auto">
                        <div className="max-w-4xl mx-auto mb-12 bg-red-600 text-white p-6 rounded-lg shadow-lg shadow-red-600/30">
                            <p className="font-bold uppercase tracking-wide text-center text-sm md:text-lg py-2">
                                Aviso: O que impede a maioria das pessoas em Camaquã de ter a casa dos sonhos não é dinheiro. É a informação que está nesta página.
                            </p>
                        </div>

                        <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight text-white">Ter a casa dos seus sonhos em Camaquã custa <span className="text-lime-400">muito menos</span> do que te contaram.</h1>
                        <p className="mt-8 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">A verdade é que a falta de um plano custa caro. Descubra como uma consultoria inicial inteligente pode transformar seu lar com um orçamento que você pode pagar.</p>
                    </div>
                </section>

                {/* Seção 2: A Isca */}
                <section className="bg-black py-12 md:py-20 px-6 text-center">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-bold text-white">Tudo começa com o <span className="text-lime-400">Diagnóstico Estratégico</span> do seu Lar.</h2>
                        <p className="mt-6 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">Chega de conversas vagas. Em uma única visita à sua casa, vamos fazer um raio-x do seu espaço e, ao final, você recebe um documento tangível: um Croqui de Soluções em PDF. É o seu primeiro plano de ataque, com um desenho-esboço do novo layout e as ações de maior impacto para transformar seu ambiente.</p>
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 text-left">
                            <div className="bg-zinc-900 p-6 rounded-lg border border-gray-800">
                                <HomeIcon className="w-10 h-10 text-lime-400 mb-4"/>
                                <h3 className="text-xl font-bold text-white">Visita e Análise</h3>
                                <p className="text-gray-400 mt-2">Vamos até sua casa para entender suas necessidades e o potencial de cada ambiente.</p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg border border-gray-800">
                                <LightbulbIcon className="w-10 h-10 text-lime-400 mb-4"/>
                                <h3 className="text-xl font-bold text-white">Croqui de Soluções</h3>
                                <p className="text-gray-400 mt-2">Criamos um desenho-esboço com o novo layout e as ações de maior impacto para o seu espaço.</p>
                            </div>
                             <div className="bg-zinc-900 p-6 rounded-lg border border-gray-800">
                                <FileTextIcon className="w-10 h-10 text-lime-400 mb-4"/>
                                <h3 className="text-xl font-bold text-white">PDF Entregável</h3>
                                <p className="text-gray-400 mt-2">Você recebe um documento tangível com seu plano de ataque para iniciar a transformação.</p>
                            </div>
                        </div>
                        <div className="mt-16">
                            <figure className="max-w-md mx-auto bg-zinc-900 p-4 border border-gray-800 rounded-lg shadow-lg">
                                <img 
                                    src="https://i.pinimg.com/1200x/47/c3/45/47c345775431df3980808adf6a58a306.jpg" 
                                    alt="Exemplo de Croqui de Soluções entregue no Diagnóstico Estratégico" 
                                    className="rounded-md w-full aspect-[9/16] object-cover"
                                />
                                <figcaption className="text-sm text-gray-500 mt-3 italic">
                                    Exemplo real do Croqui de Soluções que você recebe em PDF.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* Seção 3: A Filosofia */}
                <section className="py-12 md:py-20 px-6">
                     <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white">Chega de "adiar seu sonho". É hora de ter um <span className="text-lime-400">Plano de Batalha</span>.</h2>
                        <p className="mt-6 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">Esqueça o "designer de luxo". Eu sou um Especialista em Planejamento Residencial. Minha missão é uma só: criar um guia, um mapa exato para a sua casa, que te faz economizar em cada etapa. Eu encontro os materiais certos pelo preço certo, defino o layout que aproveita cada centímetro e te impeço de cometer erros caros.</p>
                    </div>
                </section>

                {/* Seção 4: As Soluções */}
                <section className="bg-black py-12 md:py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-white">Um Plano de Ação para Cada Necessidade</h2>
                            <p className="mt-6 text-lg md:text-xl font-bold text-lime-400 max-w-3xl mx-auto">Veja abaixo mais soluções que ofereço:</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                            <SolutionCard
                                title='Pacote "Guia de Compras"'
                                description="Ideal para quem quer executar por conta própria com um guia claro para economizar."
                                features={[
                                    "Imagens 3D (Renders): Para visualizar exatamente como seu ambiente vai ficar.",
                                    "Lista de Orçamento Inteligente: Um guia de compras com sugestões de móveis, tintas e objetos, focando no custo-benefício."
                                ]}
                            />
                            <SolutionCard
                                title='Pacote "Pra Construir sem Erro"'
                                description="Ideal para quem vai contratar mão de obra (marceneiro, pedreiro) e precisa de precisão técnica."
                                features={[
                                    "Imagens 3D (Renders): Para visualizar exatamente como seu ambiente vai ficar.",
                                    "Desenhos Técnicos Essenciais: Plantas com medidas, pontos de elétrica e detalhamentos para que a execução saia perfeita."
                                ]}
                            />
                        </div>
                        <div className="mt-16 pt-12 border-t border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-8 text-center">Exemplos dos Nossos Entregáveis</h3>
                            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left">
                                <figure className="bg-zinc-900 p-4 border border-gray-800 rounded-lg shadow-lg">
                                    <img 
                                        src="https://i.pinimg.com/1200x/c4/db/95/c4db952214ac483673b38740b41650d8.jpg" 
                                        alt="Exemplo de Render 3D" 
                                        className="rounded-md w-full aspect-[9/16] object-cover"
                                    />
                                    <figcaption className="text-sm text-gray-500 mt-3 italic text-center">
                                        <strong>Imagem 3D (Render):</strong> Visualize seu espaço antes de começar.
                                    </figcaption>
                                </figure>
                                <figure className="bg-zinc-900 p-4 border border-gray-800 rounded-lg shadow-lg">
                                    <img 
                                        src="https://i.pinimg.com/736x/d4/bd/f8/d4bdf8e8be1f47deae946ac7a9bb5d9e.jpg" 
                                        alt="Exemplo de Desenho Técnico" 
                                        className="rounded-md w-full aspect-[9/16] object-cover"
                                    />
                                    <figcaption className="text-sm text-gray-500 mt-3 italic text-center">
                                        <strong>Desenho Técnico:</strong> Precisão para a execução perfeita do projeto.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção 5: A Prova */}
                <section className="py-12 md:py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-white">Veja o que um bom plano e <span className="text-lime-400">pouco investimento</span> podem fazer.</h2>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                            <ProjectCard
                                title="Sala de Estar da Família Souza"
                                description="Investimento Total de R$ 350. Usamos a solução 'Guia de Compras' com foco em pintura e novo layout."
                                afterImage="https://i.pinimg.com/736x/0b/c4/07/0bc4079ff6601d37198f14a1caa83fb0.jpg"
                            />
                            <ProjectCard
                                title="Cozinha Mariana"
                                description="A cliente estava prestes a investir 18 mil reais. Nossa análise e projeto inteligente reduziram o custo final para 7 mil, sem abrir mão da qualidade."
                                afterImage="https://i.pinimg.com/736x/35/b8/08/35b808fb92aad6593961d191667df9bd.jpg"
                            />
                        </div>
                    </div>
                </section>
                
                {/* NOVA SEÇÃO 5.5: A Virada de Jogo */}
                <section className="bg-black py-12 md:py-20 px-6">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-4xl font-bold text-white">O Segredo que eu Trouxe das Lojas de Luxo para <span className="text-lime-400">Camaquã</span></h2>
                            <p className="text-base md:text-lg text-gray-300">"Esta é uma das lojas mais luxuosas de Santa Catarina, onde tive a oportunidade de trabalhar. O que eu aprendi lá dentro? Que existem dois tipos de projetos: os que parecem caros e os que realmente são. Meu maior aprendizado foi dominar as técnicas e materiais que criam um alto impacto visual com um custo inteligente. Hoje, minha especialidade é aplicar esse conhecimento para que você, em Camaquã, tenha o máximo de resultado com o mínimo de investimento."</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <figure>
                                <img src="https://i.pinimg.com/736x/1d/ef/91/1def912771d0ed5e56bcb3f634f7001c.jpg" alt="Loja de luxo em Santa Catarina" className="rounded-lg shadow-lg filter grayscale aspect-[9/16] object-cover" />
                                <figcaption className="text-center mt-3 text-sm text-gray-500 italic">Aprendendo com os melhores para entregar o mais inteligente para você.</figcaption>
                            </figure>
                             <figure>
                                <img src="https://i.pinimg.com/736x/67/a1/3a/67a13a8537c4dd7c21411c2f96638b1e.jpg" alt="Foto com a equipe" className="rounded-lg shadow-lg aspect-[9/16] object-cover" />
                                <figcaption className="text-center mt-3 text-sm text-gray-500 italic">Anos de experiência em equipe, agora focados em um único objetivo: o seu sonho.</figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* Seção 6: O Investimento e a Chamada Final */}
                <section className="py-12 md:py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white">Sua transformação começa agora. <span className="text-lime-400">A decisão é sua.</span></h2>
                            <div className="mt-8 bg-lime-900/50 border border-lime-700 rounded-lg p-4 flex items-center justify-center gap-4 max-w-3xl mx-auto">
                                <ClockIcon className="w-10 h-10 text-lime-400 flex-shrink-0" />
                                <p className="text-lime-300 text-left">Para garantir máxima atenção e qualidade, minha agenda para o Diagnóstico Estratégico é limitada. Neste momento, restam apenas <strong>3 vagas</strong> para agendamento na próxima semana. Não adie o conforto da sua família.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 my-16">
                            <div className="bg-zinc-900 p-8 rounded-lg border border-gray-800 text-center">
                                <h3 className="text-xl font-bold text-lime-400">Diagnóstico Estratégico</h3>
                                <p className="text-sm text-gray-400 mb-4">(Visita + Croqui de Soluções)</p>
                                <div className="my-6 text-3xl md:text-5xl font-black text-white">R$ 39</div>
                                <p className="text-gray-300">Visita em sua casa + um PDF com o croqui (desenho-esboço) do novo layout e as 3 principais ações de baixo custo para o seu espaço.</p>
                            </div>
                             <div className="bg-zinc-900 p-8 rounded-lg border border-gray-800 text-center">
                                <h3 className="text-xl font-bold text-lime-400">Projetos de Transformação</h3>
                                <p className="text-sm text-gray-400 mb-4">("Guia de Compras" ou "Pra Construir sem Erro")</p>
                                <div className="my-6 text-2xl md:text-3xl font-black text-white">A partir de <span className="text-3xl md:text-5xl">R$ 140</span></div>
                                <p className="text-gray-300">Soluções completas como o "Guia de Compras" ou o "Pra Construir sem Erro".</p>
                            </div>
                        </div>

                        <div className="bg-zinc-900 border-2 border-lime-400 p-8 rounded-lg text-center shadow-2xl shadow-lime-400/20">
                            <div>
                                <h4 className="text-xl font-bold text-lime-400">MINHA GARANTIA PESSOAL DE SERIEDADE</h4>
                                <p className="mt-2 text-gray-300">O Diagnóstico Estratégico é o investimento mais seguro que você fará. Se ao final da nossa visita você achar que o Croqui de Soluções que eu te entregar não te trouxe clareza ou não valeu a pena, você não precisa pagar os R$ 39. <strong>O risco é todo meu.</strong></p>
                            </div>
                        </div>

                        <div className="mt-16 bg-black p-8 sm:p-12 rounded-lg border border-gray-800">
                             <h3 className="text-2xl font-bold text-center mb-8 text-white">Sim, quero agendar meu diagnóstico!</h3>
                             <a 
                                href="https://submit.jotform.com/253156169630054" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block w-full bg-lime-400 text-black text-center font-bold text-sm md:text-base py-4 rounded-lg hover:bg-lime-300 transition-all transform hover:scale-[1.03] shadow-lg shadow-lime-400/30 hover:shadow-lime-300/40 relative overflow-hidden group"
                            >
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/20 rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                <span className="relative">SIM, QUERO AGENDAR MEU DIAGNÓSTICO E GARANTIR MINHA VAGA!</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="text-center py-8 px-6 border-t border-gray-800">
                <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} João Xavier Decor. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default App;