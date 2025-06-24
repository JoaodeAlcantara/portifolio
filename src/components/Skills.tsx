import Container from "./container";
import TagSkill from "./TagSkill";

function Skills() {

    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'ReactJs', 'TailwindCSS', 'NodeJs', 'Express', 'MySQL', 'SQLite', 'PrismaORM', 'MySQL2', 'Git', 'GitHub'];

    return (
        <>
            <div className="w-full mt-10" id="hab">
                <Container>
                    <div className="">
                        <h1 className="text-5xl font-semibold text-fundo">Minhas Habilidades</h1>

                        <div className="mt-10 flex gap-5 items-center justify-center overflow-scroll hide-scrollbar flex-wrap w-full max-w-6xl">
                            {
                                skills.map(i => (
                                    <TagSkill name={i} />
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