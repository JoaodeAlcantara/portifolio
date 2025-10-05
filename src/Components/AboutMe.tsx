import CardContent from "./CardContent";
import { MdDownload } from "react-icons/md";
import { FaPhoneAlt, FaCode, FaRocket, FaUsers } from "react-icons/fa";
import { useState, useEffect } from "react";

interface AboutMeProps {
    onToggleView: () => void;
    isAnimating: boolean;
    isFirstLoad: boolean;
    setIsFirstLoad: (value: boolean) => void;
}

const cardList = [
    {
        icon: <FaCode size={50} />,
        iconColor: 'from-blue-500 to-blue-600',
        title: 'Desenvolvimento',
        text: 'Criação de aplicações web modernas e responsivas usando as melhores práticas e tecnologias atuais.'
    },
    {
        icon: <FaRocket size={50} />,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Performance',
        text: 'Otimização de código e estruturas para garantir máxima velocidade e eficiência em todas as aplicações.'
    },
    {
        icon: <FaUsers size={50} />,
        iconColor: 'from-green-500 to-green-600',
        title: 'Colaboração',
        text: 'Trabalho em equipe e comunicação eficaz para entregar projetos que superam expectativas.'
    },
]

function AboutMe({ onToggleView, isAnimating, isFirstLoad, setIsFirstLoad }: AboutMeProps) {
    const [animationStage, setAnimationStage] = useState(0);
    const [visibleCards, setVisibleCards] = useState<number[]>([]);

    useEffect(() => {
        if (!isFirstLoad) {
            // Se não é primeira carga, mostra tudo imediatamente
            setAnimationStage(3);
            setVisibleCards(cardList.map((_, index) => index));
            return;
        }

        setTimeout(() => setAnimationStage(1), 900);
        
        setTimeout(() => {
            cardList.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleCards(prev => [...prev, index]);
                }, index * 200);
            });
        }, 1200);
        
        setTimeout(() => setAnimationStage(2), 1800);
        
        setTimeout(() => {
            setAnimationStage(3);
            setIsFirstLoad(false);
        }, 2200);
    }, [isFirstLoad, setIsFirstLoad]);

    return (
        <>
            <section className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl py-6 px-4 mb-10 lg:mb-0 lg:py-8 lg:px-10 shadow-2xl w-full max-w-6xl relative ${
                isFirstLoad 
                    ? `transition-all duration-800 ${animationStage >= 1 ? 'animate-slide-in-right' : 'transform translate-x-full opacity-0'}`
                    : ''
            }`}>
                <div className="relative z-10">

                    <div className={`text-center mb-10 ${
                        isFirstLoad 
                            ? `transition-all duration-500 ${animationStage >= 1 ? 'animate-fade-in-blur' : 'opacity-0 blur-sm'}`
                            : ''
                    }`} style={isFirstLoad ? { animationDelay: '1000ms' } : {}}>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Bem-vindo ao meu
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Portfólio</span>
                        </h1>
                    </div>

                    <div className="max-w-4xl mx-auto mb-12 text-lg text-black leading-relaxed text-center">
                        <p className="">
                            Sou <strong className="text-black">desenvolvedor full-stack
                                </strong> com foco em <span className="text-blue-600 font-semibold">
                                desenvolvimento back-end
                            </span>.
                            Faço de sistema de informação, com previsão de formação para o final de 2027. Tenho experiencia de desenvolvimento de aplicações web através de projetos onde busco entregar valor real através de softwares bem construídos
                        </p>

                        <br />

                        <p>
                            Estou em busca da minha primeira oportunidade para iniciar minha jornada profissional, evoluir técnica e pessoalmente e contribuir de forma concreta em soluções reais. Procuro equipes com desafios técnicos, aprendizado contínuo e colaboração genuína.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12 group/cards cursor-default">
                        {
                            cardList.map((i, idx)=> (
                                <div 
                                    key={idx}
                                    className={`${
                                        isFirstLoad 
                                            ? (visibleCards.includes(idx) ? 'animate-fade-in-blur' : 'opacity-0 filter blur-sm transform translate-y-4 scale-90')
                                            : ''
                                    }`}
                                >
                                    <CardContent 
                                        icon={i.icon}
                                        iconColor={i.iconColor}
                                        title={i.title}
                                        text={i.text}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
                        isFirstLoad 
                            ? `transition-all duration-600 ${animationStage >= 2 ? 'animate-slide-in-bottom' : 'opacity-0 transform translate-y-8'}`
                            : ''
                    }`}>
                        <button className="group flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            <FaPhoneAlt className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                            <span>Entrar em Contato</span>
                        </button>

                        <button className="group flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-300">
                            <MdDownload className="mr-3 group-hover:bounce transition-transform duration-300" />
                            <span>Baixar Currículo</span>
                        </button>
                    </div>
                </div>

                <button
                    onClick={onToggleView}
                    disabled={isAnimating}
                    className={`flag-button absolute -bottom-18 lg:-bottom-16 right-4 lg:right-10 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-600 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed ${
                        isFirstLoad 
                            ? `transition-all duration-1200 ${animationStage >= 3 ? 'animate-flag-slide' : 'transform -translate-x-48 opacity-0'}`
                            : 'transition-colors duration-300'
                    }`}
                >
                    Ver Projetos
                </button>
            </section>
        </>
    )
}

export default AboutMe