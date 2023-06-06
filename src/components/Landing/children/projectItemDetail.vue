<script setup>
import { computed, ref, watchEffect, reactive } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const props = defineProps({
  projectItem: { type: Object, default: () => {} }
})
const emit = defineEmits(['close'])
const activeIndex = ref(0)
const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
  //autoplay: 3000,
  wrapAround: true
}
</script>
<template lang="pug">
.project-detail.project-card
  .project-detail-back
    VIcon(
      @click="$emit('close')"
    ) icon-chevron-left
  .project-detail-content
    span.project-detail-status(
      :class="projectItem.status"
    ) {{ projectItem.status.toUpperCase() }}
    .project-detail-technology.mt-4
      h2 Technology
      .project-detail-technology-wrapper.mt-2
        span(
            v-for="tech in projectItem.technology"
        ) {{ tech }}
    .project-detail-description.mt-4
      h2 About the project
      .project-detail-description-content.mt-4(
        v-html="projectItem.description"
      )
    .project-detail-button.mt-10
      a.common-button.site(
        v-if="projectItem.site"
        :href="projectItem.site"
        rel="noopener noreferrer"
        target="_blank"
      ) Go To Project
      a.common-button.github(
        v-if="projectItem.github"
        :href="projectItem.github"
        rel="noopener noreferrer"
        target="_blank"
      ) Go To Github
  .project-detail-img
    .project-detail-img-wrapper
      Carousel(
        v-if="projectItem.imgGallery"
        :settings="settings"
      )
        Slide(
          v-if="projectItem.imgGallery?.length > 0"
          v-for="(item, index) in projectItem.imgGallery"
          :key="index"
        )
          img(
            :src="item"
          )
        Slide(
          v-if="projectItem.videoGallery?.length > 0"
          v-for="(video, index) in projectItem.videoGallery"
          :key="index"
        )
          video(
            :key="video"
            :autoplay="true"
            :muted="true"
            :loop="false"
            :controls="true"
          )
            source(:src="video")
            | Your browser does not support the video tag.
        template(#addons)
            Navigation
</template>
<style lang="scss">
.project-detail {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  min-height: 500px;
  gap: 40px;
  padding-bottom: 36px;
  .project-detail-back {
    position: absolute;
    z-index: 2;
  }
  .project-detail-content {
    width: 50%;
    position: relative;
    padding: 36px 24px;
  }
  .project-detail-img {
    width: 50%;
    position: relative;
    margin-top: auto;
    margin-bottom: auto;
  }
  span.project-detail-status {
    position: relative;
    padding-left: 25px;
  }
  span.project-detail-status::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    position: absolute;
    left: 0;
    top: 0;
  }
  span.project-detail-status.not.active::before {
    background-color: $red1;
  }
  span.project-detail-status.active::before {
    background-color: $green4;
  }
  span.project-detail-status.trial::before {
    background-color: $purple200;
  }
  span.project-detail-status.under.development::before {
    background-color: $orange3;
  }
  h2 {
    font-size: 24px;
    font-weight: 900;
  }
  .project-detail-technology {
    span {
      font-size: 20px;
    }
    .project-detail-technology-wrapper {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: flex-start;
      align-content: flex-start;
    }
  }
  .project-detail-button.mt-10 {
    display: flex;
    gap: 30px;
    flex-direction: row;
    justify-content: center;
  }
  .project-detail .project-detail-back {
    position: absolute;
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
  .project-detail-img-wrapper {
    img,
    video {
      max-height: 324px;
    }
  }
  .carousel__prev {
    top: 400px;
    left: calc(50% - 50px);
    background-color: #ff6b16;
    border: 1px solid #413605;
    border-radius: 50%;
  }
  .carousel__next {
    top: 400px;
    right: calc(50% - 50px);
    background-color: #ff6b16;
    border: 1px solid #413605;
    border-radius: 50%;
  }
  .project-detail-description-content {
    p {
      &:nth-of-type(n + 1) {
        margin-top: 16px;
      }
    }
  }
  @include media(md-and-down) {
    flex-direction: column-reverse !important;
    align-items: center;
    .project-detail-back {
      top: 0;
      left: 0;
    }
    .project-detail-content {
      width: 100%;
      margin-top: 50px;
    }
    .project-detail-img {
      width: 95%;
    }
    .carousel__prev {
      top: calc(100% + 50px);
    }
    .carousel__next {
      top: calc(100% + 50px);
    }
  }
}
</style>
