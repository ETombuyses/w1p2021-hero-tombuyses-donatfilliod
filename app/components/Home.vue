<template>
  <div :class="mainclass">
    <div class="background"></div>
    <div class="vignette"></div>

      <h1>{{ title }}</h1>
      <h2>ལྷ་ཆོས།</h2>
      <div @click="changeRoute()" class="button">
        {{ button }}
      <div class="button__horizontal"></div>
	    <div class="button__vertical"></div>
    </div>

      <audio :src="sound" autoplay loop ref='audio'></audio>
      <div @click="mute($refs.audio, soundIcon)" :class="soundIcon"></div>
  </div>
</template>

<script>

import leveling from '../assets/services/save-level'
import sounds from '../assets/sounds.js'
import musicParameter from '../assets/services/audio'


export default {
  data() {
    return {
      title: "Dharma",
      button: "commencer l'aventure",
      sound: sounds.homeSound,
      soundIcon: "sound-icon",
      mainclass: "big-header home fade",
      nextImage: "../assets/images/crash3.jpg"
    };
  },
  methods: {
    mute(audio, icon) {
      this.soundIcon = musicParameter.mute(audio, icon);
    },
    changeRoute() {
      this.$router.push({path: '/character'});
    }
  },

  mounted() {

    //preload next component image 
    const characterImage = new Image();
    characterImage.src = require("../assets/images/crash3.jpg")

    const wheelImage = new Image();
    wheelImage.src = require("../assets/images/dharmachakra2.png")

    //restore level session

    if (localStorage.getItem('end')) {
      this.$router.push({ path: `/${localStorage.getItem('end')}`});
      
    } else if (leveling.chapter) {

      if (leveling.level) {
        this.$router.push({
          path: `/chapter${leveling.chapter}/game/${leveling.level}`
        });
      } else {
        this.$router.push({ path: `/chapter${leveling.chapter}` });
      }
    }

    //restore sound settings
    this.soundIcon = musicParameter.restoreAudioSettings(this.$refs.audio, this.soundIcon);
 
    setTimeout(() => {
      this.mainclass = "big-header home"
    }, 1000)
  }
};
</script>
