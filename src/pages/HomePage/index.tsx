import styled from 'styled-components'
import { NavBar } from '../../components/NavBar'
import { HeroSection } from './components/HeroSection'

export const HomePage = () => {
    return (
        <HomePageBackground>
            <NavBar transparent />
            <HeroSection />
        </HomePageBackground>
    )
}

const HomePageBackground = styled.main`
    min-height: 100vh;
    background: #e0c7c7;
    background-image: url('/pictures/hero-background.png');
    object-fit: cover;
`
