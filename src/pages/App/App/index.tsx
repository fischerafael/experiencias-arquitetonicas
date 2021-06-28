import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'
import { BreadCrumb } from '../../../components/BreadCrumb'

const breadCrumbLinks = [
    {
        text: 'Início',
        href: '/app',
        isActive: true,
        isFirst: true
    }
]

export const AppPage = () => {
    return (
        <PageAppWrapper>
            <PageHeaderWrapper>
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>

                <BreadCrumb links={breadCrumbLinks} />
            </PageHeaderWrapper>

            <PageMainWrapper>corpo</PageMainWrapper>
            <PageFooterWrapper>footer</PageFooterWrapper>
        </PageAppWrapper>
    )
}
