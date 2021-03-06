import { CustomLink } from '../../../../components/CustomLink'

interface Props {
    transparent?: boolean
}

export const HomeNavBar = ({ transparent }: Props) => {
    return (
        <header
            className={`h-20 flex items-center justify-between px-4 ${
                transparent ? 'bg-transparent' : 'bg-white'
            }`}
        >
            <CustomLink href="/">
                <img src="/icons/logo-white.svg" alt="" />
            </CustomLink>

            <CustomLink href="/login">
                <span className="font-poppins text-white hover:text-primary transition duration-300">
                    Acessar Projeto
                </span>
            </CustomLink>
        </header>
    )
}
