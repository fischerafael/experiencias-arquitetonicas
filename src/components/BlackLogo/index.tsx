import { CustomLink } from '../../components/CustomLink'

export const BlackLogo = ({ href }) => {
    return (
        <CustomLink href={href}>
            <nav className="h-full flex">
                <img
                    src="/icons/logo-black.svg"
                    alt=""
                    className="object-contain"
                />
            </nav>
        </CustomLink>
    )
}
