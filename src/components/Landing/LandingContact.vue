<script setup>
import socialMedia from '@/assets/data/socialMedia.json'
</script>
<template lang="pug">
section.landing-contact(
  id="landing-contact"
)
   VContainer
      .landing-contact-email
        h2 Get In Touch
        .landing-contact-email-wrapper.mt-6
          p Want to work together or have any question?
          a.common-button.mt-4(:href="'mailto:' + socialMedia.email" target="_blank") Hit Me Up
      .landing-contact-social-media.text-center.mt-4
        h2 Follow me on
        .landing-contact-social-media-wrapper.mt-2
          a(
            :href="socialMedia.linkedin"
            target="_blank"
          )
            VIcon icon-linkedin
          a(
            :href="socialMedia.instagram"
            target="_blank"
          )
            VIcon icon-instagram
          a(
            :href="socialMedia.github"
            target="_blank"
          )
            VIcon icon-github
</template>
<style lang="scss">
.landing-contact {
  color: #413605;
  margin-top: 120px;
  margin-bottom: 80px;
  .landing-contact-email {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    h2 {
      font-size: 40px;
      font-weight: 900;
    }
    .landing-contact-email-wrapper {
      border: 5px solid #413605;
      padding: 50px 36px;
      border-radius: 16px;
      p {
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
  .landing-contact-social-media {
    h2 {
      font-size: 20px;
    }
  }
  .landing-contact-social-media-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    a:hover {
      opacity: 0.8;
    }
  }
  @include small-tablet {
    .landing-contact-email .landing-contact-email-wrapper p {
      font-size: 20px;
    }
    .landing-contact-email {
      width: 100%;
    }
    .landing-contact-email .landing-contact-email-wrapper {
      padding: 40px 20px;
    }
  }
}
</style>
