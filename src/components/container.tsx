import type { ReactNode } from "react"

function Container({children}: {children: ReactNode}) {

    return (
        <>
            <section className="w-full max-w-7xl mx-auto px-4">
                {children}
            </section>
        </>
    )
}

export default Container