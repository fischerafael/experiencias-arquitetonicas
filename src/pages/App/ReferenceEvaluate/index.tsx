import {
    PageAppWrapper,
    PageHeaderWrapper
} from '../../../../styles/components/Layout'
import { BreadCrumb } from '../../../components/BreadCrumb'

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
        isActive: false,
        isFirst: false
    },
    {
        text: 'Avaliar',
        href: '/app/references/evaluate',
        isActive: true,
        isFirst: false
    }
]

export const ReferenceEvaluate = () => {
    return (
        <PageAppWrapper>
            <PageHeaderWrapper>
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>
                <BreadCrumb links={breadCrumbLinks} />
            </PageHeaderWrapper>
        </PageAppWrapper>
    )
}
