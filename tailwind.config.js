const plugin = require("tailwindcss/plugin");

module.exports = {
    purge: [
        // Use *.tsx if using TypeScript
        './pages/**/*.js',
        './components/**/*.js'
    ],
    theme: {},
    variants: {},
    plugins: [
        require('@tailwindcss/line-clamp')
    ]
}
