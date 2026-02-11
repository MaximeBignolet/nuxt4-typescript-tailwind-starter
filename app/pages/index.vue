<script setup lang="ts">
const { site } = useAppConfig();

useSeoMeta({
	title: site.name,
	description: site.description,
	ogTitle: site.name,
	ogDescription: site.description,
	ogImage: site.ogImage,
	twitterCard: `summary_large_image`,
});
</script>

<template>
	<section class="relative isolate overflow-hidden bg-linear-to-b from-emerald-50 via-white to-cyan-50">
		<div class="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl" />
		<div class="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl" />
		<main class="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center gap-6 px-6 py-16">
			<p class="rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
				Nuxt Starter Template
			</p>
			<h1 class="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
				Clean, modular, and ready to build on.
			</h1>
			<p class="max-w-2xl text-base leading-relaxed text-neutral-700">
				This project provides a lightweight Nuxt 4 foundation with TypeScript, TailwindCSS, and ESLint so you can ship quickly without business-specific constraints.
			</p>
			<div class="flex flex-wrap gap-3">
				<NuxtLink
					to="https://nuxt.com/docs"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
				>
					Documentation Nuxt
				</NuxtLink>
				<NuxtLink
					to="https://tailwindcss.com/docs"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-md border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
				>
					Documentation Tailwind
				</NuxtLink>
			</div>
		</main>
	</section>
</template>
