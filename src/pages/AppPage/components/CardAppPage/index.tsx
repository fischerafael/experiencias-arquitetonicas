import { CustomLink } from '../../../../components/CustomLink'

interface Props {
    index: string
    title: string
    description: string
    href: string
}

export const CardAppPage = ({ index, title, description, href }: Props) => {
    return (
        <CustomLink href={href}>
            <li className="hover:shadow-xl transition duration-500 cursor-pointer gap-4 bg-white h-96 max-h-80 p-6 rounded-md shadow-sm flex flex-col">
                <h1 className="text-6xl pt-10 font-poppins font-bold text-gray-700 ">
                    {index}
                </h1>
                <h2 className="text-xl font-poppins font-bold border-b pb-2">
                    {title}
                </h2>
                <p className="text-sm font-poppins">{description}</p>
            </li>
        </CustomLink>
    )
}
