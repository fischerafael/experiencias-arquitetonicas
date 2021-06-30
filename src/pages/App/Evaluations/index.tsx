import { useEffect, useState } from 'react'

import { IProject } from '../../../entities'
import { fetch } from '../../../services/api'
import { useAuth } from '../../../hooks/useAuth'

import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageFullMainWrapper
} from '../../../../styles/components/Layout'
import Router from 'next/router'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { EvaluationListItem } from '../../../components/List/ProjectItem/EvaluationListItem'
import { EmptyStateItem } from '../../../components/List/ProjectItem/EmptyStateItem'
import { Loading } from '../../../components/Loading'

const breadCrumbLinks = [
    {
        text: 'Início',
        href: '/app',
        isActive: false,
        isFirst: true
    },
    {
        text: 'Avaliações',
        href: '/app/evaluations',
        isActive: true,
        isFirst: false
    }
]

const projectOne: IProject = {
    project_name: 'Museu de Arte de Niteroi',
    project_location: 'Niteroi, Brasil',
    predicted_evaluation: 0.2,
    client_evaluation: 0.4,
    height: 0,
    size: 0,
    elements: 0,
    shape: 0,
    materials: 0,
    texture: 0,
    tone: 0,
    primary_color: 0,
    secondary_color: 0,
    tertiary_color: 0,
    opennings: 0,
    light: 0,
    contrast: 0,
    opacity: 0,
    movement: 0,
    people: 0,
    context: 0,
    landmark: 0,
    context_interest: 0,
    time: 0,
    weather: 0,
    project_thumbnail:
        'https://i2.wp.com/www.historiadasartes.com/wp-content/uploads/2016/09/m_entrada.jpg?fit=500%2C332&ssl=1'
}

export const Evaluations = () => {
    const { credentials } = useAuth()
    const [references, setReferences] = useState<IProject[]>([])

    useEffect(() => {
        ;(async () => {
            const { response } = await fetch.getAllReferences(
                credentials.user_id
            )

            setReferences(response)
        })()
    }, [])

    const handleEvaluateProject = (referenceId: string) => {
        Router.push(`/app/evaluations/${referenceId}`)
    }

    return (
        <PageAppWrapper>
            <PageHeaderWrapper>
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>

                <BreadCrumb links={breadCrumbLinks} />
            </PageHeaderWrapper>

            <PageFullMainWrapper>
                <ul className="flex flex-col w-full">
                    {references?.length === 0 && (
                        <EmptyStateItem
                            title="referência de projeto"
                            message="Retorne ao menu de referências e cadastre a primeira agora mesmo para que o usuário possa avaliá-la."
                        />
                    )}
                    {references?.map((reference) => (
                        <EvaluationListItem
                            key={reference.id}
                            project={reference}
                            onEvaluate={() =>
                                handleEvaluateProject(reference.id)
                            }
                        />
                    ))}
                </ul>
            </PageFullMainWrapper>
        </PageAppWrapper>
    )
}
