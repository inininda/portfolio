<script setup>
import { computed, onMounted, ref } from 'vue'
import project from '@/assets/data/project.json'
import LandingProjectItem from './children/LandingProjectItem.vue'
</script>
<template lang="pug">
section.landing-project(
  id="landing-project"
)
  .container.ml-auto.mr-auto
    .landing-project-header
      h2.title Explore my project
      p.description Here are brief explanation about some of the projects that I have worked over the years. Some of the projects are still active but unfortunately there are some of them that is not active. Some of the project also a trial development project for me to study new language or library.
    .landing-project-content
      LandingProjectItem(
        v-if="project?.length"
        v-for="(item, index) in project"
        :idx="index.toString()"
        :projectItem="item"
      )
</template>
<style lang="scss">
.landing-project {
  color: #413605;
  padding-bottom: 70px;
  .landing-project-header {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    .title {
      font-size: 30px;
      text-transform: uppercase;
      font-weight: 900;
      text-align: center;
    }
    .description {
      text-align: center;
      font-size: 16px;
      margin-top: 8px;
      color: #413605;
      opacity: 0.6;
      // #282825;
    }
  }
  .landing-project-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    margin-top: 80px;
  }
  .landing-project-content-left {
    display: block;
    width: 40%;
    position: relative;
  }
  .landing-project-content-right {
    position: relative;
    width: 100%;
  }
  @include small-tablet {
    .landing-project-header .title {
      font-size: 27px;
    }
    .landing-project-header .description {
      font-size: 14px;
      margin-top: 0px;
    }
  }
}
</style>
