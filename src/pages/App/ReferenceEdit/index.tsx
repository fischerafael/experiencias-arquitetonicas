import tw from 'tailwind-styled-components'

export const ReferenceEdit = () => {
    return (
        <section className="relative bg-gray-50 text-gray-700 h-screen w-full flex flex-col items-center font-poppins text-xs">
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

            <main className="bg-white px-6 overflow-y-scroll max-w-sm w-full h-main flex flex-col gap-4">
                <section className="relative">
                    <img
                        src="https://images.adsttc.com/media/images/5e57/e3a1/6ee6/7e67/1c00/0032/newsletter/washington-oliveira-wG0fPnkpms0-unsplash.jpg?1582818201"
                        alt=""
                        className="h-80 w-full object-cover rounded"
                    />
                </section>

                <Form>
                    <FieldSet>
                        <Legend>Dados Gerais</Legend>

                        <CustomInput
                            type="text"
                            label="URL da Imagem"
                            placeholder="ex: www.google.com/mac.png"
                        />
                        <CustomInput
                            type="text"
                            label="Referência"
                            placeholder="ex: Museu de Arte Contemporânea"
                        />
                        <CustomInput
                            type="text"
                            label="Localização"
                            placeholder="ex: Niterói, Brasil"
                        />
                    </FieldSet>

                    <FieldSet>
                        <Legend className="font-bold pb-4 text-base">
                            Características
                        </Legend>

                        <section className="flex flex-col gap-2">
                            <span className="text-xm font-medium">Altura</span>
                            <ul className="grid grid-cols-4 gap-4">
                                <Option text="P" description="até 3m" />
                                <Option text="M" description="de 3m a 6m" />
                                <Option text="G" description="de 6m a 24m" />
                                <Option text="GG" description="mais de 24m" />
                            </ul>
                        </section>

                        <section className="flex flex-col gap-2">
                            <span className="text-xm font-medium">Altura</span>
                            <ul className="grid grid-cols-4 gap-4">
                                <Option text="PP" description="sem altura" />
                                <Option text="P" description="até 3m" />
                                <Option text="M" description="de 3m a 6m" />
                                <Option text="G" description="de 6m a 24m" />
                            </ul>
                        </section>
                    </FieldSet>
                    <hr />
                </Form>
            </main>

            <footer className="absolute bottom-0 bg-red-500 h-nav max-w-sm w-full px-6 flex flex-col items-center p-6">
                <button>Adicionar</button>
            </footer>
        </section>
    )
}

interface CustomInputProps {
    label: string
    type: 'text' | 'email' | 'password' | 'number'
    placeholder?: string
}

const CustomInput = ({ label, type, placeholder }: CustomInputProps) => {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-xm font-medium">{label}</span>
            <input
                type={type}
                placeholder={placeholder}
                className="h-10 px-4 border border-gray-200 rounded bg-gray-50"
            />
        </label>
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

interface OptionProps {
    text: string
    description: string
}

const Option = ({ text, description }: OptionProps) => {
    return (
        <li className="group hover:border-blue-500 hover:shadow-lg bg-gray-50 border p-2 cursor-pointer border-gray-200 rounded flex flex-col items-center">
            <p className="text-2xl text-center font-medium text-gray-400 group-hover:text-blue-500">
                {text}
            </p>
            <p className="text-tiny text-center group-hover:text-blue-500">
                {description}
            </p>
        </li>
    )
}

const Form = tw.form`flex flex-col gap-4`

const FieldSet = tw.fieldset`flex flex-col gap-4`

const Legend = tw.legend`font-bold pb-4 text-base`
