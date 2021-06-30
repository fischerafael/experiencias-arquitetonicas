import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../styles/globals.css'

import { AuthProvider } from '../src/hooks/useAuth'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
    colors: {
        primary: '#0070f3'
    }
}

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Ux Arch</title>
                <meta property="og:title" content="Ux Arch" key="title" />
                <link rel="shortcut icon" href="/icons/logo-black.svg" />
            </Head>
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </AuthProvider>
            </ThemeProvider>
        </>
    )
}
