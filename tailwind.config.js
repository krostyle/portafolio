module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {


            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}