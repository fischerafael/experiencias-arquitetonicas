import { AppNavBar } from '../../components/AppNavBar'
import { CardAppPage } from './components/CardAppPage'

export const AppPage = () => {
    return (
        <main className="bg-gray-50 h-screen flex flex-col justify-start ">
            <AppNavBar />
            <section className="p-4 w-full h-full flex flex-col align-middle">
                <ul className="grid grid-cols-4 h-full gap-4 items-center">
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
