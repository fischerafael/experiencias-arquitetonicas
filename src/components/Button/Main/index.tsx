import { CustomLink } from '../../../components/CustomLink'

export const MainButton = ({ href, children }) => {
    return (
        <CustomLink href={href}>
            <button className="h-full px-8 py-4 text-xs font-bold text-white bg-blue-500 rounded-lg">
                {children}
            </button>
        </CustomLink>
    )
}
