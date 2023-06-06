<script setup>
const props = defineProps({
  noRedirect: { type: Boolean, default: false },
  redirectUrl: { type: String, default: '/' },
  logo: { type: String, default: '/images/inininda-logo.png' }
})
</script>

<template lang="pug">
a.base-logo__container(
  :class="{ 'no-redirect' : noRedirect }"
  :href="noRedirect ? 'javascript:void(0)' : redirectUrl"
)
  VImg.base-logo(
    :src="logo"
    width=100
    height=60
  )
</template>

<style lang="scss" scoped>
.base-logo__container {
  position: relative;

  &.no-redirect {
    cursor: default;
  }

  .base-logo {
    position: relative;
    z-index: 2;
  }
}
</style>
