import { useState } from 'react'
import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { FormEdit } from '../../../components/FormEdit'

const breadCrumbLinks = [
    {
        text: 'Início',
        href: '/app',
        isActive: false,
        isFirst: true
    },
    {
        text: 'Referências',
        href: '/app/projects',
        isActive: false,
        isFirst: false
    },
    {
        text: 'Novo',
        href: '/app/projects/edit',
        isActive: true,
        isFirst: false
    }
]

export const ProjectEdit = () => {
    const defaultProjectImage = '/pictures/default-placeholder.png'

    const [textInputs, setTextInputs] = useState({
        project_name: '',
        project_location: '',
        project_thumbnail: ''
    })

    const handleTextInputChange = (e: any, key: string) => {
        setTextInputs({
            ...textInputs,
            [key]: e.target.value
        })
    }

    console.log('textInputs', textInputs)

    return (
        <PageAppWrapper>
            <PageHeaderWrapper>
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>

                <BreadCrumb links={breadCrumbLinks} />
            </PageHeaderWrapper>

            <PageMainWrapper>
                <section className="relative">
                    <img
                        src={
                            textInputs.project_thumbnail
                                ? textInputs.project_thumbnail
                                : defaultProjectImage
                        }
                        alt=""
                        className="h-80 w-full object-cover rounded"
                    />
                </section>

                <FormEdit
                    textInputs={textInputs}
                    onChange={handleTextInputChange}
                />
            </PageMainWrapper>
        </PageAppWrapper>
    )
}
