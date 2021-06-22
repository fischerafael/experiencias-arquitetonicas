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

            <div className="h-full flex items-center justify-center px-2">
                <NavBarLink
                    active={activePage === 'users' ? true : false}
                    href="#"
                >
                    Usuários
                </NavBarLink>
                <NavBarLink
                    active={activePage === 'references' ? true : false}
                    href="#"
                >
                    Referências
                </NavBarLink>
                <NavBarLink
                    active={activePage === 'evaluations' ? true : false}
                    href="#"
                >
                    Avaliações
                </NavBarLink>
                <NavBarLink
                    active={activePage === 'projects' ? true : false}
                    href="#"
                >
                    Projetos
                </NavBarLink>
            </div>

            <CustomLink href="/login">
                <OutlineButton>Sair do Projeto</OutlineButton>
            </CustomLink>
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
                } text-sm border-b-2 hover:text-gray-100 transition duration-500 h-full flex items-center px-4`}
            >
                {children}
            </span>
        </CustomLink>
    )
}
