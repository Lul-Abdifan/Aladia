// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@fortawesome/fontawesome-free/css/all.css", "~/assets/css/main.css",'element-plus/dist/index.css', // Add Element Plus styles globally
  ],
  modules: ["@nuxtjs/storybook",    "@element-plus/nuxt", 
  ],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
