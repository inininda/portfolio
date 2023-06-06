<script setup>
import { computed, ref, watchEffect, reactive } from 'vue'
import { onMounted } from 'vue'
import projectItemDetail from './projectItemDetail.vue'

const emit = defineEmits(['mount'])
const props = defineProps({
  idx: { type: String, default: '' },
  projectItem: { type: Object, default: () => {} }
})

const isOpenedDetail = ref(false)
const actionForDetail = () => {
  console.log('called')
  isOpenedDetail.value = !isOpenedDetail.value
  console.log(isOpenedDetail.value)
}
onMounted(() => {})
</script>

<template lang="pug">
transition(
  name="slide-left"
  mode="out-in"
)
  .project-item.project-card(
    v-if="!isOpenedDetail"
  )
    .project-item-wrapper
      .project-item-img(
        ref="itemElementImg"
      )
        img(
          :src="projectItem.banner"
        )
      .project-item-title
        span {{projectItem.name}}
    .project-item-wrapper
      .project-item-description(
        v-html="projectItem.shortDescription"
      )
      .project-item-btn
        button.common-button(
          @click.native="actionForDetail"
        ) explore more
  projectItemDetail(
    v-else
    :projectItem="projectItem"
    @close="actionForDetail"
  )
</template>
<style lang="scss">
.project-item {
  display: flex;
  justify-content: flex-start;
  gap: 50px;
  margin-bottom: 36px;
  margin-top: 36px;
  position: relative;
  padding-bottom: 36px;
  padding-left: 62px;
  padding-right: 36px;
  .project-item-wrapper {
    width: 60%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
    &:nth-of-type(2) {
      margin-top: auto;
      margin-bottom: auto;
    }
  }
  .project-item-img {
    max-height: 300px;
    filter: drop-shadow(2px 4px 6px black);
    img {
      max-height: 300px;
    }
  }
  &:nth-last-of-type(odd) {
    flex-direction: row;
    .project-item-btn {
      button {
        background-color: #ed6f57;
      }
    }
  }
  &:nth-of-type(even) {
    flex-direction: row-reverse;
    .project-item-title {
      text-align: right;
    }
    .project-item-img {
      margin-left: auto;
    }
  }
  .project-item-title {
    color: #413605;
    font-size: 30px;
    font-weight: 900;
  }
  .project-item-description {
    color: #413605;
    font-size: 16px;
  }
}
.project-card {
  &::after {
    content: '';
    position: absolute;
    background-color: #413605;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    bottom: 0;
    opacity: 0.8;
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
  @include media(sm-and-down) {
    padding-left: 10px;
    padding-right: 10px;
    gap: 20px;
    .project-item-img {
      max-height: 200px;
      img {
        max-height: 200px;
      }
    }
    .project-item-title {
      font-size: 24px;
    }
  }
  @include small-tablet {
    &:nth-last-of-type(odd) {
      flex-direction: column;
    }
    &:nth-of-type(even) {
      flex-direction: column;
      .project-item-img {
        margin-left: auto;
        margin-right: auto;
        img {
          max-height: unset;
        }
      }
      .project-item-title {
        text-align: left;
      }
    }
    .project-item-img {
      max-height: unset;
      img {
        width: 90%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .project-item-wrapper {
      width: 100%;
    }
  }
}
</style>
