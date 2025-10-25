// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	modules: [`@nuxt/eslint`],
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
	css: [`~/assets/css/main.css`],
	devServer: {
		host: `0.0.0.0`,
	},
	compatibilityDate: `2024-04-03`,
	vite: {
		build: {
			target: `esnext`,
		},
		plugins: [
			tailwindcss(),
		],
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
