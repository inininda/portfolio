<script setup>
import { ref, computed, watchEffect, watch, inject } from 'vue'
import HeaderContainer from '@/components/Header/HeaderContainer.vue'
import FooterContainer from '@/components/Footer/FooterContainer.vue'
import preloader from '@/components/base/basePreloader.vue'
import { useGeneralStore } from '@/stores/general'
import { useRoute } from 'vue-router'

const generalStore = useGeneralStore()

const isShowPreloader = computed(() => {
  return generalStore.showLoader
  //return (generalStore.showLoader = false)
})
</script>

<template lang="pug">
VApp(
  :style="{background: '#f9f5f2'}"
)
  HeaderContainer
  VMain
    transition(name="fadeout")
      preloader(v-if="isShowPreloader")
    .container__wrapper
      RouterView
  FooterContainer
</template>

<style lang="scss">
@import '@/assets/icomoon/style.scss';
@import '@/styles/vuetify-overwrite';
@import '@/styles/globals';
@import '@/styles/fonts';

@mixin keyframes($animationName) {
  @-webkit-keyframes #{$animationName} {
    @content;
  }
  @-moz-keyframes #{$animationName} {
    @content;
  }

  @-ms-keyframes #{$animationName} {
    @content;
  }

  @keyframes #{$animationName} {
    @content;
  }
}
</style>
