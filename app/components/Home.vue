<template>
  <div class="home__background">
    <h1 class="home__title">{{ title }}</h1>
    <div class="home__button">
      <svg viewBox="0 0 360 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5.5" y="6.5" width="349" height="57" rx="1.5" stroke="white"></rect>
        <rect x="10.5" y="11.5" width="349" height="57" rx="1.5" stroke="white"></rect>
        <rect x="0.5" y="0.5" width="349" height="57" rx="1.5" stroke="white"></rect>
        <rect x="0.5" y="11.5" width="349" height="57" rx="1.5" stroke="white"></rect>
        <rect x="10.5" y="0.5" width="349" height="57" rx="1.5" stroke="white"></rect>
      </svg>
      <router-link to="/character" class="button__text">{{ button }}</router-link>
    </div>
  </div>
</template>

<script>

import leveling from '../assets/services/save-level'

export default {
  data() {
    return {
      title: "Dharma",
      button: "commencer l'aventure"
    };
  },
  created() {
    localStorage.clear();
  },
  mounted() {
    //restore level session
    if (leveling.chapter) {

      if (leveling.level) {
        this.$router.push({ path: `/chapter${leveling.chapter}/game/${leveling.level}` });

      } else {
        this.$router.push({ path: `/chapter${leveling.chapter}` });
      }
    }
  }
};
</script>
