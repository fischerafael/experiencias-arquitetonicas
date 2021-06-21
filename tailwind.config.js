module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
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
                nav: '15vh'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
