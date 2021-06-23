module.exports = {
    node: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins']
            },
            colors: {
                primary: '#3485FF',
                dark: '#333333'
            },
            height: {
                nav: '15vh',
                hero: '85vh'
            },
            fontSize: {
                tiny: '0.6rem',
                supersmall: '0.75rem',
                small: '0.9rem'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
