// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	modules: [`@nuxtjs/tailwindcss`, `@nuxt/eslint`],
	ssr: false,
	components: [
		{
			path: `~/components`,
			pathPrefix: false,
		},
	],
	imports: {
		autoImport: true,
	},
	devtools: { enabled: true },
	compatibilityDate: `2024-04-03`,
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
});
