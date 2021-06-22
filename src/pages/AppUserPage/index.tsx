import { AppNavBar } from '../../components/AppNavBar'
import { BreadCrumb } from '../../components/BreadCrumb'
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
        <main className="bg-gray-50 h-screen flex flex-col justify-start ">
            <AppNavBar activePage="users" />
            <section className="p-4 w-full h-full flex flex-col items-center">
                <BreadCrumb links={breadCrumbLinks} />
                <ul className="flex flex-col gap-2 max-w-2xl w-full">
                    <ListItemEmpty />
                    {/* <ListItemUser
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
                    /> */}
                </ul>
                <section className="py-10 max-w-2xl w-full">
                    <CustomLink href="/app/users/edit">
                        <DefaultButton>Adicionar Usuário</DefaultButton>
                    </CustomLink>
                </section>
            </section>
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
        <li className="hover:shadow-md transition duration-500 bg-white p-4 grid grid-cols-6 items-start cursor-pointer shadow-sm rounded-md">
            <section className="col-span-1 flex justify-center items-center h-full">
                <UserIcon />
            </section>

            <section className="col-span-2 flex flex-col ">
                <span className="text-xs text-primary tracking-wider font-poppins">
                    USUÁRIO
                </span>
                <h1 className="text-xl font-poppins font-bold">{name}</h1>
                <h2 className="text-xs font-poppins">
                    {profession}, {age} anos
                </h2>
            </section>

            <section className="w-full col-span-2 flex flex-col">
                <span className="text-xs text-primary tracking-wider font-poppins">
                    EXPERIÊNCIA DESEJADA
                </span>
                <p className="text-xl font-bold font-poppins">{desiredExp}</p>
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
