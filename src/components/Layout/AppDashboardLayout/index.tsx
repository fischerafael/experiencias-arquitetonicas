import { ReactNode } from 'react'

interface AppDashboardLayoutProps {
    children: ReactNode
}

export const AppDashboardLayout = ({ children }: AppDashboardLayoutProps) => {
    return (
        <section className="p-4 w-full h-full flex flex-col items-center">
            {children}
        </section>
    )
}
