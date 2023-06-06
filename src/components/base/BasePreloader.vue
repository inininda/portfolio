<script setup>
import { ref, watchEffect, onMounted } from 'vue'
import { useGeneralStore } from '@/stores/general'
import preloaderData from '@/assets/data/preloader.json'
import * as lottie from 'lottie-web'

const generalStore = useGeneralStore()

const animationContainer = ref(null)
onMounted(() => {
  if (animationContainer.value) {
    const preloaderAnimation = lottie.loadAnimation({
      container: animationContainer.value,
      renderer: 'svg',
      loop: true,
      autplay: true,
      animationData: preloaderData
    })
  }
})
</script>
<template lang="pug">
.blur-preloader
  .blur-prealoader-container
    .blur-preloader-content(
      ref='animationContainer'
    )
</template>

<style lang="scss">
.blur-preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  background: #b0a58d;
  overflow: hidden;
  user-select: none;
  pointer-events: none;
  cursor: not-allowed;
}

.blur-prealoader-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 0;
  text-align: center;

  .blur-preloader-content {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
}
</style>
