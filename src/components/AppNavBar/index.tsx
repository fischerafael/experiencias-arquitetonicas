import { CustomLink } from '../CustomLink'
import { OutlineButton } from '../Button/Outline'
import { ReactNode } from 'react'

export const AppNavBar = () => {
    return (
        <header className="shadow-sm h-20 flex items-center justify-between px-4 bg-white">
            <CustomLink href="/">
                <img src="/icons/logo-black.svg" alt="" />
            </CustomLink>

            <div className="h-full flex items-center justify-center px-2">
                <NavBarLink active href="#">
                    Usuários
                </NavBarLink>
                <NavBarLink href="#">Referências</NavBarLink>
                <NavBarLink href="#">Avaliações</NavBarLink>
                <NavBarLink href="#">Projetos</NavBarLink>
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
