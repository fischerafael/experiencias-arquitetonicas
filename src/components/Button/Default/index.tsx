export const DefaultButton = ({ children }) => {
    return (
        <button className="bg-primary px-6 py-3 rounded-md text-white font-bold transition duration-500 hover:bg-blue-700">
            {children}
        </button>
    )
}
