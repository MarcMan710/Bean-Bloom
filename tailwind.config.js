/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    theme: {
        extend: {
            colors: {
                'brown-bean': {
                    50: '#F5F0EB',
                    100: '#E7DCDC',
                    200: '#D4C6BC',
                    300: '#C0AF9E',
                    400: '#AA9881',
                    500: '#958164',
                    600: '#7F6A48',
                    700: '#6A532C',
                    800: '#543C10',
                    900: '#3F2500',
                    950: '#2A1800',
                },
                'beige-bloom': {
                    50: '#FEFAF6',
                    100: '#FDF7F0',
                    200: '#FCEEDE',
                    300: '#FAE5CB',
                    400: '#F9DDBC',
                    500: '#F7D4A9',
                    600: '#EAD399',
                    700: '#DCCF8A',
                    800: '#CFCC7B',
                    900: '#C2C96C',
                    950: '#B5C65D',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                handwriting: ['"Dancing Script"', 'cursive'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}; 