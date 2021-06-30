import { useEffect, useState } from 'react'
import { fetch } from '../../../services/api'
import { useAuth } from '../../../hooks/useAuth'

import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { IProject } from '../../../entities'
import { CustomLink } from '../../../components/CustomLink'
import { ProjectListItem } from '../../../components/List/ProjectItem/ProjectListItem'
import { DefaultButton } from '../../../components/Button/style'

const breadCrumbLinks = [
    {
        text: 'Início',
        href: '/app',
        isActive: false,
        isFirst: true
    },
    {
        text: 'Propostas',
        href: '/app/projects',
        isActive: true,
        isFirst: false
    }
]

export const Projects = () => {
    const { credentials } = useAuth()

    const [projects, setProjects] = useState<IProject[]>([])

    console.log('projects', projects)

    const handleRemoveProject = async (projectId: string) => {
        try {
            const { response } = await fetch.removeReference(
                projectId,
                credentials.jwt
            )

            setProjects(
                projects.filter((reference) => reference.id !== projectId)
            )

            console.log('removed', response)
            alert(`Proposta ${projectId} removida com sucesso!`)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        ;(async () => {
            const { response } = await fetch.getAllProjects(credentials.user_id)

            setProjects(response)
        })()
    }, [])

    return (
        <PageAppWrapper>
            <PageHeaderWrapper>
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>

                <BreadCrumb links={breadCrumbLinks} />
            </PageHeaderWrapper>

            <PageMainWrapper>
                <ul className="flex flex-col w-full">
                    {projects?.map((project) => (
                        <ProjectListItem
                            key={project.id}
                            project={project}
                            onRemove={() => handleRemoveProject(project.id)}
                        />
                    ))}
                </ul>
            </PageMainWrapper>

            <PageFooterWrapper>
                <CustomLink href="/app/projects/edit">
                    <DefaultButton disabled={false}>
                        Adicionar Proposta
                    </DefaultButton>
                </CustomLink>
            </PageFooterWrapper>
        </PageAppWrapper>
    )
}

export default Projects
