<script setup>
const emit = defineEmits(['close'])

const closeMenu = () => {
  emit('close')
}
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
</script>

<template lang="pug">
.header-sidebar(
  aria-modal="true"
)
  .header-sidebar__header
    VBtn.btn-close(
      title="Click to close Menu"
      icon="mdi-close"
      @click="closeMenu"
    )
  nav.header-sidebar__nav(
    aria-label="Accessibility Navigation"
    role="navigation"
  )
    ul.nav__list
      li.nav__item(
        v-for="hMenu in HeaderMenu"
      )
        a(
          @click.native="closeMenu"
          :href="hMenu.link"
        )  {{ hMenu.name }}
</template>

<style lang="scss">
.header-sidebar {
  position: fixed;
  right: 0;
  top: 0;
  height: vh(100);
  width: 100%;
  max-width: 600px;
  background: #1f1901;
  padding: 30px 56px;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  flex-direction: column;
  transition: transform 0.5s cubic-bezier(0, 0, 0, 1);
  z-index: 8;
  pointer-events: auto;

  @include media(xs) {
    padding: 20px 15px;
  }

  &.slide-left-enter,
  &.slide-left-leave-to {
    transform: translateX(100%);
  }
}

.header-sidebar__header {
  text-align: right;

  .btn-close {
    border-radius: 50%;
    width: 40px;
    height: 40px;

    @include media(xl-and-up) {
      width: 56px;
      height: 56px;
    }
  }
}

.header-sidebar__nav {
  .nav__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav__item {
    display: block;
    position: relative;
    overflow: hidden;
    --ani-d: 0.1s;
    transition: transform 0.5s cubic-bezier(0, 0, 0, 1), opacity 0.3s ease-in;
    margin: 16px 0px;
    a {
      font-size: 32px;
    }
    .header:not(.show-menu) & {
      transform: translateX(100%);
      opacity: 0;
      transition-delay: 0.5s;
    }
  }
}
</style>
