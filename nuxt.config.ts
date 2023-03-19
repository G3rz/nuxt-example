// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/nuxt-example/',
    },
    telemetry: false,
    css: ['@/assets/style.css'],
    modules: ['@nuxt/content'],
    ssr: true,
    content: {
        highlight: {
            theme: 'dark-plus',
        },
    },
});
