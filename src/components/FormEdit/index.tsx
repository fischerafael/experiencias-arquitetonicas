import { FieldSet, Form, Legend } from '../../components/Form/style'
import { CustomInput } from '../../components/Input'
import { FormRadioSection } from '../../components/Form/FormRadio/FormRadioSection'
import { options } from '../../model/formRadio'

interface IFormEditProps {
    textInputs: ITextInputs
    onTextChange: (e: any, key: string) => void
    selectedOptions: ISelectedOptions
    onOptionChange: (option: { type: string; value: number }) => void
}

export const FormEdit = ({
    textInputs,
    onTextChange,
    selectedOptions,
    onOptionChange
}: IFormEditProps) => {
    return (
        <Form>
            <FieldSet>
                <Legend>Dados Gerais</Legend>

                <CustomInput
                    type="text"
                    label="URL da Imagem"
                    placeholder="ex: www.google.drive.com/meu-projeto.png"
                    value={textInputs.project_thumbnail}
                    onChange={(e) => onTextChange(e, 'project_thumbnail')}
                />
                <CustomInput
                    type="text"
                    label="Referência"
                    placeholder="ex: Museu de Arte Contemporânea"
                    value={textInputs.project_name}
                    onChange={(e) => onTextChange(e, 'project_name')}
                />
                <CustomInput
                    type="text"
                    label="Localização"
                    placeholder="ex: Niterói, Brasil"
                    value={textInputs.project_location}
                    onChange={(e) => onTextChange(e, 'project_location')}
                />
            </FieldSet>

            <FieldSet>
                <Legend>Características Físicas</Legend>

                <FormRadioSection
                    option={options.height}
                    selectedHeight={selectedOptions.height}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.size}
                    selectedHeight={selectedOptions.size}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.elements}
                    selectedHeight={selectedOptions.elements}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.shape}
                    selectedHeight={selectedOptions.shape}
                    onClick={onOptionChange}
                />
            </FieldSet>

            <FieldSet>
                <Legend>Materiais</Legend>
                <FormRadioSection
                    option={options.materials}
                    selectedHeight={selectedOptions.materials}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.texture}
                    selectedHeight={selectedOptions.texture}
                    onClick={onOptionChange}
                />
            </FieldSet>

            <FieldSet>
                <Legend>Tons e Cores</Legend>
                <FormRadioSection
                    option={options.tone}
                    selectedHeight={selectedOptions.tone}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.primary_color}
                    selectedHeight={selectedOptions.primary_color}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.secondary_color}
                    selectedHeight={selectedOptions.secondary_color}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.tertiary_color}
                    selectedHeight={selectedOptions.tertiary_color}
                    onClick={onOptionChange}
                />
            </FieldSet>

            <FieldSet>
                <Legend>Aberturas e Iluminação</Legend>
                <FormRadioSection
                    option={options.opennings}
                    selectedHeight={selectedOptions.opennings}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.light}
                    selectedHeight={selectedOptions.light}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.contrast}
                    selectedHeight={selectedOptions.contrast}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.opacity}
                    selectedHeight={selectedOptions.opacity}
                    onClick={onOptionChange}
                />
            </FieldSet>

            <FieldSet>
                <Legend>Pessoas</Legend>
                <FormRadioSection
                    option={options.people}
                    selectedHeight={selectedOptions.people}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.movement}
                    selectedHeight={selectedOptions.movement}
                    onClick={onOptionChange}
                />
            </FieldSet>
            <FieldSet>
                <Legend>Tempo</Legend>
                <FormRadioSection
                    option={options.time}
                    selectedHeight={selectedOptions.time}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.weather}
                    selectedHeight={selectedOptions.weather}
                    onClick={onOptionChange}
                />
            </FieldSet>
            <FieldSet>
                <Legend>Contexto</Legend>
                <FormRadioSection
                    option={options.context}
                    selectedHeight={selectedOptions.context}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.context_interest}
                    selectedHeight={selectedOptions.context_interest}
                    onClick={onOptionChange}
                />
                <FormRadioSection
                    option={options.landmark}
                    selectedHeight={selectedOptions.landmark}
                    onClick={onOptionChange}
                />
            </FieldSet>
            <hr />
        </Form>
    )
}

interface ITextInputs {
    project_name: string
    project_location: string
    project_thumbnail: string
}

interface ISelectedOptions {
    height: number
    size: number
    elements: number
    shape: number
    materials: number
    texture: number
    tone: number
    primary_color: number
    secondary_color: number
    tertiary_color: number
    opennings: number
    light: number
    contrast: number
    opacity: number
    movement: number
    people: number
    context: number
    landmark: number
    context_interest: number
    time: number
    weather: number
}
