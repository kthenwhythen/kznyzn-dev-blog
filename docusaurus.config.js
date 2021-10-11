/** @type {import('@docusaurus/types').Config} */
// TODO tagline, url
const config = {
  title: 'Kthen Dev Blog',
  tagline: 'Kthenwhythen writing about development',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '@kthenwhythen',
  projectName: 'kthen-dev-blog',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,

        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/kthenwhythen/kthen-dev-blog/edit/main/website/blog/',
          routeBasePath: 'blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Kthen Dev Blog',
        logo: {
          alt: 'Kthen logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            to: '/',
            label: 'Blog',
            position: 'left',
          },
          { to: '/about', label: 'About', position: 'left' },
          { to: '/tags', label: 'Tags', position: 'left' },
          {
            href: 'https://github.com/kthenwhythen',
            label: 'GitHub',
            position: 'right',
          },
          { type: 'search', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `@Kthenwhythen ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
      // algolia: {
      //   apiKey: '',
      //   indexName: '',
      // },
    }),
};

module.exports = config;
