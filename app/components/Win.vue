<template>
  <div class="big-header">
    <h1>Bravo, vous vous êtes échapé !</h1>
    <p> {{ winMessage }}</p>

    <h2> Vos statistiques : </h2>
    <h3> Personnage : {{ character }}</h3>
    <ul>
      <li v-for="skill in characterSkills" :key="skill.name"> {{skill.name}} : {{ skill.value }}</li>
    </ul>
    <h3> Avancée de l'histoire: </h3>
    <p>Chapitre : {{ chapter }}</p>
    <p>Level : {{ level }}</p>

    <div class="button" @click="restart()">Accueil</div>

    <audio :src="sound" autoplay ref='audio'></audio>
    <div @click="mute($refs.audio, soundIcon)" :class="soundIcon"></div>
  </div>
</template>

<script>

import sounds from '../assets/sounds.js'
import characterData from '../assets/services/character'
import musicParameter from '../assets/services/audio'
import leveling from '../assets/services/save-level'


export default {
  data() {
    return {
      winMessage: localStorage.getItem('won'),
      character: characterData.character.name,
      characterSkills: characterData.character.skills,
      chapter: localStorage.getItem('chapter'),
      level: localStorage.getItem('level'),
      sound: sounds.winSound,
      soundIcon: "sound-icon"
    }
  },
  methods: {
    mute(audio, icon) {
      this.soundIcon = musicParameter.mute(audio, icon);
    },

    restart() {
      //clear storage and go back to the mainscreen
      leveling.level = undefined
      leveling.chapter = undefined

      let elements = ['won', 'level', 'chapter', 'end', 'character'];

      elements.forEach(element => {
        localStorage.removeItem(element)
      })
      this.$router.push({path: '/'})
    }
  },
  mounted() {
    //restore sound settings
    this.soundIcon = musicParameter.restoreAudioSettings(this.$refs.audio, this.soundIcon);
  }
};
</script>
