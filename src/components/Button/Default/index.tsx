export const DefaultButton = ({ children }) => {
    return (
        <button className="bg-primary px-6 py-3 rounded-md outline-none w-full text-white font-bold transition duration-500 hover:bg-blue-700">
            {children}
        </button>
    )
}
