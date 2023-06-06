<script setup>
import { ref, computed, onMounted } from 'vue'
import homeAnimation from '@/assets/data/working.json'
import * as lottie from 'lottie-web'

const homeAnimationContainer = ref(null)
onMounted(() => {
  if (homeAnimationContainer.value) {
    const preloaderAnimation = lottie.loadAnimation({
      container: homeAnimationContainer.value,
      renderer: 'svg',
      loop: true,
      autplay: true,
      animationData: homeAnimation
    })
  }
})
</script>
<template lang="pug">
section.landing-home(
  id="landing-home"
)
  VContainer.ml-auto.mr-auto
    .landing-home-wrapper
      .landing-home-description
        span.name Ninda Mawarni
        h2 Hey there! I'm a Web Developer
        p I am a passionate web developer who is constantly driven by the desire to learn, grow, and embrace challenges along the way.
        .button-wrapper
          a.sage-button.mt-6.common-button.mr-auto.ml-auto(
            href="#landing-project"
          ) Explore me
      .landing-home-animation
        div.animation-container(
          ref="homeAnimationContainer"
        )
</template>
<style lang="scss">
.landing-home {
  height: 900px;
  padding-top: 140px;
  color: #413605;
  padding-bottom: 70px;
  max-height: 900px;
  .landing-home-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    transition-property: all;
    transition-duration: 200ms;
    transition-timing-function: ease;
    width: 100%;
  }
  .landing-home-description {
    width: 50%;
    margin-top: 100px;
    margin-bottom: 140px;
    .name {
      font-size: 20px;
      line-height: 34px;
      font-weight: 400;
    }
    h2 {
      width: 100%;
      margin-top: 10px;
      margin-right: 35px;
      margin-bottom: 10px;
      font-size: 40px;
      line-height: 50px;
      text-transform: none;
      font-weight: 900;
    }
    p {
      width: 100%;
      font-size: 14px;
      line-height: 19px;
      font-weight: 900;
      opacity: 0.6;
    }
  }
  .landing-home-animation {
    position: relative;
    width: 50%;
    margin-top: auto;
    margin-bottom: auto;
    clear: both;
  }
  .animation-container {
    margin-top: -130px;
    margin-right: -60px;
  }
  .project-item-img {
    margin-left: auto;
    margin-right: auto;
  }
  @include media(sm-and-down) {
    height: auto;
    .animation-container {
      margin-right: 0px;
    }
  }
  @include small-tablet {
    padding-top: 80px;
    .landing-home-wrapper {
      flex-direction: column;
      align-items: center;
    }
    .landing-home-description {
      width: 100%;
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .landing-home-animation {
      width: 98%;
      max-width: 400px;
    }
    .animation-container {
      margin-top: -20px;
    }
  }
  @include slim-mobile {
    .button-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .landing-home .landing-home-description h2 {
      margin-bottom: 12px;
      font-size: 32px;
      line-height: 36px;
    }
    .landing-home-description p {
      font-size: 12px;
      line-height: 22px;
    }
  }
}
</style>
