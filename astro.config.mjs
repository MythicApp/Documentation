import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.getmythic.app',
	integrations: [
		starlight({
			title: 'Mythic Documentation',
			social: {
				github: 'https://github.com/MythicApp/Mythic',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', link: '/guides/installation/' },
					],
				},
				{
					label: 'Advanced Options',
					items: [
						{ label: 'Creating a bottle', link: '/advoptions/bottlecreate/'},
					]
				},
			],
		}),
	],
});
