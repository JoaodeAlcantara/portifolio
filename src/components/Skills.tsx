import Container from "./container";
import TagSkill from "./TagSkill";
import clsx from "clsx";

interface SkillsProps {
    skillsRef: React.Ref<HTMLDivElement>;
    isVisible: boolean
}

function Skills({skillsRef, isVisible}: SkillsProps) {

    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'ReactJs', 'TailwindCSS', 'NodeJs', 'Express', 'MySQL', 'SQLite', 'PrismaORM', 'MySQL2', 'Git', 'GitHub'];

    return (
        <>
            <div className="w-full mt-10" ref={skillsRef} id="hab">
                <Container>
                    <div>
                        <h1 className={clsx("text-5xl font-semibold text-fundo transition-all duration-300", {
                            "-translate-x-100 opacity-0": !isVisible,
                            "translate-x-0": isVisible
                        })}>Minhas Habilidades</h1>

                        <div className="mt-10 flex gap-5 items-center justify-center overflow-scroll hide-scrollbar flex-wrap w-full max-w-6xl">
                            {
                                skills.map((i, index) => (
                                    <TagSkill key={index} name={i} index={index} isVisible={isVisible} />
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Skills