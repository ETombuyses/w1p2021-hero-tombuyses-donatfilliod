<template>
  <div class=" big-header chapter">
    <h2> Chapitre {{ id }} </h2>
    <h3> {{ title }}</h3>
    <h4> {{ }} </h4>
    <div class="button" @click="play(id)">Commencer</div>
  </div>
</template>

<script>

import game from "../assets/data.json";
import images from "../assets/chapters-images";
import leveling from '../assets/services/save-level';


export default {
  data() {
    return {
      chapter: this.findChapter(),
      id: this.findChapter().id,
      title: this.findChapter().title,
      signs: this.findChapter().signs

    }
  },
  methods: {
    findChapter() {
      return game.chapters.find(chapter => chapter.id === parseInt(this.$route.params.number));
    },
    
    play(id) {
      this.$router.push({ path: `/chapter${id}/game/1` });
    },

  },
  mounted() {
    leveling.updateChapter(this.id);

    const background = document.querySelector('.chapter');
    background.style.backgroundImage = `url(${images['chapter' + this.$route.params.number]})`;
  }
}
</script>