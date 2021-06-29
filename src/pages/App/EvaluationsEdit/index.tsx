import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'
import { FieldSet, Form, Legend } from '../../../components/Form/style'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { FormRadioSection } from '../../../components/Form/FormRadio/FormRadioSection'
import { options } from '../../../model/formRadio'
import { DefaultButton } from '../../../components/Button/style'
import { useState } from 'react'

const { emotions } = options

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
        isActive: false,
        isFirst: false
    },
    {
        text: 'Avaliar',
        href: '/app/evaluations/edit',
        isActive: true,
        isFirst: false
    }
]

export const EvaluationsEdit = () => {
    const defaultProjectImage = '/pictures/default-placeholder.png'
    const [selectedOptions, setSelectedOptions] = useState({ emotions: 0 })

    const handleOptionChange = (option: { type: string; value: number }) => {
        setSelectedOptions({ ...selectedOptions, [option.type]: option.value })
    }

    console.log('selectedOption', selectedOptions)

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
                        src={defaultProjectImage}
                        alt=""
                        className="h-80 w-full object-cover rounded"
                    />
                </section>

                <Form>
                    <FieldSet>
                        <Legend>Avalie a Experiência do Usuário</Legend>
                        <FormRadioSection
                            option={emotions}
                            selectedHeight={selectedOptions.emotions}
                            onClick={handleOptionChange}
                        />
                    </FieldSet>
                </Form>
            </PageMainWrapper>

            <PageFooterWrapper>
                <DefaultButton disabled={false}>Salvar Avaliação</DefaultButton>
            </PageFooterWrapper>
        </PageAppWrapper>
    )
}
