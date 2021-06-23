export const AppDashboardCard = ({ index, title, description }) => {
    return (
        <li className="border border-gray-200  hover:shadow-lg bg-white p-6 pt-12 shadow-sm rounded-md flex flex-col gap-4 cursor-pointer">
            <h1 className="text-8xl font-bold text-blue-500">{index}</h1>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
        </li>
    )
}
