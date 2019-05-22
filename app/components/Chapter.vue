<template>
  <div class=" big-header chapter">
    <div class="background"></div>
    <div class="vignette"></div>
    <h2> Chapitre {{ id }} </h2>
    <h3> {{ title }}</h3>
    <h4> {{ signs }} </h4>
    <div class="button" @click="play(id)">
      Commencer
      <div class="button__horizontal"></div>
	    <div class="button__vertical"></div>
    </div>

     <audio :src="sound" autoplay loop ref='audio'></audio>
      <div @click="mute()" :class="soundIcon"></div>
  </div>
</template>

<script>

import game from "../assets/data.json";
import images from "../assets/chapters-images";
import leveling from '../assets/services/save-level';
import sounds from '../assets/sounds.js';


export default {
  data() {
    return {
      chapter: this.findChapter(),
      id: this.findChapter().id,
      title: this.findChapter().title,
      signs: this.findChapter().signs,
      sound: sounds.chapterSound,
      soundIcon: "sound-icon"
    }
  },
  methods: {
    findChapter() {
      return game.chapters.find(chapter => chapter.id === parseInt(this.$route.params.number));
    },
    
    play(id) {
      this.$router.push({ path: `/chapter${id}/game/1` });
    },

    mute() {
      this.$refs.audio.muted = !this.$refs.audio.muted
      if (this.soundIcon == "sound-icon") {
        this.soundIcon = "sound-icon muted"
      } else {
        this.soundIcon = "sound-icon"
      }
    }

  },
  mounted() {
    leveling.updateChapter(this.id);

    const background = document.querySelector('.chapter background');
    background.style.backgroundImage = `url(${images['chapter' + this.$route.params.number]})`;

    //lower audio volume and restore sound settings
    this.$refs.audio.volume = 0.3
    let volume = localStorage.getItem('audio')
    if (volume) {
      if (eval(volume) === false) {
        this.mute()
      }
    }
  }
}
</script>