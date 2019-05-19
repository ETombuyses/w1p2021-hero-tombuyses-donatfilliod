<template>
  <div class="chapter">
    <h2> Chapitre {{ id }} </h2>
    <h3> {{ title }}</h3>
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
      title: this.findChapter().title
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

    // //restore level session
    // if (leveling.chapter) {

    //   if (leveling.level) {
    //     this.$router.push({ path: `/chapter${leveling.chapter}/game/${leveling.level}` });

    //   } else {
    //     this.$router.push({ path: `/chapter${leveling.chapter}` });
    //   }
    // }
  
    const background = document.querySelector('.chapter');
    background.style.backgroundImage = `url(${images['chapter' + this.$route.params.number]})`;
  }
}
</script>