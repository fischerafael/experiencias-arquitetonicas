import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { DefaultButton } from '../../../components/Button/style'
import { CustomLink } from '../../../components/CustomLink'

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
                <ul className="flex flex-col gap-9 w-full">
                    <li className="cursor-default my-2 font-poppins">
                        <header className="grid grid-cols-4 gap-4">
                            <section>
                                <img
                                    src="https://i2.wp.com/www.historiadasartes.com/wp-content/uploads/2016/09/m_entrada.jpg?fit=500%2C332&ssl=1"
                                    alt=""
                                    className="h-16 w-full object-cover rounded"
                                />
                            </section>

                            <section className="col-span-2 flex flex-col justify-between">
                                <h2 className="font-bold text-sm">
                                    Museu de Arte Contemporânea
                                </h2>
                                <span className="text-gray-400">
                                    Niterói, Brasil
                                </span>
                            </section>

                            <section className="flex flex-col justify-between items-end">
                                <h2 className="text-2xl">😀</h2>
                                <span className="text-gray-400 text-tiny text-right leading-tight">
                                    #triste #deprimido
                                </span>
                            </section>
                        </header>
                    </li>
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
