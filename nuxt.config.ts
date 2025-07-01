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
		dirs: [
			`composables/**`,
		],
	},
	devtools: { enabled: true },
	compatibilityDate: `2024-04-03`,
	vite: {
		build: {
			target: `esnext`,
		},
	},
	eslint: {
		config: {
			stylistic: {
				indent: `tab`,
				semi: true,
			},
		},
	},
});
