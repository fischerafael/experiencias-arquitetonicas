import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { CustomLink } from '../../../components/CustomLink'
import { GhostButton } from '../../../components/Button/style'
import { useAuth } from '../../../hooks/useAuth'

export const AppPage = () => {
    const { credentials, logout } = useAuth()

    return (
        <PageAppWrapper>
            <PageHeaderWrapper>
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>

                <section className="h-1/3 w-full flex flex-row justify-start items-center text-gray-400 ">
                    <p>
                        Olá,{' '}
                        <span className="font-bold text-gray-600">
                            {credentials.user_name}!
                        </span>
                    </p>
                </section>
            </PageHeaderWrapper>

            <PageMainWrapper>
                <section className="w-full h-1/3 flex flex-col">
                    <p className="text-gray-600 leading-loose">
                        Para projetar experiências, o Ux Arch precisa de
                        informações do usuário, referências de projeto e da
                        opinião do usuário sobre elas. Desta forma, entendemos
                        como o usuário pensa e conseguimos prever qual será a
                        experiência arquitetônica do projeto.
                    </p>
                </section>
                <nav className="w-full h-2/3 flex flex-col gap-2">
                    <NavListItem index="01" text="Usuário" href="/app/user" />
                    <NavListItem
                        index="02"
                        text="Referências"
                        href="/app/references"
                    />
                    <NavListItem
                        index="03"
                        text="Avaliações"
                        href="/app/evaluations"
                    />
                    <NavListItem
                        index="04"
                        text="Propostas"
                        href="/app/projects"
                    />
                </nav>
            </PageMainWrapper>
            <PageFooterWrapper>
                <GhostButton onClick={logout}>Sair</GhostButton>
            </PageFooterWrapper>
        </PageAppWrapper>
    )
}

const NavListItem = ({ index, text, href }) => {
    return (
        <CustomLink href={href}>
            <section className="hover:bg-gray-100 hover:border-gray-200 cursor-pointer bg-gray-50 grid gap-4 grid-cols-4 p-4 border border-gray-100 rounded">
                <section className="col-span-1 flex flex-row items-center justify-center ">
                    <span className="font-bold text-base">{index}</span>
                </section>
                <section className="col-span-3 flex flex-row justify-between items-center">
                    <p className="font-medium">{text}</p>
                    <ChevronRightIcon className="h-4 w-4" />
                </section>
            </section>
        </CustomLink>
    )
}
