import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  dev: process.env.NODE_ENV !== 'production',
  css: ['@/assets/css/styles.css'],
  buildModules: ['@nuxtjs/strapi', '@nuxtjs/dotenv'],
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
