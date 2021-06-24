import { AppNavBar } from '../../components/AppNavBar'
import { AppDashboardLayout } from '../../components/Layout/AppDashboardLayout'
import { AppDashboardlayoutList } from '../../components/Layout/AppDashboardLayoutList'
import { UserListItem } from '../../components/List/UserListItem'

export const AppEvaluationPage = () => {
    return (
        <main className="bg-gray-50 text-gray-600 min-h-screen flex flex-col justify-start">
            <AppNavBar activePage="evaluations" />
            <main className="px-4 py-2 overflow-hidden h-dashboard overflow-y-scroll flex flex-col items-center">
                <section className="py-8 max-w-screen-lg w-full flex flex-row justify-between">
                    <h1 className="text-2xl font-bold">Avaliações</h1>
                </section>
                <AppDashboardlayoutList>
                    <UserListItem />
                    <UserListItem />
                    <UserListItem />
                </AppDashboardlayoutList>
            </main>
        </main>
    )
}
