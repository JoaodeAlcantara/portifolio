

interface itemProps {
    img: string,
    name: string,
    links: string[],
    description: string,
    tech: string[]
}

function ProjectCard({ item }: { item: itemProps }) {

    return (
        <section className="border-2 border-white rounded-lg backdrop-blur-2xl bg-white/20">
            <img src={item.img} alt={item.name} className="object-cover"/>

            <div className="px-2 py-2">
                <h1 className="text-fundo font-semibold text-2xl mt-2">{item.name}</h1>
                
                <div className="mb-10">
                    <p>{item.description}</p>

                </div>

                <div className="flex gap-2 mt-auto">
                    <button className="px-2 py-1 duration-150 border-2 rounded-full font-semibold bg-fundo text-white hover:border-fundo hover:bg-transparent hover:text-fundo cursor-pointer">Ver Mais</button>
                    <button className="px-2 py-1 duration-150 border-2 rounded-full font-semibold bg-fundo text-white hover:border-fundo hover:bg-transparent hover:text-fundo cursor-pointer">Ver Código</button>
                </div>
            </div>
        </section>

    )
}

export default ProjectCard