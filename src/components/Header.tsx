import Container from "./container";
import { TiThMenu } from "react-icons/ti";
import { useState, useEffect, useRef } from "react";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="bg-white py-2 py-auto shadow fixed top-0 right-0 w-full z-20">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="text-2xl">
                        <span className="font-bold text-blue-900">Dev</span>
                        <span className="text-fundo font-semibold">FullStack</span>
                    </div>

                    <nav className="hidden sm:flex gap-10 text-lg">
                        <a href="#inicio" className="link-hover">Inicio</a>
                        <a href="#hab" className="link-hover">Habilidades</a>
                        <a href="#projetos" className="link-hover">Projetos</a>
                        <a href="#sobre" className="link-hover">Sobre</a>
                    </nav>

                    <button className="flex sm:hidden"
                        onClick={() => setIsOpen(true)}
                    >
                        <TiThMenu size={25} />
                    </button>

                    {
                        isOpen && (
                            <nav className="flex sm:hidden absolute z-30 gap-3 flex-col right-0 top-4 bg-white p-2 rounded text-lg"
                                ref={menuRef}
                            >
                                <a href="#inicio" className="link-hover">Inicio</a>
                                <a href="#hab" className="link-hover">Habilidades</a>
                                <a href="#projetos" className="link-hover">Projetos</a>
                                <a href="#sobre" className="link-hover">Sobre</a>
                            </nav>
                        )
                    }
                </div>
            </Container>
        </header>
    )
}

export default Header