import { AppNavBar } from '../../components/AppNavBar'
import { BreadCrumb } from '../../components/BreadCrumb'
import { AppDashboardLayout } from '../../components/Layout/AppDashboardLayout'
import { AppDashboardlayoutList } from '../../components/Layout/AppDashboardLayoutList'
import { DefaultButton } from '../../components/Button/Default'
import { CustomLink } from '../../components/CustomLink'
import { BreadCrumbLinkProp } from '../../types'

const breadCrumbLinks: BreadCrumbLinkProp[] = [
    {
        label: 'Início',
        href: '/app'
    },
    {
        label: 'Usuários',
        href: '/app/users'
    }
]

export const AppUserPage = () => {
    return (
        <main className="bg-gray-50 min-h-screen flex flex-col justify-start">
            <AppNavBar activePage="users" />
            <AppDashboardLayout>
                <BreadCrumb links={breadCrumbLinks} />
                <AppDashboardlayoutList>
                    <ListItemEmpty />
                    <ListItemUser
                        name="Rafael Fischer"
                        profession="Arquiteto"
                        age="31"
                        desiredExp="Positiva"
                    />
                    <ListItemUser
                        name="Rafael Fischer"
                        profession="Arquiteto"
                        age="31"
                        desiredExp="Positiva"
                    />
                    <ListItemUser
                        name="Rafael Fischer"
                        profession="Arquiteto"
                        age="31"
                        desiredExp="Positiva"
                    />
                </AppDashboardlayoutList>

                <section className="py-10 max-w-2xl w-full">
                    <CustomLink href="/app/users/edit">
                        <DefaultButton>Novo Usuário</DefaultButton>
                    </CustomLink>
                </section>
            </AppDashboardLayout>
        </main>
    )
}

const ListItemEmpty = () => {
    return (
        <li className="transition duration-500 p-4 py-10 rounded-md border-2 border-dashed border-white flex flex-col justify-center items-center">
            <h2 className="text-lg font-poppins font-bold">
                Nenhum usuário cadastrado
            </h2>
            <p className="text-xs font-poppins">
                Adicione um usuário para poder criar seus projetos
            </p>
        </li>
    )
}

const ListItemUser = ({ name, profession, age, desiredExp }) => {
    return (
        <li className="border border-gray-100 hover:shadow-lg transition duration-500 bg-white p-4 grid grid-cols-6 items-start cursor-pointer shadow-sm rounded-md">
            <section className="col-span-1 flex items-center h-full">
                <UserIcon />
            </section>

            <section className="col-span-2 flex flex-col ">
                <span className="text-tiny font-poppins font-normal">
                    USUÁRIO
                </span>
                <h1 className="text-lg font-poppins font-bold">{name}</h1>
                <h2 className="text-supersmall text-gray-400 font-poppins">
                    {profession}, {age} anos
                </h2>
            </section>

            <section className="w-full col-span-2 flex flex-col h-full">
                <span className="text-tiny font-poppins font-normal">
                    EXPERIÊNCIA DESEJADA
                </span>
                <p className="text-md font-bold text-gray-300 font-poppins">
                    {desiredExp}
                </p>
            </section>

            <section className="flex h-full items-center justify-center">
                <DefaultButton>Remover</DefaultButton>
            </section>
        </li>
    )
}

const UserIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
        </svg>
    )
}
