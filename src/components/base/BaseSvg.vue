<script>
export default {
  name: 'BaseSvg'
}
</script>

<script setup>
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps({
  icon: { type: String, default: '' }
})

const svgs = import.meta.glob(`../../assets/images/**/*.svg`)

const iconComponent = computed(() => {
  return defineAsyncComponent(svgs[`../../assets/images/${props.icon}.svg`])
})
</script>

<template lang="pug">
component(
  :is="iconComponent"
)
</template>
