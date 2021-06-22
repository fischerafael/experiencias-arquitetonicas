interface Props {
    label: string
    placeholder: string
    type?: string
}

export const InputText = ({ label, placeholder, type }: Props) => {
    return (
        <label className="flex flex-col w-full">
            <span className="text-xs pb-1">{label}</span>
            <input
                type={type ? type : 'text'}
                placeholder={placeholder}
                className="px-3 h-12 rounded-md border text-xs focus:outline-none focus:border-primary"
            />
        </label>
    )
}
