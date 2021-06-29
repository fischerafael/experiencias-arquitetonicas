import { TrashIcon, BeakerIcon } from '@heroicons/react/outline'
import tw from 'tailwind-styled-components'
import Router from 'next/router'

import { IProject } from '../../../entities'
import { options } from '../../../model/formRadio'

interface ProjectItemProps {
    project: IProject
    page: 'references' | 'evaluations' | 'projects'
}

const handleDisplayEvaluationInfo = (evaluation: number) => {
    if (evaluation < 1 / 8) return emotionsDisplay.negativeA
    if (evaluation < 2 / 8) return emotionsDisplay.negativeB
    if (evaluation < 3 / 8) return emotionsDisplay.negativeC
    if (evaluation < 4 / 8) return emotionsDisplay.negativeD
    if (evaluation < 5 / 8) return emotionsDisplay.positiveE
    if (evaluation < 6 / 8) return emotionsDisplay.positiveF
    if (evaluation < 7 / 8) return emotionsDisplay.positiveG
    if (evaluation <= 8 / 8) return emotionsDisplay.positiveH
}

const handleGetDescriptionFromKey = (project: IProject, key: string) => {
    const description = options[key].options.find(
        (option) => option.value === project[key]
    ).description
    return description
}

const handleNavigateToProject = (e) => {
    Router.push('/app/evaluations/edit')
}

export const ProjectItem = ({ project, page }: ProjectItemProps) => {
    const predictedEmotion = handleDisplayEvaluationInfo(
        project.predicted_evaluation
    )
    const clientEmotion = handleDisplayEvaluationInfo(project.client_evaluation)
    const descriptionArray = [
        handleGetDescriptionFromKey(project, 'height'),
        handleGetDescriptionFromKey(project, 'size'),
        handleGetDescriptionFromKey(project, 'elements'),
        handleGetDescriptionFromKey(project, 'shape'),
        handleGetDescriptionFromKey(project, 'materials'),
        handleGetDescriptionFromKey(project, 'texture'),
        handleGetDescriptionFromKey(project, 'tone'),
        handleGetDescriptionFromKey(project, 'primary_color'),
        handleGetDescriptionFromKey(project, 'secondary_color'),
        handleGetDescriptionFromKey(project, 'tertiary_color'),
        handleGetDescriptionFromKey(project, 'opennings'),
        handleGetDescriptionFromKey(project, 'light'),
        handleGetDescriptionFromKey(project, 'contrast'),
        handleGetDescriptionFromKey(project, 'opacity'),
        handleGetDescriptionFromKey(project, 'movement'),
        handleGetDescriptionFromKey(project, 'people'),
        handleGetDescriptionFromKey(project, 'context'),
        handleGetDescriptionFromKey(project, 'landmark'),
        handleGetDescriptionFromKey(project, 'context_interest'),
        handleGetDescriptionFromKey(project, 'time'),
        handleGetDescriptionFromKey(project, 'weather')
    ]

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
                    {page === 'evaluations' && (
                        <button
                            onClick={() => handleNavigateToProject('')}
                            className="flex items-center justify-center flex-col group text-gray-400"
                        >
                            <BeakerIcon className="w-4 h-4 group-hover:text-blue-500" />
                            <span className="text-tiny font-medium tracking-tight">
                                Avaliar
                            </span>
                        </button>
                    )}

                    {(page === 'references' || page === 'projects') && (
                        <button className="flex items-center justify-center flex-col group text-gray-400">
                            <TrashIcon className="w-4 h-4 group-hover:text-red-500" />
                            <span className="text-tiny font-medium tracking-tight">
                                Remover
                            </span>
                        </button>
                    )}
                </section>
            </ListHeader>

            {page !== 'references' && (
                <ListFooter>
                    <section className="flex flex-col items-center gap-4">
                        {page === 'evaluations' && (
                            <section className="w-full flex flex-col items-center justify-center">
                                <span className="text-xs font-bold text-center">
                                    XP do Usuário
                                </span>
                                <p className="text-lg">{clientEmotion.emoji}</p>
                                <span className="text-center text-tiny leading-tight">
                                    {clientEmotion.hashtags}
                                </span>
                            </section>
                        )}

                        {page === 'projects' && (
                            <section className="w-full flex flex-col items-center justify-center">
                                <span className="text-xs font-bold">
                                    XP Prevista
                                </span>
                                <p className="text-lg">
                                    {predictedEmotion.emoji}
                                </p>
                                <span className="text-center text-tiny leading-tight">
                                    {predictedEmotion.hashtags}
                                </span>
                            </section>
                        )}
                    </section>

                    <section className="col-start-2 col-span-3 flex flex-col gap-2">
                        <span className="text-xs font-bold">
                            Características
                        </span>
                        <ul className="flex flex-row flex-wrap gap-1">
                            {descriptionArray?.map((description, index) => (
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
            )}
        </ListWrapper>
    )
}

const ListWrapper = tw.li`
    cursor-default font-poppins flex flex-col gap-4 border-b py-8
`
const ListHeader = tw.header`grid grid-cols-4 gap-4`
const ListFooter = tw.footer`grid grid-cols-4 gap-4`

export const emotionsDisplay = {
    negativeA: {
        emoji: '😱',
        hashtags: '#tenso #nervoso'
    },
    negativeB: {
        emoji: '😤',
        hashtags: '#estressado #irritado'
    },
    negativeC: {
        emoji: '😢',
        hashtags: '#triste #deprimido'
    },
    negativeD: {
        emoji: '🥱',
        hashtags: '#letárgico #fatigado'
    },
    positiveE: {
        emoji: '🙂',
        hashtags: '#calmo #relaxado'
    },
    positiveF: {
        emoji: '😃',
        hashtags: '#sereno #contente'
    },
    positiveG: {
        emoji: '😁',
        hashtags: '#feliz #alegre'
    },
    positiveH: {
        emoji: '🤪',
        hashtags: '#excitado #eufórico'
    }
}
