import { IOption } from '../../../../model/formRadio'
import {
    FormGridOptions,
    FormSection,
    FormSectionTitle,
    LegendShortDescription
} from '../../style'

import { FormOptionItem } from '../FormOptionItem'

interface Props {
    option: IOption
    selectedHeight: number
    onClick: (e: any) => void
}

export const FormRadioSection = ({
    option,
    selectedHeight,
    onClick
}: Props) => {
    return (
        <FormSection>
            <FormSectionTitle>{option.title}</FormSectionTitle>
            <LegendShortDescription>
                {option.description}
            </LegendShortDescription>
            <FormGridOptions>
                {option.options.map((item) => (
                    <FormOptionItem
                        key={item.value}
                        isChecked={selectedHeight === item.value && true}
                        text={item.text}
                        description={item.description}
                        onClick={() => onClick(item)}
                    />
                ))}
            </FormGridOptions>
        </FormSection>
    )
}
