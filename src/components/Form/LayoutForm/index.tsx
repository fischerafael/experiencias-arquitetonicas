import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export const LayoutForm = ({ children }: Props) => {
    return (
        <form className="bg-white w-full max-w-2xl shadow-sm rounded-md my-6 border border-gray-100">
            {children}
        </form>
    )
}
