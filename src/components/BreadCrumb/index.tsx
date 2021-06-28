import { CustomLink } from '../CustomLink'

interface BreadCrumbLinkProps {
    text: string
    href: string
    isFirst?: boolean
    isActive?: boolean
}

interface BreadCrumbProps {
    links: BreadCrumbLinkProps[]
}

export const BreadCrumb = ({ links }: BreadCrumbProps) => {
    return (
        <section className="h-1/3 w-full flex justify-between items-center text-gray-400">
            <nav className="flex gap-1">
                {links.map((link) => (
                    <BreadCrumbLink
                        isFirst={link.isFirst}
                        isActive={link.isActive}
                        text={link.text}
                        href={link.href}
                    />
                ))}
            </nav>

            <BreadCrumbLink isFirst text="Voltar" href="/app" />
        </section>
    )
}

const BreadCrumbLink = ({
    text,
    isFirst,
    isActive,
    href
}: BreadCrumbLinkProps) => {
    return (
        <CustomLink href={href}>
            <div className="flex gap-1 font-medium">
                {!isFirst && <span>&gt;</span>}
                {!isActive && (
                    <span className="cursor-pointer hover:text-gray-700">
                        {text}
                    </span>
                )}
                {isActive && (
                    <span className="cursor-pointer text-gray-700">{text}</span>
                )}
            </div>
        </CustomLink>
    )
}

// import Router from 'next/router'
// import { BreadCrumbLinkProp, BreadCrumbProps } from '../../types'
// import { CustomLink } from '../CustomLink'

// export const BreadCrumb = ({ links }: BreadCrumbProps) => {
//     const navigateBack = () => {
//         Router.back()
//     }

//     return (
//         <ul className="flex py-2 flex-row w-full justify-between">
//             <nav className="flex flex-row gap-2">
//                 {links?.map((link) => (
//                     <BreadCrumbLink
//                         key={link.href}
//                         href={link.href}
//                         label={link.label}
//                     />
//                 ))}
//             </nav>
//             <li
//                 onClick={navigateBack}
//                 className="flex flex-row items-center justify-center cursor-pointer "
//             >
//                 <span className="text-sm font-medium text-gray-400 font-poppins">
//                     VOLTAR
//                 </span>
//             </li>
//         </ul>
//     )
// }

// const BreadCrumbLink = ({ href, label }: BreadCrumbLinkProp) => {
//     return (
//         <CustomLink href={href}>
//             <li className="flex flex-row rounded items-center justify-center cursor-pointer gap-2">
//                 <ArrowRight />
//                 <span className="text-sm font-medium text-gray-400 font-poppins">
//                     {label}
//                 </span>
//             </li>
//         </CustomLink>
//     )
// }

// const ArrowRight = () => {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-3 w-3 text-primary"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//         >
//             <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M9 5l7 7-7 7"
//             />
//         </svg>
//     )
// }
