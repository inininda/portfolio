<script setup>
import { inject, computed, ref, onMounted } from 'vue'
import { useGeneralStore } from '@/stores/general'
import LandingHome from '@/components/landing/LandingHome.vue'
import LandingAbout from '@/components/landing/LandingAbout.vue'
import LandingProject from '@/components/Landing/LandingProject.vue'
import LandingContact from '@/components/Landing/LandingContact.vue'
const generalStore = useGeneralStore()

onMounted(() => {
  generalStore.showLoader = false
})
</script>

<template lang="pug">
.landing
  .landing__section
    LandingHome
    LandingProject
    LandingAbout
    LandingContact
</template>

<style lang="scss">
.landing {
  overflow: hidden;
}
</style>
