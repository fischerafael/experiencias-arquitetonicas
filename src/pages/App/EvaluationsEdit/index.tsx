import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'
import Router from 'next/router'
import { FieldSet, Form, Legend } from '../../../components/Form/style'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { FormRadioSection } from '../../../components/Form/FormRadio/FormRadioSection'
import { options } from '../../../model/formRadio'
import { DefaultButton } from '../../../components/Button/style'
import { useEffect, useState } from 'react'

import { fetch } from '../../../services/api'
import { useAuth } from '../../../hooks/useAuth'

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

interface EvaluationsEditProps {
    id: string
    architect_id: string
    client_evaluation: number
    project_location: string
    project_name: string
    project_thumbnail: string
}

export const EvaluationsEdit = ({
    project
}: {
    project: EvaluationsEditProps
}) => {
    console.log('project', project)

    const { credentials } = useAuth()
    // const defaultProjectImage = '/pictures/default-placeholder.png'
    const [selectedOptions, setSelectedOptions] = useState({ emotions: 0 })

    const handleOptionChange = (option: { type: string; value: number }) => {
        setSelectedOptions({ ...selectedOptions, [option.type]: option.value })
    }

    console.log('selectedOption', selectedOptions)

    const handleSaveEvaluation = async (e: any) => {
        e.preventDefault()
        try {
            const { response } = await fetch.updatedReference(
                project.id,
                selectedOptions.emotions,
                credentials.jwt
            )
            console.log('handleSaveEvaluation', response)
            Router.push('/app/evaluations')
            alert('Projeto avaliado com sucesso!')
        } catch (error) {
            console.log('handleSaveEvaluationError', error)
        }
    }

    useEffect(() => {
        ;(async () => {
            const { response } = await fetch.getReferenceData(project.id)
            console.log('evaluation', response)
            setSelectedOptions({ emotions: response.client_evaluation })
        })()
    }, [])

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
                        src={project.project_thumbnail}
                        alt=""
                        className="h-80 w-full object-cover rounded"
                    />
                </section>

                <Form>
                    <FieldSet>
                        <Legend>{project.project_name}</Legend>

                        <FormRadioSection
                            option={emotions}
                            selectedHeight={selectedOptions.emotions}
                            onClick={handleOptionChange}
                        />
                    </FieldSet>
                </Form>
            </PageMainWrapper>

            <PageFooterWrapper>
                <DefaultButton onClick={handleSaveEvaluation} disabled={false}>
                    Salvar Avaliação
                </DefaultButton>
            </PageFooterWrapper>
        </PageAppWrapper>
    )
}
