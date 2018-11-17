const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css'},
      
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000000', height: '3px' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css',
    /* '~assets/css/app.styl' */
    /* {
      src: join(__dirname, 'assets/css/app.styl'),
      lang: 'styl'
    } */
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/fonts.js'
  ],

  transition: {
    name: "fade",
    mode: "out-in"
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/vuetify'
    
  ],

  vuetify: {
    theme: {
     
  
    }
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
