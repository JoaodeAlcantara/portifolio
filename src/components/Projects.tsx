import Container from "./container";
import ProjectCard from "./ProjectCard";
import webCarros from '../assets/image.png'


function Projects() {

    const projects = [
        {
            img: webCarros,
            name: 'WebCarros',
            links: [],
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium impedit amet est eos quasi aliquam provident neque, corrupti ipsam nobis aut laudantium temporibus hic eum voluptatibus nulla optio similique unde.',
            tech: ['ReactJs', 'TypeScript', 'TailwindCSS', 'NodeJs', 'JavaScript', 'PrismaORM', 'MySQL']
        },
        {
            img: webCarros,
            name: 'WebCarros',
            links: [],
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium impedit amet est eos quasi aliquam provident neque, corrupti ipsam nobis aut laudantium temporibus hic eum voluptatibus nulla optio similique unde.',
            tech: ['ReactJs', 'TypeScript', 'TailwindCSS', 'NodeJs', 'JavaScript', 'PrismaORM', 'MySQL']
        },
        {
            img: webCarros,
            name: 'WebCarros',
            links: [],
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium impedit amet est eos quasi aliquam provident neque, corrupti ipsam nobis aut laudantium temporibus hic eum voluptatibus nulla optio similique unde.',
            tech: ['ReactJs', 'TypeScript', 'TailwindCSS', 'NodeJs', 'JavaScript', 'PrismaORM', 'MySQL']
        },
    ]

    return (
        <>
            <div className="w-full mt-10" id="Projetos">
                <Container>
                    <h1 className="text-5xl font-semibold text-fundo mb-10">Projetos</h1>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {
                            projects.map(p => (
                                <ProjectCard item={p} />
                            ))
                        }

                    </div>

                </Container>
            </div>
        </>
    )
}

export default Projects