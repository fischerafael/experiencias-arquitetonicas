import { AppNavBar } from '../../components/AppNavBar'
import { AppDashboardlayoutList } from '../../components/Layout/AppDashboardLayoutList'
import { DefaultButton } from '../../components/Button/Default'
import { CustomLink } from '../../components/CustomLink'
import { EmptyListItem } from '../../components/List/EmptyListItem'
import { UserListItem } from '../../components/List/UserListItem'

export const AppUserPage = () => {
    return (
        <main className="bg-gray-50 text-gray-600 h-screen flex flex-col justify-start">
            <AppNavBar activePage="users" />

            <main className="px-4 py-2 overflow-hidden h-dashboard overflow-y-scroll flex flex-col items-center">
                <section className="py-8 max-w-screen-lg w-full flex flex-row justify-between">
                    <h1 className="text-2xl font-bold">Usuários</h1>
                </section>

                <AppDashboardlayoutList>
                    {/* <EmptyListItem label="Você ainda não cadastrou nenhum usuário" /> */}
                    <UserListItem />
                </AppDashboardlayoutList>
            </main>
        </main>
    )
}
