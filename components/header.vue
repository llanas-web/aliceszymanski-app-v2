<template>
    <nav
    class="navbar"
    :class="{
      'navbar-transparent': !scrollOverheader && isHomePage,
      'shadow-light': scrollOverheader && !isHomePage,
    }"
    role="navigation"
  >
    <div class="container is-fluid">
      <div class="navbar-brand">
        <nuxt-link
        v-show="scrollOverheader || !isHomePage"
        to="/"
        class="navbar-item brand-title"
        ><span>Alice Szymanski</span></nuxt-link
        >
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': isBurgerToggled }"
          @click="isBurgerToggled = !isBurgerToggled"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isBurgerToggled }">
        <div class="navbar-start" @click="() => (isBurgerToggled = false)">
          <nuxt-link to="/" class="navbar-item has-text-centered is-uppercase"
            >Accueil</nuxt-link
          >
          <nuxt-link
            to="/biographie"
            class="navbar-item has-text-centered is-uppercase"
            >Biographie</nuxt-link
          >
          <nuxt-link
            to="/musique-de-chambre"
            class="navbar-item has-text-centered is-uppercase"
            >Musique de chambre</nuxt-link
          >
          <nuxt-link
            to="/#medias"
            class="navbar-item has-text-centered is-uppercase"
            >Médias</nuxt-link
          >
          <nuxt-link
            to="/agenda"
            class="navbar-item has-text-centered is-uppercase"
            >Agenda</nuxt-link
          >
          <nuxt-link
            to="/galerie"
            class="navbar-item has-text-centered is-uppercase"
            >Galerie</nuxt-link
          >
        </div>
        <div v-if="footer && footer.socialmediaLink" class="navbar-end">
          <div
            v-for="socialmediaLink of footer.socialmediaLink"
            :key="socialmediaLink.id"
            class="navbar-item"
          >
            <a :href="socialmediaLink.link" target="_blank" class="mx-2">
              <span class="icon is-medium">
                <font-awesome-icon
                  :icon="['fab', socialmediaLink.icon.faName]"
                  class="is-size-4"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </nav>
</template>

<script lang="ts" setup>
import type { Footer } from '../models/strapi-types'
import type { Strapi4Response } from '@nuxtjs/strapi'

const { find } = useStrapi3();
const scrollOverheader = false;
const isHomePage = false;
const isBurgerToggled = true;

const {data, pending, error} = await useAsyncData('footer', () => find<Footer>('footer'));
console.log(data.value)
const footer = data.value

</script>

<style></style>
