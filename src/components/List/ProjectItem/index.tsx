import { TrashIcon, BeakerIcon } from '@heroicons/react/outline'

import { IProject } from '../../../entities'

interface ProjectItemProps {
    project: IProject
    page: 'references' | 'evaluations'
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

export const ProjectItem = ({ project, page }: ProjectItemProps) => {
    const { predicted_evaluation } = project
    const emotions = handleDisplayEvaluationInfo(predicted_evaluation)

    return (
        <li className="cursor-default font-poppins flex flex-col gap-4 border-b py-8">
            <header className="grid grid-cols-4 gap-4">
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

                <section className="flex flex-col justify-between items-end">
                    <h2 className="text-2xl">{emotions.emoji}</h2>
                    <p className="text-gray-400 text-tiny text-right leading-tight">
                        {emotions.hashtags}
                    </p>
                </section>
            </header>

            <footer className="grid grid-cols-4 gap-4">
                {page === 'evaluations' && (
                    <section className="col-start-2 col-span-3">
                        <p className="text-tiny">
                            #hfuhfdu #hfuash #udafhusfhusdah #hfuadhfu
                            #ufhadufhsud #fuas #fausdfushdfuhs #hfuhfdu #hfuash
                            #udafhusfhusdah #hfuadhfu #ufhadufhsud #fuas
                            #fausdfushdfuhs #hfuhfdu #hfuash #udafhusfhusdah
                            #hfuadhfu #ufhadufhsud #fuas #fausdfushdfuhs
                            #hfuhfdu #hfuash #udafhusfhusdah #hfuadhfu
                            #ufhadufhsud #fuas #fausdfushdfuhs
                        </p>
                    </section>
                )}

                <section className="text-gray-400 col-start-2 col-span-3 flex-row flex justify-end">
                    {page === 'references' && (
                        <button className="flex items-center gap-2 group">
                            <TrashIcon className="w-4 h-4 group-hover:text-red-500" />
                            <span>Remover</span>
                        </button>
                    )}

                    {page === 'evaluations' && (
                        <button className="flex items-center gap-2 group">
                            <BeakerIcon className="w-4 h-4 group-hover:text-blue-500" />
                            <span>Avaliar Experiência</span>
                        </button>
                    )}
                </section>
            </footer>
        </li>
    )
}

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
