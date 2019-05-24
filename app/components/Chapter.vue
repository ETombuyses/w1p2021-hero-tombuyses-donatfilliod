<template>
  <div :class="mainclass">
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
      <div @click="mute($refs.audio, soundIcon)" :class="soundIcon"></div>
  </div>
</template>

<script>

import game from "../assets/data.json"
import images from "../assets/chapters-images"
import leveling from '../assets/services/save-level'
import sounds from '../assets/sounds.js'
import musicParameter from '../assets/services/audio'


export default {
  data() {
    return {
      chapter: this.findChapter(),
      id: this.findChapter().id,
      title: this.findChapter().title,
      signs: this.findChapter().signs,
      sound: sounds.chapterSound,
      soundIcon: "sound-icon",
      mainclass: "big-header chapter fade"
    }
  },
  methods: {
    findChapter() {
      return game.chapters.find(chapter => chapter.id === parseInt(this.$route.params.number));
    },
    
    play(id) {
      this.$router.push({ path: `/chapter${id}/game/1` });
    },

    mute(audio, icon) {
      this.soundIcon = musicParameter.mute(audio, icon);
    }

  },
  mounted() {

    // display the right background
    const background = document.querySelector(".chapter .background");
    background.style.backgroundImage = `url(${
      images[
        "chapter" + this.$route.params.number]
    })`;
    background.backgroundRepeat = 'no-repeat';
    background.backgroundSize = 'cover';
    background.backgroundPosition = 'bottom';

    leveling.updateChapter(this.id);

    //restore sound settings
    this.soundIcon = musicParameter.restoreAudioSettings(this.$refs.audio, this.soundIcon);
    
    setTimeout(() => {
      this.mainclass = "big-header chapter"
    }, 1000)

  }
}
</script>