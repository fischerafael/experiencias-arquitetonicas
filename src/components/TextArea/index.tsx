interface CustomTextAreaProps {
    value: any
    onChange: (e: any) => void
    label: string

    placeholder?: string
}

export const CustomTextArea = ({
    label,
    placeholder,
    value,
    onChange
}: CustomTextAreaProps) => {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-xm font-medium">{label}</span>
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="h-24 px-4 pt-4 border border-gray-200 rounded bg-gray-50 max-h-36 "
            />
        </label>
    )
}
