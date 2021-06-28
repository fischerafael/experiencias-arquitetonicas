import React, { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
    href: string
    children: ReactNode
}

export const CustomLink = ({ href, children }: Props) => {
    return (
        <Link href={href}>
            <a className="w-full">{children}</a>
        </Link>
    )
}
