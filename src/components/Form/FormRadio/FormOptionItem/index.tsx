import tw from 'tailwind-styled-components'

interface OptionProps {
    text: string
    description: string
    isChecked?: boolean
    onClick?: (e: any) => void
}

export const FormOptionItem = ({
    text,
    description,
    isChecked,
    onClick
}: OptionProps) => {
    return (
        <>
            {isChecked && (
                <SelectedOptionItem onClick={onClick}>
                    <p className="text-2xl text-center font-medium text-blue-500">
                        {text}
                    </p>
                    <p className="text-tiny text-center text-blue-500">
                        {description}
                    </p>
                </SelectedOptionItem>
            )}

            {!isChecked && (
                <OptionItem onClick={onClick}>
                    <p className="text-2xl text-center font-medium text-gray-400 group-hover:text-blue-500">
                        {text}
                    </p>
                    <p className="text-tiny text-center group-hover:text-blue-500">
                        {description}
                    </p>
                </OptionItem>
            )}
        </>
    )
}

const OptionItem = tw.li`
    group 
    hover:border-blue-500 hover:shadow-lg bg-gray-50 
    border p-2 cursor-pointer border-gray-200 rounded 
    flex flex-col 
    items-center
`

const SelectedOptionItem = tw.li`
    bg-blue-50
    border p-2 cursor-pointer border-blue-500 rounded 
    flex flex-col 
    items-center
`
