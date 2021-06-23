import { BreadCrumbLinkProp } from '../../types'
import { AppDashboardLayout } from '../../components/Layout/AppDashboardLayout'
import { AppNavBar } from '../../components/AppNavBar'
import { CardAppPage } from './components/CardAppPage'
import { AppDashboardCard } from '../../components/Card/AppDashboardCard'

export const AppPage = () => {
    return (
        <main className="bg-gray-100 flex flex-col justify-start ">
            <AppNavBar />
            <AppDashboardLayout>
                <ul className="grid grid-cols-4 py-4 gap-6 font-poppins text-gray-600">
                    <AppDashboardCard
                        index="01"
                        title="USUÁRIOS"
                        description="Cadastre os usuários de seu projeto para começar"
                    />
                    <AppDashboardCard
                        index="02"
                        title="REFERÊNCIAS"
                        description="Cadastre referências de projeto parecidas com o que você vai projetar"
                    />
                    <AppDashboardCard
                        index="03"
                        title="AVALIAÇÕES"
                        description="Peça para os usuários avaliarem as referências de projeto cadastradas"
                    />
                    <AppDashboardCard
                        index="04"
                        title="PROJETO"
                        description="Cadastre suas alternativas de projeto e descubra como os usuários irão experenciá-las"
                    />
                </ul>
            </AppDashboardLayout>
            {/* <section className="p-4 w-full h-full flex flex-col justify-center items-center"> */}

            {/* </section> */}
        </main>
    )
}
