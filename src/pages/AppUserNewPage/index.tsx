import { BreadCrumbLinkProp } from '../../types'

import { AppNavBar } from '../../components/AppNavBar'
import { BreadCrumb } from '../../components/BreadCrumb'
import { AppDashboardLayout } from '../../components/Layout/AppDashboardLayout'
import { LayoutForm } from '../../components/Form/LayoutForm'
import { InputText } from '../../components/InputText'

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
        <main className="bg-gray-50 min-h-screen flex flex-col justify-start">
            <AppNavBar activePage="users" />
            <AppDashboardLayout>
                <BreadCrumb links={breadCrumbLinks} />
                <LayoutForm>
                    <div className="p-10 flex flex-col gap-4">
                        <h1 className="font-bold text-gray-500 font-poppins pb-4 border-b">
                            Dados do Usuário
                        </h1>
                        <InputText
                            label="Nome do Usuário"
                            placeholder="ex: Rafael Fischer"
                        />
                        <section className="flex gap-4">
                            <InputText
                                label="Profissão"
                                placeholder="ex: Arquiteto"
                            />
                            <InputText
                                label="Idade"
                                placeholder="ex: 31"
                                type="number"
                            />
                        </section>

                        <h1 className="font-bold text-gray-500 font-poppins pb-4 border-b">
                            Experiência do Usuário
                        </h1>
                    </div>
                </LayoutForm>
            </AppDashboardLayout>
        </main>
    )
}
