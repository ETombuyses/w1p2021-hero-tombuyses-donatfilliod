<template>
  <div class="big-header">
    <h1>{{ title }}</h1>
    <p> {{ description }} </p>
    <router-link class="button" to="/character">Choisir son personnage</router-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Dharma - ལྷ་ཆོས།',
      description: 'Le dharma, dans le bouddhisme ou l’hindouisme, est un terme polymorphe désignant les normes et les lois naturelles, une doctrine ou une religion. Il désigne ce qu’il serait la « bonne » chose à faire, ou le « bon » choix, selon sa propre réalité.'
    };
  }, 
  //clean localstorage (dev mode)
  created: function () {
    localStorage.clear()
  },
  mounted() {
    //if there is a game save, go to the last reached level
    let save = localStorage.getItem('save');

    if(save) {
      this.$router.push({path: `/game/${save}`});
    }
  }
};
</script>
