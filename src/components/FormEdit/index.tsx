import { FieldSet, Form, Legend } from '../../components/Form/style'
import { CustomInput } from '../../components/Input'
import { FormRadioSection } from '../../components/Form/FormRadio/FormRadioSection'
import { options } from '../../model/formRadio'

interface IFormEditProps {
    textInputs: ITextInputs
    onChange: (e: any, key: string) => void
}

export const FormEdit = ({ textInputs, onChange }: IFormEditProps) => {
    return (
        <Form>
            <FieldSet>
                <Legend>Dados Gerais</Legend>

                <CustomInput
                    type="text"
                    label="URL da Imagem"
                    placeholder="ex: www.google.com/mac.png"
                    value={textInputs.project_thumbnail}
                    onChange={(e) => onChange(e, 'project_thumbnail')}
                />
                <CustomInput
                    type="text"
                    label="Referência"
                    placeholder="ex: Museu de Arte Contemporânea"
                    value={textInputs.project_name}
                    onChange={(e) => onChange(e, 'project_name')}
                />
                <CustomInput
                    type="text"
                    label="Localização"
                    placeholder="ex: Niterói, Brasil"
                    value={textInputs.project_location}
                    onChange={(e) => onChange(e, 'project_location')}
                />
            </FieldSet>

            {/* <FieldSet>
                <Legend>Características Físicas</Legend>

                <FormRadioSection
                    option={options.height}
                    selectedHeight={selectedOptions.height}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.size}
                    selectedHeight={selectedOptions.size}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.elements}
                    selectedHeight={selectedOptions.elements}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.shape}
                    selectedHeight={selectedOptions.shape}
                    onClick={handleOptionChange}
                />
            </FieldSet>

            <FieldSet>
                <Legend>Materiais</Legend>
                <FormRadioSection
                    option={options.materials}
                    selectedHeight={selectedOptions.materials}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.texture}
                    selectedHeight={selectedOptions.texture}
                    onClick={handleOptionChange}
                />
            </FieldSet>

            <FieldSet>
                <Legend>Tons e Cores</Legend>
                <FormRadioSection
                    option={options.tone}
                    selectedHeight={selectedOptions.tone}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.primary_color}
                    selectedHeight={selectedOptions.primary_color}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.secondary_color}
                    selectedHeight={selectedOptions.secondary_color}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.tertiary_color}
                    selectedHeight={selectedOptions.tertiary_color}
                    onClick={handleOptionChange}
                />
            </FieldSet>

            <FieldSet>
                <Legend>Aberturas e Iluminação</Legend>
                <FormRadioSection
                    option={options.opennings}
                    selectedHeight={selectedOptions.opennings}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.light}
                    selectedHeight={selectedOptions.light}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.contrast}
                    selectedHeight={selectedOptions.contrast}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.opacity}
                    selectedHeight={selectedOptions.opacity}
                    onClick={handleOptionChange}
                />
            </FieldSet>

            <FieldSet>
                <Legend>Pessoas</Legend>
                <FormRadioSection
                    option={options.people}
                    selectedHeight={selectedOptions.people}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.movement}
                    selectedHeight={selectedOptions.movement}
                    onClick={handleOptionChange}
                />
            </FieldSet>
            <FieldSet>
                <Legend>Tempo</Legend>
                <FormRadioSection
                    option={options.time}
                    selectedHeight={selectedOptions.time}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.weather}
                    selectedHeight={selectedOptions.weather}
                    onClick={handleOptionChange}
                />
            </FieldSet>
            <FieldSet>
                <Legend>Contexto</Legend>
                <FormRadioSection
                    option={options.context}
                    selectedHeight={selectedOptions.context}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.context_interest}
                    selectedHeight={selectedOptions.context_interest}
                    onClick={handleOptionChange}
                />
                <FormRadioSection
                    option={options.landmark}
                    selectedHeight={selectedOptions.landmark}
                    onClick={handleOptionChange}
                />
            </FieldSet>
            <hr /> */}
        </Form>
    )
}

interface ITextInputs {
    project_name: string
    project_location: string
    project_thumbnail: string
}
