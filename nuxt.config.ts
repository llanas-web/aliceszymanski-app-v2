import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  dev: process.env.NODE_ENV !== 'production',
  // plugins: ['~/plugins/font-awesome.js'],
  css: [
    '@/assets/css/styles.css',
    // '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  buildModules: ['@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    version: 'v3',
  },
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
});
