import { useState } from "react";
import type { Technology } from "./Sidebar";
import TechCard from "./TechCards";
import { FaGithub } from "react-icons/fa6";
import ImageModal from "./ImagesModal";

interface ProjectsProps {
    imagem: string,
    name: string,
    description: string,
    technologies: Technology[],
    link: string
    reverse: number
}

function Project({ imagem, name, description, technologies, link, reverse = 0 }: ProjectsProps) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
        <div>
            {modalIsOpen && <ImageModal name={name} isOpen={modalIsOpen} onClose={() => { setModalIsOpen(false); return true; }} />}
        </div>

            <div className={`flex flex-wrap mb-10 border-b-1 pb-5 border-gray-400 gap-6 ${reverse ? 'flex-row-reverse' : ''}`}>
                <div className="flex flex-col w-full sm:flex-1 h-full">
                    <div className={`overflow-hidden group relative transition-all duration-200 cursor-pointer rounded-lg mb-4`}>
                        <img src={imagem} alt="foto do projeto webcarros" className='w-full h-auto transition-all duration-300' />
                        {/* <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm text-blue-700 font-medium px-5 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer'
                            onClick={() => setModalIsOpen(true)}
                        >ver mais</button> */}
                    </div>

                    <a href={link} target="_blank" className="hidden sm:flex items-center justify-center font-semibold bg-gray-400 hover:bg-gray-500 text-white p-3 rounded-md transition-colors duration-200 mt-auto cursor-pointer">
                        <FaGithub className="mr-2" size={20} />
                        Ver código
                    </a>
                </div>

                <div className='flex flex-1 flex-col h-full'>
                    <h3 className='font-semibold text-xl'>{name}</h3>
                    <p className='text-gray-500 mb-4'>{description}</p>

                    <div className="flex flex-col mt-auto">
                        <h3 className='mt-2 font-semibold text-lg mb-2'>Tecnologias utilizadas</h3>
                        <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-3'>
                            {
                                technologies.map((tech, i) => (
                                    <TechCard
                                        key={i}
                                        color={tech.color}
                                        icon={tech.icon}
                                        name={tech.name}
                                        size={25}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <a href={link} target="_blank" className="flex sm:hidden items-center justify-center font-semibold bg-gray-400 hover:bg-gray-500 text-white p-3 rounded-md transition-colors duration-200 mt-5 cursor-pointer">
                        <FaGithub className="mr-2" size={20} />
                        Ver código
                    </a>
                </div>
            </div>
        </>
    )
}

export default Project