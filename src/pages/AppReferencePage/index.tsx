import { IProject } from '../../types'

import { AppNavBar } from '../../components/AppNavBar'
import { AppDashboardLayout } from '../../components/Layout/AppDashboardLayout'
import { AppDashboardlayoutList } from '../../components/Layout/AppDashboardLayoutList'
import { ProjectListItem } from '../../components/List/ProjectListItem'
import { EmptyListItem } from '../../components/List/EmptyListItem'

const p1: IProject = {
    thumbnail:
        'https://www.urbs.curitiba.pr.gov.br/uploads/galeriaNoticaImagens/ac7b5bbb9f7c46de86ceedf4b9f8d142c951e964.jpg',
    title: 'Rua 24 Horas',
    location: 'Curitiba, 24 Horas',
    features: [
        'lazer',
        'trabalho',
        'lazer',
        'trabalho',
        'trabalho',
        'lazer',
        'trabalho',
        'trabalho',
        'lazer',
        'trabalho',
        'lazer',
        'trabalho',
        'trabalho',
        'lazer',
        'trabalho'
    ],
    experience: 'Muito Negativa',
    feelings: ['irritado', 'puto', 'revoltado']
}

const p2: IProject = {
    thumbnail:
        'https://viajantesemfim.com.br/wp-content/uploads/2020/07/109202726_3060429470743469_156447170371722926_n-800x500.jpg',
    title: 'Rua 24 Horas',
    location: 'Curitiba, 24 Horas',
    features: [
        'lazer',
        'trabalho',
        'lazer',
        'trabalho',
        'trabalho',
        'lazer',
        'trabalho',
        'lazer',
        'trabalho',
        'trabalho',
        'lazer',
        'trabalho',
        'trabalho',
        'lazer',
        'trabalho',
        'lazer',
        'trabalho',
        'trabalho',
        'lazer',
        'trabalho'
    ],
    experience: 'Muito Negativa',
    feelings: ['irritado', 'puto', 'revoltado']
}

export const AppReferencePage = () => {
    return (
        <main className="bg-gray-50  text-gray-600 flex flex-col justify-start">
            <AppNavBar activePage="references" />
            <main className="px-4 py-2 overflow-hidden h-dashboard overflow-y-scroll flex flex-col items-center">
                <section className="py-8 max-w-screen-lg w-full flex flex-row justify-between">
                    <h1 className="text-2xl font-bold">Referências</h1>
                </section>

                <AppDashboardlayoutList>
                    <ul className="grid grid-cols-1 gap-4">
                        <ProjectListItem project={p1} />
                        <ProjectListItem project={p2} />
                    </ul>
                    {/* <EmptyListItem label="Você ainda não cadastrou nenhuma referência" /> */}
                </AppDashboardlayoutList>
            </main>
        </main>
    )
}
