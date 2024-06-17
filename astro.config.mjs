import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.getmythic.app',
	integrations: [
		starlight({
			social: {
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
				},
			],
		}),
	],
});
