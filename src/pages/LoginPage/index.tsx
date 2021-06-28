import { useEffect, useState } from 'react'
import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../styles/components/Layout'
import { DefaultButton } from '../../components/Button/style'
import { CustomInput } from '../../components/Input'
import { CustomLink } from '../../components/CustomLink'

export const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({ identifier: '', password: '' })
    const [disabled, setDisabled] = useState(false)

    const handleUserInfoChange = (e: any, key: string) => {
        setLoginInfo({
            ...loginInfo,
            [key]: e.target.value
        })
    }

    useEffect(() => {
        if (loginInfo.identifier === '' || loginInfo.password === '') {
            setDisabled(true)
            return
        }

        setDisabled(false)
    }, [loginInfo])

    return (
        <PageAppWrapper>
            <PageHeaderWrapper>
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>
            </PageHeaderWrapper>

            <PageMainWrapper>
                <section className="py-4 flex flex-row justify-center">
                    <h2 className="font-bold text-lg">Acessar Projeto</h2>
                </section>

                <form
                    id="login-form"
                    className="flex flex-col gap-4 justify-center h-full"
                    onSubmit={() => alert('oi')}
                >
                    <CustomInput
                        label="Email"
                        placeholder="ex: rafael@gmail.com"
                        type="email"
                        value={loginInfo.identifier}
                        onChange={(e) => handleUserInfoChange(e, 'identifier')}
                    />

                    <CustomInput
                        label="Senha"
                        placeholder="ex: ********"
                        type="password"
                        value={loginInfo.password}
                        onChange={(e) => handleUserInfoChange(e, 'password')}
                    />
                </form>
            </PageMainWrapper>

            <PageFooterWrapper>
                <DefaultButton disabled={disabled} form="login-form">
                    Acessar Projeto
                </DefaultButton>

                <CustomLink href="/register">
                    <p className="font-medium py-2 w-full flex flex-row justify-center hover:text-blue-500 cursor-pointer">
                        Criar novo projeto
                    </p>
                </CustomLink>
            </PageFooterWrapper>
        </PageAppWrapper>
    )
}
