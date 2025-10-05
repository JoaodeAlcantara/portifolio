import type { ReactElement } from "react";

interface CardContentProps {
    icon: ReactElement;
    iconColor: string;
    title: string;
    text: string;
}

function CardContent({ icon, iconColor, title, text }: CardContentProps) {

    return (
        <>
            <div className="group relative hover:-translate-y-2 transition-all duration-300 group-hover/cards:opacity-70 hover:!opacity-100">
                <div className={`absolute inset-0 w-full h-full bg-gradient-to-r rounded-xl ${iconColor} flex justify-center items-center opacity-70 text-white`}>
                    <span className="opacity-40 group-hover:-translate-y-100 duration-300">{icon}</span>
                </div>
                <div className="relative inset-0 group p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300  border border-gray-100 z-10">
                    <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
                    <p className="text-black leading-relaxed text-justify">{text}</p>
                </div>
            </div>
        </>
    )
}

export default CardContent