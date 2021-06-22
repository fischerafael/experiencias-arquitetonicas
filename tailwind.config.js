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
                primary: '#3485FF'
            },
            height: {
                nav: '15vh',
                hero: '85vh'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}