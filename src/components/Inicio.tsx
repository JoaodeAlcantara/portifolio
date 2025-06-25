import Container from "./container";
import Animated from "./Animated";
import fotoPerfil from '../assets/foto_perfil.jpg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import React from "react";
import clsx from "clsx";


interface InicioProps {
    inicioRef: React.Ref<HTMLDivElement>;
    isVisible: boolean
}

function Inicio({ inicioRef, isVisible }: InicioProps) {

    return (
        <>
            <div className="w-full h-screen flex items-center justify-center relative mt-30 sm:mt-0" ref={inicioRef} id="inicio">
                <Animated />
                <Container>
                    <div
                        className={clsx("w-full flex-col sm:flex-row items-center justify-around border-1 border-white bg-white/20 p-10 rounded-2xl relative z-10 backdrop-blur-sm transition-all duration-500",
                            {
                                "opacity-0 -translate-x-100": !isVisible,
                                "flex translate-x-0": isVisible
                            }
                        )}>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-6xl font-semibold text-fundo mb-0">João Teixeira</h1>
                            <p className="w-full max-w-sm text-xl">
                                <span className="text-blue-900 font-bold">Desenvolvedor FullStack</span> construindo experiências digitais com performance, escalabilidade e propósito.
                            </p>

                            <div className="flex w-full gap-5 sm:mt-10">
                                <a href="https://github.com/JoaodeAlcantara" target="_blank"><FaGithub size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" /></a>
                                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank"><FaLinkedin size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" /></a>
                                <a href="https://api.whatsapp.com/send?phone=24999611859" target="_blank"><BsWhatsapp size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" /></a>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jgateixeira02@gmail.com" target="_blank"><MdEmail size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" /></a>
                            </div>
                        </div>
                        <div className="shadow-lg rounded-2xl mt-10">
                            <img src={fotoPerfil} alt="foto de perfil" className="w-90 rounded-2xl  sm:mt-0" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )

}

export default Inicio