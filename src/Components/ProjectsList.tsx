import webcarros from '../assets/webcarros.png';
import ekhytera from '../assets/ekhytera.png';
import todolist from '../assets/todolist.png';
import chat from '../assets/chat.png';


import {
    IoLogoJavascript,
    IoLogoNodejs,
} from "react-icons/io";
import {
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiMysql,
    SiExpress,
    SiPrisma,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import Project from './Project';

interface ProjetcsListProps {
    toggleView: () => void;
}

const projects = [
    {
        imagem: ekhytera,
        name: 'EKHYTERA',
        description: 'Website que permite os usuarios montarem computadores com base em suas reais necessidades de uso, comunicação entre usuarios e conteudos e noticias sobre a area da tecnologia.',
        link: 'https://github.com/Ekhytera',
        technologies: [
            { name: 'React', icon: <SiReact size={20} />, color: 'bg-cyan-500' },
            { name: 'TypeScript', icon: <SiTypescript size={20} />, color: 'bg-blue-600' },
            { name: 'Tailwind', icon: <SiTailwindcss size={20} />, color: 'bg-cyan-400' },
            { name: 'Node.js', icon: <IoLogoNodejs size={20} />, color: 'bg-green-500' },
            { name: 'JavaScript', icon: <IoLogoJavascript size={20} />, color: 'bg-yellow-500' },
            { name: 'Express', icon: <SiExpress size={20} />, color: 'bg-zinc-800' },
            { name: 'PrismaORM', icon: <SiPrisma size={20} />, color: 'bg-gray-900' },
            { name: 'Postgre', icon: <BiLogoPostgresql  size={20} />, color: 'bg-blue-800' },
        ]
    },
    {
        imagem: webcarros,
        name: 'WEBCARROS',
        description: 'Plataforma de anuncios para vendas de carros com organização por lista pessoal de desejos.',
        link: 'https://github.com/JoaodeAlcantara/WEBCARROS',
        technologies: [
            { name: 'React', icon: <SiReact size={20} />, color: 'bg-cyan-500' },
            { name: 'TypeScript', icon: <SiTypescript size={20} />, color: 'bg-blue-600' },
            { name: 'Tailwind', icon: <SiTailwindcss size={20} />, color: 'bg-cyan-400' },
            { name: 'Node.js', icon: <IoLogoNodejs size={20} />, color: 'bg-green-500' },
            { name: 'JavaScript', icon: <IoLogoJavascript size={20} />, color: 'bg-yellow-500' },
            { name: 'Express', icon: <SiExpress size={20} />, color: 'bg-zinc-800' },
            { name: 'PrismaORM', icon: <SiPrisma size={20} />, color: 'bg-gray-900' },
            { name: 'MySQL', icon: <SiMysql size={20} />, color: 'bg-orange-500' },
        ]
    },
    {
        imagem: chat,
        name: 'DevChat',
        description: 'Chat em grupo que permite usuarios conversarem em tempo real utilizando o websocket',
        link: 'https://github.com/JoaodeAlcantara/chat-c-websocket',
        technologies: [
            { name: 'React', icon: <SiReact size={20} />, color: 'bg-cyan-500' },
            { name: 'TypeScript', icon: <SiTypescript size={20} />, color: 'bg-blue-600' },
            { name: 'Tailwind', icon: <SiTailwindcss size={20} />, color: 'bg-cyan-400' },
            { name: 'Node.js', icon: <IoLogoNodejs size={20} />, color: 'bg-green-500' },
            { name: 'JavaScript', icon: <IoLogoJavascript size={20} />, color: 'bg-yellow-500' },
            { name: 'Express', icon: <SiExpress size={20} />, color: 'bg-zinc-800' },
            { name: 'PrismaORM', icon: <SiPrisma size={20} />, color: 'bg-gray-900' },
            { name: 'MySQL', icon: <SiMysql size={20} />, color: 'bg-orange-500' },
        ]
    },
    {
        imagem: todolist,
        name: 'Lista de tarefas',
        description: 'Gerenciador de tarefas com definição de tempo limite e atualização automática de status.',
        link: '',
        technologies: [
            { name: 'React', icon: <SiReact size={20} />, color: 'bg-cyan-500' },
            { name: 'TypeScript', icon: <SiTypescript size={20} />, color: 'bg-blue-600' },
            { name: 'Tailwind', icon: <SiTailwindcss size={20} />, color: 'bg-cyan-400' },
            { name: 'Node.js', icon: <IoLogoNodejs size={20} />, color: 'bg-green-500' },
            { name: 'JavaScript', icon: <IoLogoJavascript size={20} />, color: 'bg-yellow-500' },
            { name: 'Express', icon: <SiExpress size={20} />, color: 'bg-zinc-800' },
            { name: 'PrismaORM', icon: <SiPrisma size={20} />, color: 'bg-gray-900' },
            { name: 'MySQL', icon: <SiMysql size={20} />, color: 'bg-orange-500' },
        ]
    },
]

function ProjetcsList({ toggleView }: ProjetcsListProps) {

    return (
        <>
            <section className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl py-6 px-4 lg:py-8 lg:px-10 shadow-2xl w-full max-w-7xl mx-auto mt-10 md:mt-0">
                <button
                    onClick={toggleView}
                    className="flag-button-left absolute -top-15 left-4 lg:left-10 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-600 hover:to-blue-800"
                >
                    <span>Voltar</span>
                </button>

                <div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-bold text-3xl text-center mt-2 lg:mt-0 mb-4">Meus Projetos</h1>

                    <hr className="text-gray-300" />

                    <div className="mt-4 space-y-4">
                        {
                            projects.map((p, i) => (
                                <Project 
                                    key={i} 
                                    imagem={p.imagem}
                                    name={p.name}
                                    description={p.description}
                                    technologies={p.technologies}
                                    link={p.link}
                                    reverse={i % 2}
                                />
                            ))
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProjetcsList