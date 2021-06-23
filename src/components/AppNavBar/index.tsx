import { CustomLink } from '../CustomLink'
import { OutlineButton } from '../Button/Outline'
import { ReactNode } from 'react'

interface Props {
    activePage?: 'users' | 'references' | 'evaluations' | 'projects'
}

export const AppNavBar = ({ activePage }: Props) => {
    return (
        <header className="shadow-sm h-20 flex items-center justify-between px-4 bg-white z-10">
            <CustomLink href="/app">
                <img src="/icons/logo-black.svg" alt="" />
            </CustomLink>

            <nav className="hidden laptop:flex h-full items-center justify-center px-2">
                <NavBarLink
                    active={activePage === 'users' ? true : false}
                    href="/app/users"
                >
                    Usuários
                </NavBarLink>
                <NavBarLink
                    active={activePage === 'references' ? true : false}
                    href="/app/references"
                >
                    Referências
                </NavBarLink>
                <NavBarLink
                    active={activePage === 'evaluations' ? true : false}
                    href="/app/evaluations"
                >
                    Avaliações
                </NavBarLink>
                <NavBarLink
                    active={activePage === 'projects' ? true : false}
                    href="/app/projects"
                >
                    Projetos
                </NavBarLink>
            </nav>

            <section className="hidden laptop:flex">
                <CustomLink href="/login">
                    <OutlineButton>Sair do Projeto</OutlineButton>
                </CustomLink>
            </section>

            <section className="flex laptop:hidden">
                <OutlineButton>Menu</OutlineButton>
            </section>
        </header>
    )
}

interface PropsNavBarLink {
    children: ReactNode
    href: string
    active?: boolean
}

const NavBarLink = ({ children, href, active }: PropsNavBarLink) => {
    return (
        <CustomLink href={href}>
            <span
                className={`${
                    active ? 'border-primary' : 'border-white'
                } text-sm border-b-2 hover:text-gray-100 transition duration-500 flex items-center px-4 h-20`}
            >
                {children}
            </span>
        </CustomLink>
    )
}
