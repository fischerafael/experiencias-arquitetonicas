import { AppNavBar } from '../../components/AppNavBar'
import { AppDashboardLayout } from '../../components/Layout/AppDashboardLayout'
import { AppDashboardlayoutList } from '../../components/Layout/AppDashboardLayoutList'
import { BreadCrumb } from '../../components/BreadCrumb'
import { EmptyListItem } from '../../components/List/EmptyListItem'

import { BreadCrumbLinkProp, IProject } from '../../types'

const breadCrumbLinks: BreadCrumbLinkProp[] = [
    {
        label: 'INÍCIO',
        href: '/app'
    },
    {
        label: 'REFERÊNCIAS',
        href: '/app/references'
    }
]

const rua24: IProject = {
    thumbnail:
        'https://www.urbs.curitiba.pr.gov.br/uploads/galeriaNoticaImagens/ac7b5bbb9f7c46de86ceedf4b9f8d142c951e964.jpg',
    title: 'Rua 24 Horas',
    location: 'Curitiba, 24 Horas',
    features: [
        'lazer',
        'trabalho',
        'lazer',
        'trabalho',
        'trabalho',
        'lazer',
        'trabalho',
        'trabalho',
        'lazer',
        'trabalho',
        'lazer',
        'trabalho',
        'trabalho',
        'lazer',
        'trabalho'
    ],
    experience: 'Muito Negativa',
    feelings: ['irritado', 'puto', 'revoltado']
}

export const AppReferencePage = () => {
    return (
        <main className="bg-gray-50 min-h-screen flex flex-col justify-start">
            <AppNavBar activePage="references" />
            <AppDashboardLayout>
                <BreadCrumb links={breadCrumbLinks} />

                <section className="w-full text-gray-500 py-4 pt-10 flex justify-between items-center">
                    <h1 className="text-xl font-poppins font-bold">
                        Referências
                    </h1>
                    <button className="font-poppins text-small font-medium hover:text-primary">
                        Adicionar
                    </button>
                </section>

                <AppDashboardlayoutList>
                    {/* <EmptyListItem label="Você ainda não cadastrou nenhuma referência" /> */}
                    <AppReferenceListItem project={rua24} />
                </AppDashboardlayoutList>
            </AppDashboardLayout>
        </main>
    )
}

interface PropsAppReferenceListItem {
    project: IProject
}

const AppReferenceListItem = ({ project }: PropsAppReferenceListItem) => {
    return (
        <li className="relative duration-500 transition border border-gray-100 bg-white text-gray-600 grid grid-cols-3 tablet:grid-cols-7 gap-4 rounded-md overflow-hidden cursor-default hover:shadow-lg">
            <section className="flex items-center h-full col-span-1 tablet:col-span-2">
                <img
                    className="object-cover h-40  w-full"
                    src={project.thumbnail}
                    alt="Rua 24 h"
                />
            </section>

            <section className="col-span-1 tablet:col-span-3 py-4 flex flex-col">
                <span className="text-tiny font-poppins font-normal">
                    REFERÊNCIA
                </span>
                <h1 className="text-lg font-poppins font-bold">
                    {project.title}
                </h1>
                <h2 className="text-supersmall font-poppins">
                    {project.location}
                </h2>
                <ul className="py-2 overflow-y-scroll flex gap-2 flex-wrap h-16">
                    {project?.features?.map((feature, index) => (
                        <FeatureItem key={index} feature={feature} />
                    ))}
                </ul>
            </section>

            <section className="col-span-1 tablet:col-span-2 py-4 flex flex-col border-l bg-gray-50 border-gray-100 pl-4">
                <span className="text-tiny font-poppins font-normal">
                    EXPERIÊNCIA
                </span>
                <h1 className="text-lg font-poppins font-bold">
                    {project.experience ? project.experience : 'Não Avaliado'}
                </h1>
                <ul className="py-2 overflow-y-scroll flex gap-2 flex-wrap mr-4">
                    {project.features.length
                        ? project.feelings.map((feeling, index) => (
                              <FeatureItem key={index} feature={feeling} />
                          ))
                        : null}
                </ul>
            </section>

            <section className="absolute right-4 bottom-4 flex justify-center items-end h-6">
                <button className="font-poppins bg-red-500 h-full text-white px-2 rounded-xl text-tiny hover:bg-red-900">
                    Remover
                </button>
            </section>
        </li>
    )
}

const FeatureItem = ({ feature }: { feature: string }) => {
    return (
        <article className="font-poppins bg-gray-200 rounded-md flex items-center h-5">
            <span className="text-tiny p-1">{feature}</span>
        </article>
    )
}
