export const HashtagList = ({ feature }: { feature: string }) => {
    return (
        <li className="flex items-center border border-gray-200 text-tiny bg-gray-50 h-6 px-2 rounded-xl">
            {feature}
        </li>
    )
}
