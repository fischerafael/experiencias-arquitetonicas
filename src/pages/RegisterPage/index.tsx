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
import { fetch } from '../../services/api'

export const RegisterPage = () => {
    const [registerInfo, setRegisterInfo] = useState({
        email: '',
        password: '',
        project_name: '',
        architect_name: ''
    })
    const [disabled, setDisabled] = useState(false)

    const handleUserInfoChange = (e: any, key: string) => {
        setRegisterInfo({
            ...registerInfo,
            [key]: e.target.value
        })
    }

    useEffect(() => {
        if (
            registerInfo.email === '' ||
            registerInfo.password === '' ||
            registerInfo.project_name === '' ||
            registerInfo.architect_name === ''
        ) {
            setDisabled(true)
            return
        }

        setDisabled(false)
    }, [registerInfo])

    console.log('registerInfo', registerInfo)

    const handleCreateProject = async (e: any) => {
        e.preventDefault()
        try {
            const { response } = await fetch.createProject({
                ...registerInfo,
                username: registerInfo.email
            })
            console.log('handleCreateProject', response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PageAppWrapper>
            <PageHeaderWrapper>
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>
            </PageHeaderWrapper>

            <PageMainWrapper>
                <section className="py-4 flex flex-row justify-center">
                    <h2 className="font-bold text-lg">Criar Novo Projeto</h2>
                </section>

                <form
                    id="register-form"
                    className="flex flex-col gap-4 justify-center h-full"
                >
                    <CustomInput
                        label="Email"
                        placeholder="ex: rafael@gmail.com"
                        type="email"
                        value={registerInfo.email}
                        onChange={(e) => handleUserInfoChange(e, 'email')}
                    />

                    <CustomInput
                        label="Senha"
                        placeholder="ex: ********"
                        type="password"
                        value={registerInfo.password}
                        onChange={(e) => handleUserInfoChange(e, 'password')}
                    />

                    <CustomInput
                        label="Nome do Arquiteto"
                        placeholder="ex: Rafael Fischer"
                        type="text"
                        value={registerInfo.architect_name}
                        onChange={(e) =>
                            handleUserInfoChange(e, 'architect_name')
                        }
                    />

                    <CustomInput
                        label="Nome do Projeto"
                        placeholder="ex: Casa 01"
                        type="text"
                        value={registerInfo.project_name}
                        onChange={(e) =>
                            handleUserInfoChange(e, 'project_name')
                        }
                    />
                </form>
            </PageMainWrapper>

            <PageFooterWrapper>
                <DefaultButton
                    disabled={disabled}
                    form="login-form"
                    onClick={handleCreateProject}
                >
                    Criar Projeto
                </DefaultButton>

                <CustomLink href="/login">
                    <p className="font-medium py-2 w-full flex flex-row justify-center hover:text-blue-500 cursor-pointer">
                        Acessar projeto existente
                    </p>
                </CustomLink>
            </PageFooterWrapper>
        </PageAppWrapper>
    )
}
