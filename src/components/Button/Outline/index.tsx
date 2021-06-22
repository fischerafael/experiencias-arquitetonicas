export const OutlineButton = ({ children }) => {
    return (
        <button className="border-2 border-primary px-6 py-3 rounded-md outline-none w-full text-primary font-bold transition duration-500 hover:bg-primary hover:text-white">
            {children}
        </button>
    )
}
