const pkg = require('./package')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: "universal", 
  target: "server",
  ssr: true,
  generate: {
    fallback: true
  },
  hooks: {
    'render:route': function (url, result, context) {
      result.html = result.html.replace(/ defer>/g, ' defer async>')
    },
    'generate:page': (page) => {
      page.html = page.html.replace(/ defer>/g, ' defer async>')
    }
  },
  render: {
    // Set all scripts to defer
    asyncScripts: true,
  },
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: "kh",
    },
    meta: [
      { charset: 'utf-8' },
      { 
        name: 'viewport', content: 'width=device-width, initial-scale=1' 
      },
      { 
        hid: 'og-title', property: 'og:title', content: 'Etec Center' 
      },
      { 
        property: 'fb:app_id', content: '154708477464232' 
      },
      {
        name: 'google-site-verification', content: 'sInHVGgRTPS1ffJgFE5X-4VNbMCzdGoxh7Vi9NPTt8o'
      },
      {
        name: 'sitecheckerpro-site-verification', content: '623d47057af45d75e78cd0287a53430c'
      },
      // { 
      //   hid: 'description', name: 'description', 
      //   content: "Looking for the latest information and resources on information technology? Our website offers the latest news, tips, and insights to help you stay ahead in the fast-paced world of IT.Explore the world of information technology with our comprehensive website. From hardware to software, we cover everything you need to know to stay up-to-date in this ever-changing industry.Looking for expert guidance on information technology? Look no further than our website, where you'll find in-depth articles and tutorials on the latest trends and best practices.Discover the power of information technology with our website. We offer a wealth of resources, including news, analysis, and tutorials, to help you master the latest tools and techniques.Whether you're a seasoned IT professional or just getting started, our website has everything you need to stay ahead of the curve. Explore our comprehensive collection of resources today." 
      // },
      { 
        name: 'format-detection', content: 'telephone=no' 
      },
      // { 
      //   hid: 'og-type', property: 'og:type', content: 'Information Technology, Etec Center' 
      // },
      // { 
      //   hid: 'og-image', property: 'og:image',
      //   content: 'https://scontent.fpnh16-1.fna.fbcdn.net/v/t39.30808-6/305664414_1249514142562724_4490597012580547501_n.jpg?stp=dst-jpg_p640x640&_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHCsRWiV-5NFJt7YUM13mf3IAPhp99Lu8sgA-Gn30u7y6_3tTBlpw1c3j5yW6GO4JivIi0nxnLpi6exdxXs69pi&_nc_ohc=LkSeVVi_pR0AX9EzPk_&_nc_oc=AQmYmE2hD5Wf1JpDEIQZxjXqqLcr-I_1lVzPu2hzF0bkwZhXYQU6sAEl2mKwEAR_ii4&_nc_ht=scontent.fpnh16-1.fna&oh=00_AfD9mI7tAsTTbcHtaVgLef2h8eD_cLnIa_uI8e_LKrTCIg&oe=6404374E'
      // },
      // { 
      //   hid: 'og-url', property: 'og:url', content: 'https://effortless-froyo-c29932.netlify.app/' 
      // },
    ],
    link: [
      {
				rel: 'icon',
				type: 'image/x-icon',
				href: '/icon.png'
			}
      
    ],
  },
  router: {
    middleware: ['auth']
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/flag.js',mode:'client'},
    {src: '~/plugins/share.js',mode:'client'},
    {src: '~/plugins/firebase.js',mode:'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: '359938223'
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: '359938223'
    }
  },
  publicRuntimeConfig: {
    WEB_URL: process.env.WEB_URL,
  },
  privateRuntimeConfig: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    nodeEnv: process.env.NODE_ENV || "dev",
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-material-design-icons-iconfont',
			'nuxt-i18n',
      '@nuxtjs/sitemap',
      '@nuxt/image',
  ],
  sitemap: {
    hostname: 'https://kroit.net',
    path: '/sitemap',
    gzip: true,
    i18n: true,
    i18n: {
      locales: ['en', 'kh'],
      routesNameSeparator: '___'
    },
    defaults: {
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.8
    }
  },
  i18n:{
    locales: [
      {
        code: 'kh',
        name: 'khmer',
        file: 'kh.js',
        iso: 'kh'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.js',
        iso: 'en'
      }
    ],
    lazy: true,
    defaultLocale: 'kh',
    langDir: 'lang/',
    skipSettingLocaleOnNavigate: true,
  },
  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
   // baseURL: 'https://api.kroit.xyz/api/',
    baseURL: 'http://localhost:9000/api/',
  },
  manifest: {
    name: 'Etec Center',
    lang: 'kh',
    short_name: 'Etec Center',
    display: 'standalone',
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Etec Center',
      lang: 'kh',
      useWebmanifestExtension: false,
    },
    icon: {
      source: '~/static/icon.png' 
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.resolve.alias['node-fetch-native'] = require.resolve('node-fetch')
    }
  },
  loading: {
    color: '#FD7237',
  },
   loadingIndicator: {
    name: 'folding-cube',
    color: '#FD7237',
    background: 'white'
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    WEB_URL: process.env.WEB_URL,
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL
  }
}
