import Container from "./container";
import Animated from "./Animated";
import fotoPerfil from '../assets/foto_perfil.jpg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";



function Inicio() {

    return (
        <>
            <div className="w-full h-screen flex items-center justify-center relative mt-30 sm:mt-0" id="inicio">
                <Animated />
                <Container>
                    <div className="w-full flex flex-col sm:flex-row items-center justify-around border-1 border-white bg-white/20 p-10 rounded-2xl relative z-10 backdrop-blur-sm">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-6xl font-semibold text-fundo mb-0">João Teixeira</h1>
                            <p className="w-full max-w-sm text-xl">
                                <span className="text-blue-900 font-bold">Desenvolvedor Fullstack</span> construindo experiências digitais com performance, escalabilidade e propósito.
                            </p>

                            <div className="flex w-full gap-5 sm:mt-10">
                                <FaGithub size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" />
                                <FaLinkedin size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" />
                                <BsWhatsapp size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" />
                                <MdEmail size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" />
                            </div>
                        </div>
                        <div className="shadow-lg rounded-2xl">
                            <img src={fotoPerfil} alt="foto de perfil" className="w-90 rounded-2xl mt-10 sm:mt-0" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )

}

export default Inicio