import { UserIcon } from '@heroicons/react/outline'
import { HashtagList } from '../../List/HashTagList'
import { XCircleIcon } from '@heroicons/react/outline'

export const UserListItem = () => {
    return (
        <li className="relative grid grid-cols-10 font-poppins text-gray-600 bg-white w-full overflow-hidden border border-gray-200 rounded-md shadow-sm hover:shadow-lg cursor-default">
            <section className="p-8 col-span-2 w-full flex flex-col items-center justify-center shadow-lg">
                <UserIcon className="w-16 h-16 text-blue-500 hover:text-gray-600 cursor-pointer" />
            </section>

            <section className="col-span-3 p-8 gap-4 grid grid-cols-4 w-full">
                <section className="col-span-3 flex flex-col">
                    <span className="text-xs pb-4 text-gray-300">USUÁRIO</span>
                    <h2 className="font-bold">Rafael Fischer</h2>
                    <p className="text-xs">Arquiteto, 31 anos</p>
                </section>
            </section>

            <section className="col-span-2 p-8 flex flex-col">
                <span className="text-xs pb-4 text-gray-300 text-center">
                    SENSAÇÕES
                </span>
                <section className="flex h-full items-center flex-col gap-2">
                    <ul className="flex flex-wrap items-center justify-center gap-1">
                        <HashtagList feature="alegria" />
                        <HashtagList feature="alegrasdfsaddfia" />
                        <HashtagList feature="alegria" />
                    </ul>
                </section>
            </section>

            <section className="col-span-3 p-8 flex flex-col">
                <span className="text-xs pb-4 text-gray-300 text-center">
                    EXPERIÊNCIA ESPERADA
                </span>
                <section className="flex h-full items-center flex-col gap-2">
                    <p className="text-4xl">😁</p>
                    <p className="text-xs text-center font-bold">
                        Muito Positiva
                    </p>
                </section>
            </section>

            <XCircleIcon className="absolute right-2 bottom-2 w-8 h-8 text-red-600 hover:text-gray-600 cursor-pointer" />
        </li>
    )
}
