import styled from 'styled-components'
import { NavBar } from '../../components/NavBar'

export const HomePage = () => {
    return (
        <main className="bg-gray-500 min-h-screen">
            <NavBar />
        </main>
    )
}

const HomePageBackground = styled.main`
    min-height: 100vh;
    background: #e0c7c7;
    background-image: url('/pictures/hero-background.png');
    object-fit: cover;
`
