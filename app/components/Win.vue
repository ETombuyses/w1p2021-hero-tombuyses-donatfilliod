<template>
  <div :class="mainclass">
    <div class="background"></div>
    <div class="vignette"></div>

    <h1>Vous avez réussi</h1>
    <p class="description">Vous êtes passés sans encombres par les Portes du Jugement. Vous voilà arrivé à Lhassa, cité mythique des plateaux de l'Himalaya, abritant le Palais du Potala, demeure du vénéré dalaï-lama. Les murs blancs de la ville défilent sous vos yeux, reflétant la lumière du soleil qui réchauffe vos membres et votre esprits, tous deux marqués par les épreuves que vous avez surmonté pour parvenir jusqu'ici. Ces dernières, bien qu'étant à présent gravé dans votre mémoire à jamais, vous a fait grandir a fait de vous un être accompli, ayant trouvé son propre Dharma.</p>
    <!--<p> {{ winMessage }}</p>-->

    <div class="results">
      <h2> Vos statistiques : </h2>
      <div class="units">
        
        <ul>
          <h3> Personnage : {{ character }}</h3>
          <li v-for="skill in characterSkills" :key="skill.name"> {{skill.name}} : {{ skill.value }}</li>
        </ul>

        <ul>
          <h3> Avancée de l'histoire: </h3>
          <p>Chapitre : {{ chapter }}</p>
          <p>Level : {{ level }}</p>
        </ul>
      </div>
    </div>

    <div class="button" @click="restart()">Retourner à l'accueil</div>

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
      soundIcon: "sound-icon",
      mainclass: "big-header win fade"
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
    localStorage.setItem("end", "win");

    //restore sound settings
    this.soundIcon = musicParameter.restoreAudioSettings(this.$refs.audio, this.soundIcon);

    setTimeout(() => {
      this.mainclass = "big-header win"
    }, 1000)
  }
};
</script>
