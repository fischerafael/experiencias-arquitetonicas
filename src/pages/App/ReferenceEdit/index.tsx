import { useState } from 'react'
import { FieldSet, Form, Legend } from '../../../components/Form/style'
import { FormRadioSection } from '../../../components/Form/FormRadio/FormRadioSection'

import { options } from '../../../model/formRadio'
import { DefaultButton } from '../../../components/Button/style'
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

export const ReferenceEdit = () => {
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

    const formData = { project_type, ...textInputs, ...selectedOptions }

    console.log('formData', formData)

    return (
        <section className="relative bg-gray-50 text-gray-700 h-screen w-full flex flex-col items-center font-poppins text-xs">
            <header className="h-nav bg-white max-w-sm w-full px-6 flex flex-col items-center">
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>

                <section className="h-1/3 w-full flex justify-between items-center text-gray-400">
                    <nav className="flex gap-1">
                        <BreadCrumbLink isFirst text="Início" />
                        <BreadCrumbLink text="Referências" />
                        <BreadCrumbLink isActive text="Editar" />
                    </nav>

                    <BreadCrumbLink isFirst text="Voltar" />
                </section>
            </header>

            <main className="bg-white px-6 overflow-y-scroll max-w-sm w-full h-main flex flex-col gap-4">
                <section className="relative">
                    <img
                        src="https://images.adsttc.com/media/images/5e57/e3a1/6ee6/7e67/1c00/0032/newsletter/washington-oliveira-wG0fPnkpms0-unsplash.jpg?1582818201"
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
            </main>

            <footer className="absolute bg-white bottom-0 h-nav max-w-sm w-full px-6 flex flex-col items-center justify-center p-6">
                <DefaultButton disabled>Salvar Referência</DefaultButton>
            </footer>
        </section>
    )
}

interface CustomInputProps {
    value: any
    onChange: (e: any) => void
    label: string
    type: 'text' | 'email' | 'password' | 'number'
    placeholder?: string
}

const CustomInput = ({
    label,
    type,
    placeholder,
    value,
    onChange
}: CustomInputProps) => {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-xm font-medium">{label}</span>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="h-10 px-4 border border-gray-200 rounded bg-gray-50"
            />
        </label>
    )
}

interface BreadCrumbLinkProps {
    text: string
    isFirst?: boolean
    isActive?: boolean
}

const BreadCrumbLink = ({ text, isFirst, isActive }: BreadCrumbLinkProps) => {
    return (
        <div className="flex gap-1 font-medium">
            {!isFirst && <span>&gt;</span>}
            {!isActive && (
                <span className="cursor-pointer hover:text-gray-700">
                    {text}
                </span>
            )}
            {isActive && (
                <span className="cursor-pointer text-gray-700">{text}</span>
            )}
        </div>
    )
}
