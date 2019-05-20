<template>
  <div class="big-header home">
     <div class="title">
      <h1>{{ title }}</h1>
      <h2>ལྷ་ཆོས།</h2>
    </div>
      <router-link to="/character" class="button">{{ button }}</router-link>
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
    // localStorage.clear();
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
