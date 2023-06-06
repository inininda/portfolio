<template lang="pug">
.footer
  .copyright-texts
    p.copyright-text © {{ new Date().getFullYear() }} All Rights Reserved,&nbsp;
    p.copyright-text Ninda Mawarni
</template>

<style lang="scss">
.footer {
  position: relative;
  z-index: 5;
  height: 150px;
  width: 100%;
  padding: 0 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1f1901;

  .copyright-texts {
    color: $white;
    font-weight: 400;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .copyright-text {
    line-height: 1.5;
  }

  @include tablet {
    padding: 0 16px;

    .copyright-text {
      font-size: 1.125rem;
    }
  }

  @include mobile {
    height: 100px;
    padding: 0 16px;

    .copyright-text {
      font-size: 1rem;
    }
  }

  @include slim-mobile {
    .copyright-text {
      font-size: 0.875rem;
    }
  }
}
</style>
