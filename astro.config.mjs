import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind'; 

export default defineConfig({
  favicon: '/favicon.ico',
  site: 'https://docs.getmythic.app/guides/installation',
  integrations: [starlight({
    favicon: '/favicon.ico',
    title: 'Mythic Docs',
    social: {
      github: 'https://github.com/MythicApp/Mythic',
      discord: 'https://discord.gg/GwHgX3QWK3',
      'x.com': 'https://x.com/mythicapp'
    },
    sidebar: [
      {
        label: 'Getting Started',
        items: [
          {
            label: 'Installation',
            link: '/guides/installation/'
          },
          {
            label: 'Setup',
            link: '/guides/setup'
          },
          {
            label: 'Navigating the Mythic UI',
            link: '/guides/nav'
          },
          {
            label: 'Installing Games',
            link: '/guides/gameinstall'
          },
          {
            label: 'Importing Games',
            link: '/guides/gameimport'
          }
        ]
      },
      {
        label: 'Advanced Features',
        items: [
          {
            label: 'Creating a bottle',
            link: '/advoptions/bottlecreate/'
          }
        ]
      },
      {
        label: 'Troubleshooting Issues',
        items: [
          {
            label: 'Internet Issues',
            link: '/troubleshoot/internet'
          },
          {
            label: 'Uninstalling and Reinstalling',
            link: '/troubleshoot/uninstall'
          }
        ]
      },
      {
        label: 'Other Tutorials',
        items: [
          {
            label: 'Installing Game Launchers',
            link: '/othertut/launchers'
          },
          {
            label: 'Microsoft Runtime Missing',
            link: '/othertut/msruntime'
          }
        ]
      }
    ]
  }), tailwind()]
});
