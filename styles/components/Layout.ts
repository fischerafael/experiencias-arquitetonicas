import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export const PageHome = styled.main`
    background-image: url('/pictures/hero-background.png');
    object-fit: cover;
`

export const PageHomeWrapper = tw(PageHome)`
    relative 
    text-gray-700 
    h-screen 
    w-full 
    flex 
    flex-col 
    items-center 
    font-poppins 
    text-xs
`

export const PageHomeContent = tw.section`
    h-full 
    max-w-sm 
    w-full 
    px-6 
    flex 
    flex-col 
    items-center
    
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

export const PageMainWrapper = tw.main`
    bg-white    
    px-6 
    overflow-y-scroll 
    max-w-sm w-full     
    flex 
    flex-col 
    gap-4
    h-main
`

export const PageFullMainWrapper = tw.main`
    bg-white    
    px-6 
    overflow-y-scroll 
    max-w-sm w-full     
    flex 
    flex-col 
    gap-4
    h-full
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
    gap-4
    items-center 
    justify-center 
    p-6
`
