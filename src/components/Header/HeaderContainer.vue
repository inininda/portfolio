<script setup>
import { ref } from 'vue'
import BaseLogo from '@/components/base/BaseLogo.vue'
import HeaderSidebar from './HeaderSidebar.vue'

const isMenuOpened = ref(false)
const HeaderMenu = [
  {
    name: 'Home',
    link: '#landing-home'
  },
  {
    name: 'Project',
    link: '#landing-project'
  },
  {
    name: 'About',
    link: '#landing-about'
  },
  {
    name: 'Contact',
    link: '#landing-contact'
  }
]
const openMenu = () => {
  isMenuOpened.value = true
  document.body.closest('html').classList.add('no-scroll')
}
const closeMenu = () => {
  console.log('called')
  isMenuOpened.value = false
  document.body.closest('html').classList.remove('no-scroll')
}
</script>
<template lang="pug">
.header(
  :class="{'show-menu': isMenuOpened}"
)
  VContainer
    .navigation-wrapper
      BaseLogo.header_logo
      .navigation(
          v-if="HeaderMenu?.length > 0"
      )
        .navigation-item(
          v-for="hMenu in HeaderMenu"
        )
          a(
            :href="hMenu.link"
          )  {{ hMenu.name }}
        VBtn.menu-button(
          icon="mdi-menu"
          title="Click to open Menu"
          @click="openMenu"
        )
  transition(
    name="slide-left"
  )
    HeaderSidebar(
      v-if="isMenuOpened"
      @close="closeMenu"
    )
</template>
<style lang="scss">
.header {
  z-index: 99;
  position: fixed;
  inset: 0% auto auto 0%;
  display: flex;
  width: 100%;
  height: 80px;
  padding: 30px 50px;
  align-items: center;
  background-color: rgb(249, 245, 242);
  margin-top: -5px;
  @include small-tablet {
    padding: 20px 0px;
  }
  .navigation-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .navigation {
    display: flex;
    gap: 40px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
  .navigation-item {
    position: relative;
    @include media(sm-and-down) {
      display: none;
    }
    a {
      color: #222222;
      text-transform: uppercase;
      justify-content: center;
      align-items: center;
      margin-top: 0;
      padding: 4px;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      transition: border-color 0.2s;
      opacity: 0.6;
      font-weight: 900;
    }
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #222222;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover {
      a {
        opacity: 1;
      }
      &::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
  .menu-button {
    transition: background-color 0.5s $default-cubic-bezier;
    width: 40px;
    border-radius: 50%;
    margin-left: 10px;
    color: #413605;
    height: 40px;
    display: none;

    @include media(sm-and-down) {
      display: block;
    }

    .v-icon {
      transition: color 0.5s $default-cubic-bezier;
    }

    .header.is-scrolled & {
      background: $white;

      .v-icon {
        color: $black;
      }
    }
  }
}
</style>
