import Container from "./container";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

function Sobre() {

    return (
        <>
            <div className="w-full mt-10" id="sobre">
                <Container>
                    <h1 className="text-5xl font-semibold text-fundo mb-10">
                        Sobre mim
                    </h1>

                    <div className="w-full max-w-4xl mb-10">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, voluptate alias. Expedita commodi earum tempora voluptatum! Dolores ratione maiores, voluptate, omnis veniam enim quidem error illo esse, amet alias harum!</p>

                        <h2 className="font-semibold text-fundo text-2xl my-5">Contatos</h2>

                        <div className="flex w-full gap-5">
                            <FaLinkedin size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" />
                            <BsWhatsapp size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" />
                            <MdEmail size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" />
                            <AiFillInstagram size={30} className="cursor-pointer hover:scale-105 duration-150 hover:text-blue-900" />
                        </div>


                    </div>
                </Container>
            </div>
        </>
    )
}

export default Sobre