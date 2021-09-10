module.exports = {
    dest: 'docs',
    base: '/frontend-mentor-bluuweb/',
  title: 'FrontendMentor bluuweb',
  description: 'Aquí iré detallando el código de Frontend Mentor',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guía',
        link: '/',
      },
      {
        text: "Youtube",
        link: "https://youtube.com/bluuweb",
    },
    {
        text: "Curso Vue.js",
        link: "http://curso-vue-js-udemy.bluuweb.cl",
    },
    {
        text: "Curso React.js",
        link: "http://curso-react-js-udemy.bluuweb.cl",
    },
    {
        text: "Curso Bootstrap",
        link: "http://curso-bootstrap-4-udemy.bluuweb.cl",
    },
    ],
    sidebar: [
        '/',
        '/01-desafio/'
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
