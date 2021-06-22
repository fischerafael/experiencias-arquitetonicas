import { BreadCrumbLinkProp, BreadCrumbProps } from '../../types'
import { CustomLink } from '../CustomLink'

export const BreadCrumb = ({ links }: BreadCrumbProps) => {
    return (
        <ul className="py-4 flex flex-row w-full max-w-2xl">
            {links?.map((link) => (
                <BreadCrumbLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                />
            ))}
        </ul>
    )
}

const BreadCrumbLink = ({ href, label }: BreadCrumbLinkProp) => {
    return (
        <CustomLink href={href}>
            <li className="flex flex-row pr-2 rounded items-center justify-center cursor-pointer hover:bg-gray-100">
                <ArrowRight />
                <span className="text-xs font-poppins">{label}</span>
            </li>
        </CustomLink>
    )
}

const ArrowRight = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
            />
        </svg>
    )
}
