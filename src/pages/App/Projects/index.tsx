import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { IProject } from '../../../entities'
import { ProjectItem } from '../../../components/List/ProjectItem'
import { CustomLink } from '../../../components/CustomLink'
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

export const Projects = () => {
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
                    <ProjectItem
                        project={projectOne}
                        page="projects"
                        onRemove={() => {}}
                    />
                    <ProjectItem
                        project={projectOne}
                        page="projects"
                        onRemove={() => {}}
                    />
                    <ProjectItem
                        project={projectOne}
                        page="projects"
                        onRemove={() => {}}
                    />
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
