import { IProject } from '../../../types'
import { XCircleIcon } from '@heroicons/react/outline'
import { HashtagList } from '../../List/HashTagList'

export const ProjectListItem = ({ project }: { project: IProject }) => {
    return (
        <li className="relative grid grid-cols-5 font-poppins text-gray-600 bg-white w-full overflow-hidden border border-gray-200 rounded-md shadow-sm hover:shadow-lg cursor-default">
            <section className=" col-span-1 w-full">
                <img
                    src={project.thumbnail}
                    alt=""
                    className="object-cover h-52 laptop:h-full w-full"
                />
            </section>

            <section className="col-span-4 p-8 gap-4 grid grid-cols-4 w-full">
                <section className="col-span-1 flex flex-col">
                    <span className="text-xs pb-4 text-gray-300">
                        REFERÊNCIA
                    </span>
                    <h2 className="font-bold">Museu Oscar Niemeyer</h2>
                    <p className="text-xs">Curitiba, Paraná</p>
                </section>

                <section className="col-span-1 flex flex-col">
                    <span className="text-xs pb-4 text-gray-300">
                        CARACTERÍSTICAS
                    </span>
                    <ul className="flex flex-wrap overflow-y-scroll gap-1 h-36 pr-1">
                        {project?.features?.map((feature) => (
                            <HashtagList key={feature} feature={feature} />
                        ))}
                    </ul>
                </section>

                <section className="col-span-1 flex flex-col">
                    <span className="text-xs pb-4 text-gray-300 text-center">
                        EXPERIÊNCIA REAL
                    </span>
                    <section className="flex h-full items-center flex-col gap-2">
                        <p className="text-4xl">😁</p>
                        <p className="text-xs text-center font-bold">
                            Muito Positiva
                        </p>
                        <ul className="flex flex-wrap items-center justify-center gap-1">
                            <HashtagList feature="alegria" />
                            <HashtagList feature="alegrasdfsaddfia" />
                            <HashtagList feature="alegria" />
                        </ul>
                    </section>
                </section>

                <section className="col-span-1 flex flex-col">
                    <span className="text-xs pb-4 text-gray-300 text-center">
                        EXPERIÊNCIA PREVISTA
                    </span>
                    <section className="flex h-full items-center flex-col gap-2">
                        <p className="text-4xl">😁</p>
                        <p className="text-xs text-center font-bold">
                            Muito Positiva
                        </p>
                        <ul className="flex flex-wrap items-center justify-center gap-1">
                            <HashtagList feature="alegria" />
                            <HashtagList feature="alegrasdfsaddfia" />
                            <HashtagList feature="alegria" />
                        </ul>
                    </section>
                </section>
            </section>

            <XCircleIcon className="absolute right-2 bottom-2 w-8 h-8 text-red-600 hover:text-gray-600 cursor-pointer" />
        </li>
    )
}
