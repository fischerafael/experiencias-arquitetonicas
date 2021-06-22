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
                            Experiência do Usuário Esperada
                        </h1>

                        <section className="grid grid-cols-4 gap-3">
                            <CardOption
                                experience="Muito Positiva"
                                feelings={['excitado', 'eufórico', 'feliz']}
                                checked={true}
                            />
                            <CardOption
                                experience="Positiva"
                                feelings={['contente', 'relaxado', 'calmo']}
                                checked={false}
                            />
                            <CardOption
                                experience="Negativa"
                                feelings={['fatigado', 'deprimido', 'triste']}
                                checked={false}
                            />
                            <CardOption
                                experience="Muito Negativa"
                                feelings={['irritado', 'nervoso', 'tenso']}
                                checked={false}
                            />
                        </section>
                    </div>
                </LayoutForm>
            </AppDashboardLayout>
        </main>
    )
}

interface PropsCardOptions {
    experience: string
    feelings: string[]
    checked: boolean
}

const CardOption = ({ experience, feelings, checked }: PropsCardOptions) => {
    return (
        <article
            className={`${
                checked ? 'bg-primary text-white' : 'bg-gray-50 text-gray-500'
            } border border-gray-100 p-2 rounded-md shadow-sm cursor-pointer hover:shadow-md`}
        >
            <header className="h-20 border-b flex flex-col justify-end pb-2">
                <h3 className="text-tiny font-poppins  font-normal">
                    Experiência
                </h3>
                <h2 className="font-bold font-poppins text-base">
                    {experience}
                </h2>
            </header>
            <footer className="flex flex-wrap py-2 gap-1">
                {feelings?.map((feeling) => (
                    <CardOptionHashtag
                        key={feeling}
                        checked={checked}
                        hashtag={feeling}
                    />
                ))}
            </footer>
        </article>
    )
}

const CardOptionHashtag = ({
    hashtag,
    checked
}: {
    hashtag: string
    checked: boolean
}) => {
    return (
        <span
            className={`text-tiny p-1 font-poppins ${
                checked ? 'bg-blue-400' : 'bg-gray-200'
            } rounded-xl`}
        >
            {hashtag}
        </span>
    )
}
