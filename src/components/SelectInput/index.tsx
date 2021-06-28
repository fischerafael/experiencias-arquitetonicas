interface IOption {
    text: string
    value: string
}

interface SelectInputProps {
    label: string
    value: string
    onChange: (e: any) => void
    options: IOption[]
}

export const SelectInput = ({
    label,
    value,
    onChange,
    options
}: SelectInputProps) => {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-xm font-medium">{label}</span>
            <select
                className="h-10 px-4 border border-gray-200 rounded bg-gray-50"
                value={value}
                onChange={onChange}
            >
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </label>
    )
}
