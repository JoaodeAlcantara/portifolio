import clsx from "clsx"

interface TagSkillProps {
    name: string,
    index: number,
    isVisible: boolean
}

function TagSkill({ name, index, isVisible }: TagSkillProps) {

    return (
        <>
            <div className={clsx("text-lg border-2 p-1 rounded-full border-white bg-white/20 backdrop-blur-sm text-blue-900 duration-150 cursor-default hover:border-blue-900 hover:font-semibold transition-all", {
                "opacity-0": !isVisible,
                "animate-fade-in-left": isVisible
            })}
            style={{animationDelay: `${index * 50}ms`}}
            >
                {name}
            </div>
        </>
    )
}

export default TagSkill