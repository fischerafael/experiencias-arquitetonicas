import { DefaultButton } from '../../components/Button/Default'
import { InputText } from '../../components/InputText'
import { BlackLogo } from '../../components/BlackLogo'

export const LoginPage = () => {
    return (
        <main className="bg-gray-50 h-screen flex flex-col justify-start items-center">
            <div className="h-20">
                <BlackLogo href="/" />
            </div>
            <form className="max-w-xs gap-2 w-full h-full flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl">Acessar Projeto</h1>
                <InputText
                    label="Email de Acesso"
                    placeholder="ex: fischer@gmail.com"
                    type="email"
                />
                <DefaultButton>Acessar Projeto</DefaultButton>
            </form>
        </main>
    )
}
