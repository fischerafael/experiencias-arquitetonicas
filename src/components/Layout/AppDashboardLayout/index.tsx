import { ReactNode } from 'react'

interface AppDashboardLayoutProps {
    children: ReactNode
}

export const AppDashboardLayout = ({ children }: AppDashboardLayoutProps) => {
    return (
        <main className="px-4 py-2 w-full flex flex-col h-80 items-center">
            <section className="max-w-screen-lg w-full ">{children}</section>
        </main>
    )
}
