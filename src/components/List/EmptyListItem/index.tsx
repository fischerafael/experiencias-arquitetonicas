export const EmptyListItem = ({ label }) => {
    return (
        <li className="border-2 border-dashed p-4 border-gray-200 rounded-md cursor-default flex items-center justify-center">
            <h1 className="font-poppins text-sm text-gray-200">{label}</h1>
        </li>
    )
}
