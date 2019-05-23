<template>
  <div class=" big-header chapter">
    <h2> Chapitre {{ id }} </h2>
    <h3> {{ title }}</h3>
    <h4> {{ signs }} </h4>
    <div class="button" @click="play(id)">Commencer</div>

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

    mute(audio, icon) {
      this.soundIcon = musicParameter.mute(audio, icon);
    }

  },
  mounted() {
    leveling.updateChapter(this.id);

    const background = document.querySelector('.chapter');
    background.style.backgroundImage = `url(${images['chapter' + this.$route.params.number]})`;

    //restore sound settings
    this.soundIcon = musicParameter.restoreAudioSettings(this.$refs.audio, this.soundIcon);
  }
}
</script>