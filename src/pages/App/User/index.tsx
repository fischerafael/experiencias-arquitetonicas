import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { CustomLink } from '../../../components/CustomLink'
import { DefaultButton } from '../../../components/Button/style'
import { CustomInput } from '../../../components/Input'
import { CustomTextArea } from '../../../components/TextArea'
import { useState } from 'react'
import { SelectInput } from '../../../components/SelectInput'
import { fetch } from '../../../services/api'
import { useAuth } from '../../../hooks/useAuth'

const breadCrumbLinks = [
    {
        text: 'Início',
        href: '/app',
        isActive: false,
        isFirst: true
    },
    {
        text: 'Usuário',
        href: '/app/user',
        isActive: true,
        isFirst: false
    }
]

export const User = () => {
    const { credentials } = useAuth()

    const [userInfo, setUserInfo] = useState({
        name: '',
        profession: '',
        birth_year: 1990,
        gender: 'f',
        description: ''
    })

    const handleUserInfoChange = (e: any, key: string) => {
        setUserInfo({
            ...userInfo,
            [key]: e.target.value
        })
    }

    const userInfoData = {
        ...userInfo,
        birth_year: +userInfo.birth_year,
        architect: credentials.user_id
    }

    console.log('userInfoData', userInfoData)

    const handleSaveUser = async (e: any) => {
        e.preventDefault()
        alert('Usuário salvo')
        try {
            const { response } = await fetch.createUser(
                userInfoData,
                credentials.jwt
            )
            console.log('HANDLE SAVE USER', response)

            alert('Usuário salvo com sucesso!')
        } catch (error) {
            console.log('HANDLE SAVE USER ERROR', error)
        }
    }

    return (
        <PageAppWrapper>
            <PageHeaderWrapper>
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>

                <BreadCrumb links={breadCrumbLinks} />
            </PageHeaderWrapper>

            <PageMainWrapper>
                <section className="py-4">
                    <h2 className="font-bold text-lg">
                        Informações do Usuário
                    </h2>
                </section>

                <CustomInput
                    label="Nome"
                    placeholder="ex: Rafael Fischer"
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => handleUserInfoChange(e, 'name')}
                />

                <CustomInput
                    label="Profissão"
                    placeholder="ex: arquiteto"
                    type="text"
                    value={userInfo.profession}
                    onChange={(e) => handleUserInfoChange(e, 'profession')}
                />
                <section className="grid grid-cols-2 gap-8">
                    <CustomInput
                        label="Ano de Nascimento"
                        placeholder="ex: 31"
                        type="number"
                        value={userInfo.birth_year}
                        onChange={(e) => handleUserInfoChange(e, 'birth_year')}
                    />

                    <SelectInput
                        label="Sexo"
                        options={[
                            { text: 'Masculino', value: 'm' },
                            { text: 'Feminino', value: 'f' },
                            { text: 'Outro', value: 'o' }
                        ]}
                        value={userInfo.gender}
                        onChange={(e) => handleUserInfoChange(e, 'gender')}
                    />
                </section>
                <CustomTextArea
                    label="Descrição do Usuário"
                    placeholder="ex: Rafael Fischer"
                    value={userInfo.description}
                    onChange={(e) => handleUserInfoChange(e, 'description')}
                />
            </PageMainWrapper>

            <PageFooterWrapper>
                <CustomLink href="/app/references/edit">
                    <DefaultButton disabled={false} onClick={handleSaveUser}>
                        Salvar Usuário
                    </DefaultButton>
                </CustomLink>
            </PageFooterWrapper>
        </PageAppWrapper>
    )
}
