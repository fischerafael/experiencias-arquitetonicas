import { AppNavBar } from '../../components/AppNavBar'

export const AppPage = () => {
    return (
        <main className="bg-gray-50 h-screen flex flex-col justify-start ">
            <AppNavBar />
            <section className="p-4 w-full h-full flex flex-col align-middle">
                <span>oi</span>
            </section>
        </main>
    )
}
