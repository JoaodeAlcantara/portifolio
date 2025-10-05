
interface ProjetcsListProps {
    toggleView: () => void;
}

function ProjetcsList({ toggleView }: ProjetcsListProps) {

    return (
        <>
            <section className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl py-8 px-10 shadow-2xl w-full max-w-6xl">
                <button
                    onClick={toggleView}
                    className="flag-button-left absolute -top-15 left-10 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-600 hover:to-blue-800"
                >
                    <span>Voltar</span>
                </button>

                <div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-bold text-3xl text-center mb-4">Meus Projetos</h1>

                    <hr className="text-gray-300" />

                    <div>
                        
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProjetcsList