/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'tuttacatter',
  tagline: 'The tagline of my site',
  url: 'https://kmdmnak.github.io',
  baseUrl: '/tuttacatter/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'KMDMNAK', // Usually your GitHub org/user name.
  projectName: 'tuttacatter', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Tuttacatter',
      logo: {
        alt: 'Tuttacatter Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { activeBasePath: 'docs',to: 'learning/prepare/introduction', label: 'Learn', position: 'left' },
        {
          href: 'https://github.com/KMDMNAK/tuttacatter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./src/sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ]
  ],
};
