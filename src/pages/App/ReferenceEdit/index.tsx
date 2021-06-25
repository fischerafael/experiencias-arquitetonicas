export const ReferenceEdit = () => {
    return (
        <main className="relative bg-gray-50 h-screen w-full flex flex-col items-center font-poppins text-xs">
            <header className="h-nav bg-white max-w-sm w-full px-6 flex flex-col items-center">
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>

                <section className="h-1/3 w-full flex justify-between items-center text-gray-400">
                    <nav className="flex gap-1">
                        <BreadCrumbLink isFirst text="Início" />
                        <BreadCrumbLink text="Referências" />
                        <BreadCrumbLink isActive text="Editar" />
                    </nav>

                    <BreadCrumbLink isFirst text="Voltar" />
                </section>
            </header>

            <main className="bg-white px-6 overflow-y-scroll max-w-sm w-full h-main flex flex-col">
                <section className="">
                    <img
                        src="https://images.adsttc.com/media/images/5e57/e3a1/6ee6/7e67/1c00/0032/newsletter/washington-oliveira-wG0fPnkpms0-unsplash.jpg?1582818201"
                        alt=""
                        className="h-80 w-full object-cover"
                    />

                    <img
                        src="https://images.adsttc.com/media/images/5e57/e3a1/6ee6/7e67/1c00/0032/newsletter/washington-oliveira-wG0fPnkpms0-unsplash.jpg?1582818201"
                        alt=""
                        className="h-80 w-full object-cover"
                    />
                </section>
            </main>

            <footer className="absolute bottom-0 bg-red-500 h-nav max-w-sm w-full px-6 flex flex-col items-center p-6">
                <button>Adicionar</button>
            </footer>
        </main>
    )
}

interface BreadCrumbLinkProps {
    text: string
    isFirst?: boolean
    isActive?: boolean
}

const BreadCrumbLink = ({ text, isFirst, isActive }: BreadCrumbLinkProps) => {
    return (
        <div className="flex gap-1 font-medium">
            {!isFirst && <span>&gt;</span>}
            {!isActive && (
                <span className="cursor-pointer hover:text-gray-700">
                    {text}
                </span>
            )}
            {isActive && (
                <span className="cursor-pointer text-gray-700">{text}</span>
            )}
        </div>
    )
}
