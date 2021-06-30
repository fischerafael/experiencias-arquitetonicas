import tw from 'tailwind-styled-components'

export const EmptyStateItem = ({ title, message }) => {
    return (
        <ListWrapper>
            <h1 className="font-bold text-center text-base">
                Você ainda não cadastrou nenhuma {title}
            </h1>
            <p className="text-center text-xs">{message}</p>
        </ListWrapper>
    )
}

const ListWrapper = tw.li`
    cursor-default font-poppins flex flex-col gap-4 border-b p-16
`
const ListHeader = tw.header`grid grid-cols-4 gap-4`
const ListFooter = tw.footer`grid grid-cols-4 gap-4`
