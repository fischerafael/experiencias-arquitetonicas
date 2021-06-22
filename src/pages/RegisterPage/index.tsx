import { DefaultButton } from '../../components/Button/Default'
import { InputText } from '../../components/InputText'
import { BlackLogo } from '../../components/BlackLogo'

export const RegisterPage = () => {
    return (
        <main className="bg-gray-100 h-screen flex flex-col justify-start items-center">
            <div className="h-20">
                <BlackLogo href="/" />
            </div>

            <form className="max-w-xs gap-2 w-full h-full flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl">Novo Projeto</h1>
                <InputText
                    label="Email de Acesso"
                    placeholder="ex: fischer@gmail.com"
                    type="email"
                />
                <InputText
                    label="Nome do Projeto"
                    placeholder="ex: casa de praia"
                />
                <DefaultButton>Criar Projeto</DefaultButton>
            </form>
        </main>
    )
}
