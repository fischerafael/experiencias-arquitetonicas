import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export const LayoutPage = styled.main`
    min-height: 100vh;
    background: #fafafa;
`
export const LayoutPageHome = styled(LayoutPage)`
    background-image: url('/pictures/hero-background.png');
    object-fit: cover;
`
export const PageAppWrapper = tw.section`
    relative 
    bg-gray-50 
    text-gray-700 
    h-screen 
    w-full 
    flex 
    flex-col 
    items-center 
    font-poppins 
    text-xs
`
export const PageHeaderWrapper = tw.header`
    h-nav 
    bg-white 
    max-w-sm 
    w-full 
    px-6 
    flex 
    flex-col 
    items-center
`
