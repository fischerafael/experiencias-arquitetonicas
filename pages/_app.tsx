import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../styles/globals.css'

import { AuthProvider } from '../src/hooks/useAuth'

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
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </AuthProvider>
            </ThemeProvider>
        </>
    )
}
