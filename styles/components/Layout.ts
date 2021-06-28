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

interface PageMainWrapperProps {
    fullScreen?: boolean
}

export const PageMainWrapper = tw.main<PageMainWrapperProps>`
    bg-white    
    px-6 
    overflow-y-scroll 
    max-w-sm w-full     
    flex 
    flex-col 
    gap-4
    ${({ fullScreen }) => (fullScreen === true ? 'h-full' : 'h-main')}
`

export const PageFooterWrapper = tw.footer`
    absolute 
    bg-white 
    bottom-0 
    h-nav 
    max-w-sm 
    w-full 
    px-6 
    flex 
    flex-col 
    items-center 
    justify-center 
    p-6
`
