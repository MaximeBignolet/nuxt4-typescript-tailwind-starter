// https://nuxt.com/docs/api/configuration/nuxt-config

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  compatibilityDate: `2024-04-03`,
  ssr: false,
  devtools: { enabled: true },
  modules: [ `@nuxtjs/tailwindcss`, `@nuxt/eslint` ],
  eslint: {
    config: {
      stylistic: true
    }
  },
  components: [
    {
      path: `~/components`,
      pathPrefix: false
    }
  ],
  imports: {
    autoImport: true
  }
});
