import { useState, useEffect } from 'react';
import foto_perfil from '../assets/foto_perfil.jpg';
import qrcode from '../assets/qrcode.png';

import {
    IoLogoJavascript,
    IoLogoNodejs,
    IoLogoLinkedin,
    IoLogoGithub
} from "react-icons/io";
import {
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiSass,
    SiMysql,
    SiSharp,
    SiDotnet,
    SiSupabase ,
    SiN8N,
    SiPrisma 
} from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";

export interface Technology {
    name: string;
    icon: React.ReactNode;
    color: string;
}

interface SocialLink {
    name: string;
    icon: React.ReactNode;
    url: string;
    color: string;
}

interface SidebarProps {
    isFirstLoad: boolean;
}

const technologies: Technology[] = [
    { name: 'React', icon: <SiReact size={20} />, color: 'bg-cyan-500' },
    { name: '.NET', icon: <SiDotnet size={20} />, color: 'bg-purple-500' },
    { name: 'Node.js', icon: <IoLogoNodejs size={20} />, color: 'bg-green-500' },
    { name: 'JavaScript', icon: <IoLogoJavascript size={20} />, color: 'bg-yellow-500' },
    { name: 'TypeScript', icon: <SiTypescript size={20} />, color: 'bg-blue-600' },
    { name: 'C#', icon: <SiSharp size={20} />, color: 'bg-purple-600' },
    { name: 'Tailwind', icon: <SiTailwindcss size={20} />, color: 'bg-cyan-400' },
    { name: 'Sass', icon: <SiSass size={20} />, color: 'bg-pink-500' },
    { name: 'MySQL', icon: <SiMysql size={20} />, color: 'bg-orange-500' },
    { name: 'Supabase', icon: <SiSupabase size={20} />, color: 'bg-green-700' },
    { name: 'N8N', icon: <SiN8N size={20} />, color: 'bg-red-600' },
    { name: 'PrismaORM', icon: <SiPrisma size={20} />, color: 'bg-gray-700' },
];

function Sidebar({ isFirstLoad }: SidebarProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [animationStage, setAnimationStage] = useState(0);
    const [visibleTechs, setVisibleTechs] = useState<number[]>([]);

    useEffect(() => {
        if (!isFirstLoad) {
            // Se não é primeira carga, mostra tudo imediatamente
            setAnimationStage(2);
            setVisibleTechs(technologies.map((_, index) => index));
            return;
        }

        // Animações só na primeira carga
        // Sidebar entra da direita
        setTimeout(() => setAnimationStage(1), 100);

        // Foto e redes vem de cima
        setTimeout(() => setAnimationStage(2), 400);

        // Tecnologias vem de baixo uma por uma
        setTimeout(() => {
            technologies.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleTechs(prev => [...prev, index]);
                }, index * 100);
            });
        }, 800);
    }, [isFirstLoad]);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const socialLinks: SocialLink[] = [
        {
            name: 'LinkedIn',
            icon: <IoLogoLinkedin size={24} />,
            url: 'https://linkedin.com/in/joaoteixeira02',
            color: 'hover:text-blue-600'
        },
        {
            name: 'GitHub',
            icon: <IoLogoGithub size={24} />,
            url: 'https://github.com/JoaodeAlcantara',
            color: 'hover:text-gray-400'
        },
        {
            name: 'Email',
            icon: <MdOutlineMail size={24} />,
            url: 'https://mail.google.com/mail/u/1/?ogbl#inbox?compose=CllgCJvmZlLMWTNRDDsJFxXSHtFspTjwztNFWmCqRSCJJgsxJFxPtjvDxVBhQMMkvgmWzRzPVMg',
            color: 'hover:text-red-400'
        }
    ];

    return (
        <aside className={`bg-gray-900 p-4 w-full relative
    lg:w-1/5 lg:fixed lg:left-0 lg:top-0 lg:h-screen overflow-auto hide-scrollbar
    ${isFirstLoad
                ? `transition-all duration-800 ${animationStage >= 1 ? 'animate-slide-in-right' : 'lg:transform lg:translate-x-full lg:opacity-0'}`
                : ''
            }`}>

            <div className={`text-center mb-4 ${isFirstLoad
                ? `transition-all duration-600 ${animationStage >= 2 ? 'animate-slide-in-top' : 'initial-hidden'}`
                : ''
                }`}>
                <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mt-5 p-1 border-3 border-white rounded-full">
                    <div className="flip-container">
                        <div
                            className={`flip-inner ${isFlipped ? 'flipped' : ''}`}
                            onClick={handleFlip}
                        >
                            <div className="flip-front">
                                <img
                                    src={foto_perfil}
                                    alt="foto de perfil"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>

                            <div className="flip-back">
                                <img
                                    src={qrcode}
                                    alt="QR Code"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-2xl text-white font-semibold mt-4'>João Teixeira</h1>
                <p className='text-gray-400 text-sm mt-1'>Desenvolvedor Full Stack</p>
            </div>

            <div className={`flex justify-center gap-6 ${isFirstLoad
                ? `transition-all duration-600 ${animationStage >= 2 ? 'animate-slide-in-top' : 'initial-hidden'}`
                : ''
                }`} style={isFirstLoad ? { animationDelay: '0.2s' } : {}}>
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                                    text-gray-300 transition-all duration-300 transform hover:scale-110
                                    ${social.color}
                                `}
                        title={social.name}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            <hr className='border-gray-700 my-6' />

            <div className="mb-8">
                <h2 className='text-lg text-white font-semibold mb-4 text-center'>Principais Tecnologias</h2>
                <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3'>
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.name}
                            className={`
                                    flex items-center gap-3 p-3 rounded-lg cursor-pointer
                                    ${tech.color} text-white hover:scale-105 min-h-[50px]
                                    ${isFirstLoad
                                    ? `transition-all duration-500 ${visibleTechs.includes(index) ? 'animate-slide-in-bottom' : 'opacity-0 transform translate-y-4'}`
                                    : 'transition-transform duration-300'
                                }
                                `}
                            style={isFirstLoad ? {
                                animationDelay: `${800 + (index * 100)}ms`,
                                transitionDelay: visibleTechs.includes(index) ? `${800 + (index * 100)}ms` : '0ms'
                            } : {}}
                        >
                            <div className="text-white flex-shrink-0">
                                {tech.icon}
                            </div>
                            <span className='text-sm font-medium truncate'>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar