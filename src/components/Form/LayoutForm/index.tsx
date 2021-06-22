import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export const LayoutForm = ({ children }: Props) => {
    return (
        <form className="bg-white w-full max-w-2xl shadow-sm rounded-md mb-6">
            {children}
        </form>
    )
}
