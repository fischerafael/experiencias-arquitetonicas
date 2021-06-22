import { BreadCrumbLinkProp } from '../../types'
import { AppNavBar } from '../../components/AppNavBar'
import { CardAppPage } from './components/CardAppPage'
import { BreadCrumb } from '../../components/BreadCrumb'

const breadCrumbLinks: BreadCrumbLinkProp[] = [
    {
        label: 'Início',
        href: '/app'
    }
]

export const AppPage = () => {
    return (
        <main className="bg-gray-50 flex flex-col justify-start ">
            <AppNavBar />
            <section className="p-4 w-full h-full flex flex-col justify-center items-center">
                <BreadCrumb links={breadCrumbLinks} />
                <ul className="grid grid-cols-2 h-full gap-4 items-center max-w-2xl w-full">
                    <CardAppPage
                        index="01"
                        title="Usuários"
                        description="Cadastre os usuários de seu projeto"
                        href="/app/users"
                    />
                    <CardAppPage
                        index="02"
                        title="Referências"
                        description="Cadastre referências de projeto"
                        href="/app/references"
                    />
                    <CardAppPage
                        index="03"
                        title="Avaliações"
                        description="Avalie as referências junto ao usuário"
                        href="/app/evaluations"
                    />
                    <CardAppPage
                        index="04"
                        title="Projetos"
                        description="Preveja as experiências arquitetônicas de seus projetos"
                        href="/app/projects"
                    />
                </ul>
            </section>
        </main>
    )
}
