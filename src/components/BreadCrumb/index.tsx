import Router from 'next/router'
import { BreadCrumbLinkProp, BreadCrumbProps } from '../../types'
import { CustomLink } from '../CustomLink'

export const BreadCrumb = ({ links }: BreadCrumbProps) => {
    const navigateBack = () => {
        Router.back()
    }

    return (
        <ul className="flex py-2 flex-row w-full justify-between">
            <nav className="flex flex-row gap-2">
                {links?.map((link) => (
                    <BreadCrumbLink
                        key={link.href}
                        href={link.href}
                        label={link.label}
                    />
                ))}
            </nav>
            <li
                onClick={navigateBack}
                className="flex flex-row items-center justify-center cursor-pointer "
            >
                <span className="text-sm font-medium text-gray-400 font-poppins">
                    VOLTAR
                </span>
            </li>
        </ul>
    )
}

const BreadCrumbLink = ({ href, label }: BreadCrumbLinkProp) => {
    return (
        <CustomLink href={href}>
            <li className="flex flex-row rounded items-center justify-center cursor-pointer gap-2">
                <ArrowRight />
                <span className="text-sm font-medium text-gray-400 font-poppins">
                    {label}
                </span>
            </li>
        </CustomLink>
    )
}

const ArrowRight = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-primary"
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
