import Container from "./container";
import ProjectCard from "./ProjectCard";
import webCarros from '../assets/image.png';
import clsx from "clsx";

interface ProjectProps {
    projectsRef: React.Ref<HTMLDivElement>;
    isVisible: boolean;
}

function Projects({projectsRef, isVisible}: ProjectProps) {

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
            <div className="w-full mt-10 relative z-10" ref={projectsRef} id="projetos">
                <Container>
                    <h1 className={clsx("text-5xl font-semibold text-fundo mb-10 z-10 transition-all duration-500", {
                        "opacity-0 -translate-x-100": !isVisible,
                        "translate-x-0": isVisible
                    })}>Projetos</h1>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {
                            projects.map((p, index) => (
                                <ProjectCard key={index} index={index} item={p} isVisible={isVisible} />
                            ))
                        }

                    </div>

                </Container>
            </div>
        </>
    )
}

export default Projects