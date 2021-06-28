import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { DefaultButton } from '../../../components/Button/style'
import { CustomLink } from '../../../components/CustomLink'
import { ProjectItem } from '../../../components/List/ProjectItem'
import { IProject } from '../../../entities'

const breadCrumbLinks = [
    {
        text: 'Início',
        href: '/app',
        isActive: false,
        isFirst: true
    },
    {
        text: 'Referências',
        href: '/app/references',
        isActive: true,
        isFirst: false
    }
]

const projectOne: IProject = {
    project_name: 'Museu de Arte de Niteroi',
    project_location: 'Niteroi, Brasil',
    predicted_evaluation: 0.2,
    project_thumbnail:
        'https://i2.wp.com/www.historiadasartes.com/wp-content/uploads/2016/09/m_entrada.jpg?fit=500%2C332&ssl=1'
}
//
export const ReferencesPage = () => {
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
                    <ProjectItem project={projectOne} page="references" />
                    <ProjectItem project={projectOne} page="references" />
                    <ProjectItem project={projectOne} page="references" />
                </ul>
            </PageMainWrapper>

            <PageFooterWrapper>
                <CustomLink href="/app/references/edit">
                    <DefaultButton disabled={false}>
                        Adicionar Referência
                    </DefaultButton>
                </CustomLink>
            </PageFooterWrapper>
        </PageAppWrapper>
    )
}
