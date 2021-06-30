import { BeakerIcon } from '@heroicons/react/outline'
import tw from 'tailwind-styled-components'
import { IProject } from '../../../../entities'
import { getEmoji, getHashtagsArray } from '../../../../utils'

interface EvaluationListItemProps {
    project: IProject
    onEvaluate: (e: any) => void
}

export const EvaluationListItem = ({
    project,
    onEvaluate
}: EvaluationListItemProps) => {
    const userXp = getEmoji(project.client_evaluation)
    const hashtagsArray = getHashtagsArray(project)

    return (
        <ListWrapper>
            <ListHeader>
                <section>
                    <img
                        src={project.project_thumbnail}
                        alt={project.project_name}
                        className="h-16 w-full object-cover rounded"
                    />
                </section>

                <section className="col-span-2 flex flex-col justify-between">
                    <h2 className="font-bold text-sm">
                        {project.project_name}
                    </h2>
                    <p className="text-gray-400">{project.project_location}</p>
                </section>

                <section className="h-full flex flex-col justify-start items-end">
                    <button
                        onClick={onEvaluate}
                        className="flex items-center justify-center flex-col group text-gray-400"
                    >
                        <BeakerIcon className="w-4 h-4 group-hover:text-blue-500" />
                        <span className="text-tiny font-medium tracking-tight">
                            Avaliar
                        </span>
                    </button>
                </section>
            </ListHeader>

            <ListFooter>
                <section className="flex flex-col items-center gap-4">
                    <section className="w-full flex flex-col items-center justify-center">
                        <span className="text-xs font-bold text-center">
                            XP Avaliada
                        </span>
                        <p className="text-lg">{userXp.emoji}</p>
                        <span className="text-center text-tiny leading-tight">
                            {userXp.hashtags}
                        </span>
                    </section>
                </section>

                <section className="col-start-2 col-span-3 flex flex-col gap-2">
                    <span className="text-xs font-bold">Características</span>
                    <ul className="flex flex-row flex-wrap gap-1">
                        {hashtagsArray?.map((description, index) => (
                            <li
                                key={index}
                                className="text-tiny bg-gray-100 px-1"
                            >
                                {description}
                            </li>
                        ))}
                    </ul>
                </section>
            </ListFooter>
        </ListWrapper>
    )
}

const ListWrapper = tw.li`
    cursor-default font-poppins flex flex-col gap-4 border-b py-8
`
const ListHeader = tw.header`grid grid-cols-4 gap-4`
const ListFooter = tw.footer`grid grid-cols-4 gap-4`
