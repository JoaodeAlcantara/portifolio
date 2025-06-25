import Container from "./container";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import clsx from "clsx";

interface SobreProps {
    sobreRef: React.Ref<HTMLDivElement>;
    isVisible: boolean
}

function Sobre({ sobreRef, isVisible }: SobreProps) {

    return (
        <>
            <div className="w-full mt-10" ref={sobreRef} id="sobre">
                <Container>
                    <h1 className={clsx("text-5xl font-semibold text-fundo mb-10 transition-all duration-500", {
                        "opacity-0 -translate-x-100": !isVisible,
                        "transtale-x-0": isVisible
                    })}>
                        Sobre mim
                    </h1>

                    <div className={clsx("w-full max-w-4xl mb-10 transition-all duration-500", {
                        "opacity-0 -translate-x-100": !isVisible,
                        "transtale-x-0": isVisible
                    })}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, voluptate alias. Expedita commodi earum tempora voluptatum! Dolores ratione maiores, voluptate, omnis veniam enim quidem error illo esse, amet alias harum!</p>

                        <h2 className="font-semibold text-fundo text-2xl my-5">Contatos</h2>

                        <div className="flex w-full gap-5">
                            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank"><FaLinkedin size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" /></a>
                            <a href="https://api.whatsapp.com/send?phone=24999611859" target="_blank"><BsWhatsapp size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" /></a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jgateixeira02@gmail.com" target="_blank"><MdEmail size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" /></a>
                            <a href="https://www.instagram.com/joaogabriel3871/" target="_blank"><AiFillInstagram size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" /></a>
                        </div>


                    </div>
                </Container>
            </div>
        </>
    )
}

export default Sobre