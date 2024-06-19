import { type BaseLayoutProps } from 'fumadocs-ui/layout';

// basic configuration here
export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/mythicapp/',
  nav: {
    title: 'Mythic',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
