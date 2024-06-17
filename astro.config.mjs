import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.getmythic.app',
	integrations: [
		starlight({
<<<<<<< Updated upstream
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
=======
			title: 'Mythic Docs',
			social: {
				github: 'https://github.com/MythicApp/Mythic',
>>>>>>> Stashed changes
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
<<<<<<< Updated upstream
					label: 'Reference',
					autogenerate: { directory: 'reference' },
=======
					label: 'idk yet',
					autogenerate: { directory: 'idk yet' },
>>>>>>> Stashed changes
				},
			],
		}),
	],
});
