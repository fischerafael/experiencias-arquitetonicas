import { AppDashboardLayout } from '../../components/Layout/AppDashboardLayout'
import { AppNavBar } from '../../components/AppNavBar'
import { AppDashboardCard } from '../../components/Card/AppDashboardCard'

export const AppPage = () => {
    return (
        <main className="bg-gray-50 flex flex-col justify-start font-poppins text-gray-600">
            <AppNavBar />
            <main className="px-4 py-2 overflow-hidden h-dashboard overflow-y-scroll flex flex-col items-center">
                <section className="py-8 w-full flex flex-col">
                    <h1 className="text-2xl">Olá!</h1>
                    <h1 className="text-2xl font-bold">vamos projetar?</h1>
                </section>

                <ul className="grid grid-cols-1 py-4 gap-4 font-poppins text-gray-600 tablet:grid-cols-2 laptop:grid-cols-3 computer:grid-cols-4">
                    <AppDashboardCard
                        href="/app/users"
                        index="01"
                        title="USUÁRIOS"
                        description="Cadastre os usuários de seu projeto para começar"
                    />
                    <AppDashboardCard
                        href="/app/references"
                        index="02"
                        title="REFERÊNCIAS"
                        description="Cadastre referências de projeto parecidas com o que você vai projetar"
                    />
                    <AppDashboardCard
                        href="/app/users"
                        index="03"
                        title="AVALIAÇÕES"
                        description="Peça para os usuários avaliarem as referências de projeto cadastradas"
                    />
                    <AppDashboardCard
                        href="/app/users"
                        index="04"
                        title="PROJETO"
                        description="Cadastre suas alternativas de projeto e descubra como os usuários irão experenciá-las"
                    />
                </ul>
            </main>
        </main>
    )
}
