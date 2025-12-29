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
	<NuxtWelcome />
</template>
