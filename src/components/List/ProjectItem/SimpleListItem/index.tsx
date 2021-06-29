import { TrashIcon } from '@heroicons/react/outline'
import tw from 'tailwind-styled-components'

import { IProject } from '../../../../entities'

interface SimpleListItemProps {
    project: IProject
    onRemove: (e: any) => void
}

export const SimpleListItem = ({ project, onRemove }: SimpleListItemProps) => {
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
                        onClick={onRemove}
                        className="flex items-center justify-center flex-col group text-gray-400"
                    >
                        <TrashIcon className="w-4 h-4 group-hover:text-red-500" />
                        <span className="text-tiny font-medium tracking-tight">
                            Remover
                        </span>
                    </button>
                </section>
            </ListHeader>
        </ListWrapper>
    )
}

const ListWrapper = tw.li`
    cursor-default font-poppins flex flex-col gap-4 border-b py-8
`
const ListHeader = tw.header`grid grid-cols-4 gap-4`
