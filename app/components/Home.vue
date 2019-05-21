<template>
  <div class="big-header home">
     <div class="title">
      <h1>{{ title }}</h1>
      <h2>ལྷ་ཆོས།</h2>
    </div>
      <router-link to="/character" class="button">{{ button }}</router-link>

      <audio :src="sound" autoplay loop ref='audio'></audio>
      <div @click="mute()" :class="soundIcon"></div>
  </div>
</template>

<script>

import leveling from '../assets/services/save-level'
import sounds from '../assets/sounds.js'


export default {
  data() {
    return {
      title: "Dharma",
      button: "commencer l'aventure",
      sound: sounds.homeSound,
      soundIcon: "sound-icon"
    };
  },
  methods: {
    mute() {
      this.$refs.audio.muted = !this.$refs.audio.muted
      if (this.soundIcon == "sound-icon") {
        this.soundIcon = "sound-icon muted"
        localStorage.setItem('audio', false)
      } else {
        this.soundIcon = "sound-icon"
        localStorage.setItem('audio', true)
      }
    }
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

    //lower audio volume and restore sound settings
     this.$refs.audio.volume = 0.3
     let volume = localStorage.getItem('audio')
     if (volume) {
       if (eval(volume) === false) {
         this.mute()
       }
     }
  }
};
</script>
