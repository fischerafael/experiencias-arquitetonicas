import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { ProjectItem } from '../../../components/List/ProjectItem'
import { CustomLink } from '../../../components/CustomLink'
import { DefaultButton } from '../../../components/Button/style'
import { IProject } from '../../../entities'

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
    return (
        <PageAppWrapper>
            <PageHeaderWrapper>
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>

                <BreadCrumb links={breadCrumbLinks} />
            </PageHeaderWrapper>

            <PageMainWrapper fullScreen>
                <ul className="flex flex-col w-full">
                    <ProjectItem project={projectOne} page="evaluations" />
                    <ProjectItem project={projectOne} page="evaluations" />
                    <ProjectItem project={projectOne} page="evaluations" />
                </ul>
            </PageMainWrapper>

            {/* <PageFooterWrapper>
                <CustomLink href="/app/references/edit">
                    <DefaultButton disabled={false}>
                        Sem função ainda
                    </DefaultButton>
                </CustomLink>
            </PageFooterWrapper> */}
        </PageAppWrapper>
    )
}
