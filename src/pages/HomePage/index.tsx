import { useEffect } from 'react'
import {
    PageHomeWrapper,
    PageHomeContent
} from '../../../styles/components/Layout'
import { DefaultButton } from '../../components/Button/style'
import { CustomLink } from '../../components/CustomLink'
import { fetch } from '../../services/api'

export const HomePage = () => {
    useEffect(() => {
        ;(async function () {
            const status = await fetch.wakeUp()
            console.log('FETCH WAKE UP API', status)
        })()
    }, [])

    return (
        <PageHomeWrapper>
            <PageHomeContent>
                <section className="h-nav flex w-full items-center justify-center">
                    <img src="/icons/logo-white.svg" alt="" className="h-5" />
                </section>

                <section className="h-main flex flex-col w-full items-center justify-center gap-4">
                    <h1 className="text-5xl font-bold text-white text-center leading-normal">
                        Projete Experiências Arquitetônicas{' '}
                    </h1>

                    <h2 className="text-xs text-gray-200 text-center leading-relaxed">
                        O UxArch prevê como os usuários irão se sentir em
                        relação ao espaço já nos estágios mais iniciais. Assim
                        você aumenta suas chances de acertar na mosca com o
                        projeto.
                    </h2>
                </section>

                <section className="max-w-sm h-nav flex flex-col items-center justify-center p-6">
                    <CustomLink href="/register">
                        <DefaultButton disabled={false}>
                            Criar Projeto
                        </DefaultButton>
                    </CustomLink>

                    <CustomLink href="/login">
                        <p className="font-medium text-white py-2 w-full flex flex-row justify-center hover:text-blue-500 cursor-pointer">
                            Acessar Projeto
                        </p>
                    </CustomLink>
                </section>
            </PageHomeContent>
        </PageHomeWrapper>
    )
}
