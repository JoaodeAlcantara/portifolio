

function TagSkill({ name }: { name: string }) {

    return (
        <>
            <div className="text-lg border-2 p-1 rounded-full border-white bg-white/20 backdrop-blur-sm text-blue-900 duration-150 cursor-default hover:border-blue-900 hover:font-semibold">
                {name}
            </div>
        </>
    )
}

export default TagSkill