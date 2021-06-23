import { AppNavBar } from '../../components/AppNavBar'
import { AppDashboardLayout } from '../../components/Layout/AppDashboardLayout'
import { AppDashboardlayoutList } from '../../components/Layout/AppDashboardLayoutList'
import { BreadCrumb } from '../../components/BreadCrumb'

import { BreadCrumbLinkProp } from '../../types'

const breadCrumbLinks: BreadCrumbLinkProp[] = [
    {
        label: 'Início',
        href: '/app'
    },
    {
        label: 'Referências',
        href: '/app/references'
    }
]

export const AppReferencePage = () => {
    return (
        <main className="bg-gray-50 min-h-screen flex flex-col justify-start">
            <AppNavBar activePage="references" />
            <AppDashboardLayout>
                <BreadCrumb links={breadCrumbLinks} />
                <AppDashboardlayoutList>
                    <AppReferenceListItem />
                </AppDashboardlayoutList>
            </AppDashboardLayout>
        </main>
    )
}

const ruaViteEQuatroHoras =
    'https://www.urbs.curitiba.pr.gov.br/uploads/galeriaNoticaImagens/ac7b5bbb9f7c46de86ceedf4b9f8d142c951e964.jpg'

const AppReferenceListItem = () => {
    return (
        <li className="border border-gray-100 bg-white text-gray-500 grid grid-cols-6 gap-4 rounded-md overflow-hidden cursor-pointer hover:shadow-lg">
            <section className="flex items-center h-full col-span-2">
                <img
                    className="object-cover h-full w-full rounded-md"
                    src={ruaViteEQuatroHoras}
                    alt="Rua 24 h"
                />
            </section>

            <section className="col-span-2 py-4 flex flex-col">
                <span className="text-tiny font-poppins font-normal">
                    REFERÊNCIA
                </span>
                <h1 className="text-lg font-poppins font-bold">Rua 24 Horas</h1>
                <h2 className="text-supersmall font-poppins">
                    Curitiba, Brasil
                </h2>
                <ul className="flex flex-wrap py-2 gap-1 items-center overflow-y-scroll h-20">
                    <FeatureItem feature="lazer" />
                    <FeatureItem feature="lazer" />
                    <FeatureItem feature="lazer" />
                    <FeatureItem feature="lazer" />
                    <FeatureItem feature="lazer" />
                    <FeatureItem feature="lazer" />
                    <FeatureItem feature="lazer" />
                    <FeatureItem feature="lazer" />
                </ul>
            </section>

            <h1>oi</h1>
            <h1>oi</h1>
        </li>
    )
}

const FeatureItem = ({ feature }: { feature: string }) => {
    return (
        <span className="text-tiny p-1 font-poppins bg-gray-200 rounded-md">
            {feature}
        </span>
    )
}
