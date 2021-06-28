interface CustomInputProps {
    value: any
    onChange: (e: any) => void
    label: string
    type: 'text' | 'email' | 'password' | 'number'
    placeholder?: string
}

export const CustomInput = ({
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
