import tw from 'tailwind-styled-components'

interface ButtonProps {
    disabled?: boolean
}

export const DefaultButton = tw.button<ButtonProps>`    
    font-bold 
    text-white 
    text-xs 
    py-4 
    px-8 
    rounded 
    w-full
    transition
    duration-500
    hover:bg-gray-200
    ${({ disabled }) => (disabled ? 'bg-gray-200' : 'bg-blue-500')}
    ${({ disabled }) => disabled && 'cursor-not-allowed '}
`

export const GhostButton = tw.button`
    font-bold 
    text-blue-500 
    text-xs 
    py-4 
    px-8 
    rounded 
    w-full
    transition
    duration-500
    hover:bg-gray-200
    ${({ disabled }) => (disabled ? 'bg-gray-200' : 'bg-transparent')}
    ${({ disabled }) => disabled && 'cursor-not-allowed '}
`
