import { useEffect, useState } from 'react'
import Router from 'next/router'

import { useAuth } from '../../../hooks/useAuth'
import { fetch } from '../../../services/api'

import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'

import { DefaultButton } from '../../../components/Button/style'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { FormEdit } from '../../../components/FormEdit'
import { getPrediction } from '../../../brainjs'

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
    const { credentials } = useAuth()

    const defaultProjectImage = '/pictures/default-placeholder.png'
    const project_type = 'design'

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

    const [selectedOptions, setSelectedOptions] = useState({
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
        weather: 0
    })

    const handleOptionChange = (option: { type: string; value: number }) => {
        setSelectedOptions({ ...selectedOptions, [option.type]: option.value })
    }

    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(() => {
        if (
            textInputs.project_location != '' &&
            textInputs.project_name != '' &&
            textInputs.project_thumbnail != ''
        ) {
            setButtonDisabled(false)
            return
        }
        setButtonDisabled(true)
    }, [textInputs])

    const formData = {
        ...textInputs,
        ...selectedOptions,
        project_type,
        architect: credentials.user_id
    }

    console.log('formData', formData)

    const predictedValue = getPrediction('rs')

    console.log('predictedValue', predictedValue)

    const handleAddProject = async (e: any) => {
        e.preventDefault()
        try {
            const { response } = await fetch.createReference(
                formData,
                credentials.jwt
            )

            Router.push('/app/references')

            console.log('success handleAddReference', response)
            alert('Proposta criada com sucesso!')
        } catch (error) {
            console.log('handleAddReferenceError', error)

            alert('Erro ao criar proposta')
        }
    }

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
                    onTextChange={handleTextInputChange}
                    selectedOptions={selectedOptions}
                    onOptionChange={handleOptionChange}
                />
            </PageMainWrapper>

            <PageFooterWrapper>
                <DefaultButton
                    onClick={handleAddProject}
                    disabled={buttonDisabled}
                >
                    Salvar Referência
                </DefaultButton>
            </PageFooterWrapper>
        </PageAppWrapper>
    )
}
