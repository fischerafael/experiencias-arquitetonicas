import { BreadCrumbLinkProp } from '../../types'

import { AppNavBar } from '../../components/AppNavBar'
import { BreadCrumb } from '../../components/BreadCrumb'
import { AppDashboardLayout } from '../../components/Layout/AppDashboardLayout'

const breadCrumbLinks: BreadCrumbLinkProp[] = [
    {
        label: 'Início',
        href: '/app'
    },
    {
        label: 'Usuários',
        href: '/app/users'
    },
    {
        label: 'Novo Usuário',
        href: '/app/edit'
    }
]

export const AppUserNewPage = () => {
    return (
        <main className="bg-gray-50 h-screen flex flex-col justify-start">
            <AppNavBar activePage="users" />
            <AppDashboardLayout>
                <BreadCrumb links={breadCrumbLinks} />
                <section></section>
                new user
            </AppDashboardLayout>
        </main>
    )
}
