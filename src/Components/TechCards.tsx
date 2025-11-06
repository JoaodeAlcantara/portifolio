import type {ReactNode } from "react";


interface TechCardProps {
    color: string;
    icon: ReactNode;
    name: string;
    size: number;
}

function TechCard({color, icon, name, size}: TechCardProps) {

    return (
            <div
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${color} text-white hover:scale-105 min-h-[${size}px]`}
            >
                <div className="text-white flex-shrink-0">
                    {icon}
                </div>
                <span className='text-sm font-medium truncate'>{name}</span>
            </div>
    )
}

export default TechCard