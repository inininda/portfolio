<script setup></script>
<template lang="pug">
section.landing-about(
  id="landing-about"
)
  .container.ml-auto.mr-auto
    .about-wrapper
      .about-content-wrapper
        h2 About Me
        p Hi there! My name is Ninda, and I'm a passionate web developer with three years of experience in the field. Currently, I am working as a Web3 developer, exploring the exciting world of decentralized applications and blockchain technology.
        p My journey as a web developer began in 2020 when I started my career in the backend area. I quickly became fascinated by the power of coding and the ability to build robust and scalable solutions. 
        p In 2021, I took on the challenge of mastering frontend development, which allowed me to enhance the user experience by creating intuitive and visually appealing interfaces. This addition to my skill set allowed me to become a well-rounded web developer, proficient in both the backend and frontend aspects of web development.
        p In early 2022, my curiosity led me to the world of Web3. Embracing the decentralized nature of blockchain technology, I delved into the development of decentralized applications (DApps), smart contracts, and exploring the potential of cryptocurrencies. This journey allowed me to merge my passion for coding with the transformative capabilities of Web3 technologies.
        p I hold a degree in Computer Science, which provided me with a solid foundation in programming principles and algorithms. However, I believe that learning is a lifelong process, and I continuously seek out new knowledge and challenges to enhance my skills. The ever-evolving nature of technology motivates me to stay up-to-date with the latest industry trends and best practices.
        p When I'm not immersed in the world of coding, I enjoy exploring the world around me. Traveling has always been a source of inspiration, allowing me to discover different cultures, connect with diverse communities, and broaden my perspectives. Additionally, I find solace in the pages of a good novel, as literature offers me an escape and a chance to explore new ideas and stories.
        p I’m excited about the endless possibilities that lie ahead in the web development and Web3 realms, and I look forward to tackling new challenges, mastering new technologies, and making a positive impact in the digital landscape.
      .about-image-wrapper
        VImg(
          src="/images/about-me.png"
        )
</template>
<style lang="scss">
.landing-about {
  color: #413605;
  margin-top: 300px;
  .about-wrapper {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }
  .about-content-wrapper {
    width: 50%;
    padding: 24px 36px;
    h2 {
      font-size: 100px;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 36px;
    }
    p {
      font-size: 16px;
      &:nth-of-type(n + 1) {
        margin-top: 24px;
      }
    }
  }
  .about-image-wrapper {
    width: 50%;
    .v-img {
      height: 600px;
      width: 400px;
      margin-left: auto;
      margin-right: auto;
      filter: drop-shadow(2px 4px 6px #413605);
      box-shadow: -50px -50px 0 -40px #413605, 50px 50px 0 -40px #413605;
    }
  }
  @include media(md-and-down) {
    margin-top: 60px;
    .about-image-wrapper .v-img {
      height: auto;
      width: 90%;
    }
    .landing-about .about-wrapper {
      gap: 15px;
    }
    .about-content-wrapper {
      width: 65%;
      padding: 10px 10px;
    }
    .about-image-wrapper {
      width: 40%;
    }
  }
  @include non-desktop {
    .about-content-wrapper h2 {
      font-size: 74px;
      margin-bottom: 0px;
    }
    .about-wrapper {
      gap: 10px;
    }
  }
  @include small-tablet {
    margin-top: 25px;
    .about-content-wrapper {
      width: 100%;
    }
    .about-wrapper {
      flex-direction: column-reverse;
      align-items: center;
      gap: 50px;
    }
    .about-image-wrapper {
      width: 90%;
      max-width: 300px;
    }
  }
}
</style>
