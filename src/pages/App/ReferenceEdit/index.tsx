import { useEffect, useState } from 'react'
import Router from 'next/router'
import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../../styles/components/Layout'
import { FieldSet, Form, Legend } from '../../../components/Form/style'
import { FormRadioSection } from '../../../components/Form/FormRadio/FormRadioSection'

import { options } from '../../../model/formRadio'
import { DefaultButton } from '../../../components/Button/style'
import { BreadCrumb } from '../../../components/BreadCrumb'
import { CustomInput } from '../../../components/Input'
import { fetch } from '../../../services/api'
import { useAuth } from '../../../hooks/useAuth'
const {
    height,
    size,
    elements,
    shape,
    materials,
    texture,
    tone,
    primary_color,
    secondary_color,
    tertiary_color,
    opennings,
    light,
    contrast,
    opacity,
    movement,
    people,
    context,
    landmark,
    context_interest,
    time,
    weather
} = options

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
        text: 'Novo',
        href: '/app/references/edit',
        isActive: true,
        isFirst: false
    }
]

export const ReferenceEdit = () => {
    const { credentials } = useAuth()
    const defaultProjectImage = '/pictures/default-placeholder.png'
    const project_type = 'reference'
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

    const formData = {
        ...textInputs,
        ...selectedOptions,
        project_type,
        architect: credentials.user_id
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
    }, [formData])

    console.log('formData', formData)

    const handleAddReference = async (e: any) => {
        e.preventDefault()
        try {
            const { response } = await fetch.createReference(
                formData,
                credentials.jwt
            )
            Router.push('/app/references')
            console.log('success handleAddReference', response)
            alert('Referência criada com sucesso!')
        } catch (error) {
            console.log('handleAddReferenceError', error)
            alert('Erro ao criar referência')
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

                <Form>
                    <FieldSet>
                        <Legend>Dados Gerais</Legend>

                        <CustomInput
                            type="text"
                            label="URL da Imagem"
                            placeholder="ex: www.google.com/mac.png"
                            value={textInputs.project_thumbnail}
                            onChange={(e) =>
                                handleTextInputChange(e, 'project_thumbnail')
                            }
                        />
                        <CustomInput
                            type="text"
                            label="Referência"
                            placeholder="ex: Museu de Arte Contemporânea"
                            value={textInputs.project_name}
                            onChange={(e) =>
                                handleTextInputChange(e, 'project_name')
                            }
                        />
                        <CustomInput
                            type="text"
                            label="Localização"
                            placeholder="ex: Niterói, Brasil"
                            value={textInputs.project_location}
                            onChange={(e) =>
                                handleTextInputChange(e, 'project_location')
                            }
                        />
                    </FieldSet>

                    <FieldSet>
                        <Legend>Características Físicas</Legend>

                        <FormRadioSection
                            option={height}
                            selectedHeight={selectedOptions.height}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={size}
                            selectedHeight={selectedOptions.size}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={elements}
                            selectedHeight={selectedOptions.elements}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={shape}
                            selectedHeight={selectedOptions.shape}
                            onClick={handleOptionChange}
                        />
                    </FieldSet>

                    <FieldSet>
                        <Legend>Materiais</Legend>
                        <FormRadioSection
                            option={materials}
                            selectedHeight={selectedOptions.materials}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={texture}
                            selectedHeight={selectedOptions.texture}
                            onClick={handleOptionChange}
                        />
                    </FieldSet>

                    <FieldSet>
                        <Legend>Tons e Cores</Legend>
                        <FormRadioSection
                            option={tone}
                            selectedHeight={selectedOptions.tone}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={primary_color}
                            selectedHeight={selectedOptions.primary_color}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={secondary_color}
                            selectedHeight={selectedOptions.secondary_color}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={tertiary_color}
                            selectedHeight={selectedOptions.tertiary_color}
                            onClick={handleOptionChange}
                        />
                    </FieldSet>

                    <FieldSet>
                        <Legend>Aberturas e Iluminação</Legend>
                        <FormRadioSection
                            option={opennings}
                            selectedHeight={selectedOptions.opennings}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={light}
                            selectedHeight={selectedOptions.light}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={contrast}
                            selectedHeight={selectedOptions.contrast}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={opacity}
                            selectedHeight={selectedOptions.opacity}
                            onClick={handleOptionChange}
                        />
                    </FieldSet>

                    <FieldSet>
                        <Legend>Pessoas</Legend>
                        <FormRadioSection
                            option={people}
                            selectedHeight={selectedOptions.people}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={movement}
                            selectedHeight={selectedOptions.movement}
                            onClick={handleOptionChange}
                        />
                    </FieldSet>
                    <FieldSet>
                        <Legend>Tempo</Legend>
                        <FormRadioSection
                            option={time}
                            selectedHeight={selectedOptions.time}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={weather}
                            selectedHeight={selectedOptions.weather}
                            onClick={handleOptionChange}
                        />
                    </FieldSet>
                    <FieldSet>
                        <Legend>Contexto</Legend>
                        <FormRadioSection
                            option={context}
                            selectedHeight={selectedOptions.context}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={context_interest}
                            selectedHeight={selectedOptions.context_interest}
                            onClick={handleOptionChange}
                        />
                        <FormRadioSection
                            option={landmark}
                            selectedHeight={selectedOptions.landmark}
                            onClick={handleOptionChange}
                        />
                    </FieldSet>
                    <hr />
                </Form>
            </PageMainWrapper>

            <PageFooterWrapper>
                <DefaultButton
                    onClick={handleAddReference}
                    disabled={buttonDisabled}
                >
                    Salvar Referência
                </DefaultButton>
            </PageFooterWrapper>
        </PageAppWrapper>
    )
}
