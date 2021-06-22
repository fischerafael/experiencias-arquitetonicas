import { LayoutPageHome } from '../../../styles/components/Layout'

import { HomeNavBar } from './components/HomeNavBar'
import { HeroSection } from './components/HeroSection'

export const HomePage = () => {
    return (
        <LayoutPageHome>
            <HomeNavBar transparent />
            <HeroSection />
        </LayoutPageHome>
    )
}
