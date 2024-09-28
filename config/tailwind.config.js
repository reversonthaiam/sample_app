module.exports = {
  content: [
    "./public/**/*.html",             // Monitorar todos os arquivos HTML na pasta public
    "./app/helpers/**/*.rb",           // Arquivos Ruby nos helpers
    "./app/javascript/**/*.js",        // Arquivos JavaScript
    "./app/javascript/**/*.ts",        // Arquivos TypeScript (se você usar TS)
    "./app/views/**/*.{html,erb}",     // Arquivos ERB e HTML nas views
    "./app/views/**/*.html.erb",       // Arquivos ERB específicos para Ruby on Rails
  ],
  theme: {
    container: {
      center: true,                   // Centraliza automaticamente o container
      padding: '1rem',                // Define padding de 1rem (16px) nos lados
      screens: {
        sm: "640px",                  // Container responsivo em telas pequenas
        md: "768px",                  // Container responsivo em telas médias
        lg: "1024px",                 // Container responsivo em telas grandes
        xl: "1280px",                 // Container responsivo em telas extra grandes
      },
    },
    extend: {
      colors: {
        primary: "#1DA1F2",            // Exemplo de cor customizada
        secondary: "#14171A",
        accent: "#FFAD1F",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Exemplo de fonte personalizada
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),      // Plugin para melhorar os formulários
    require('@tailwindcss/typography'), // Plugin de tipografia
    require('@tailwindcss/aspect-ratio'),// Plugin para razão de aspecto
  ],
};