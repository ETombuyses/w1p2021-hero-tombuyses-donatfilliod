<template>
  <div :class="mainclass">
    <div class="background"></div>
    <div class="vignette"></div>

    <h1>Vous avez perdu</h1>

    <p class="description">{{ endMessage }}</p>

    <div class="results">
      <h2>Vos statistiques</h2>
      <div class="units">
          <ul>
            <h3>Personnage : {{ character }}</h3>
            <li v-for="skill in characterSkills" :key="skill.name">{{skill.name}} : {{ skill.value }}</li>
          </ul>

        
        <ul>
          <h3>Avancée de l'histoire:</h3>
          <p>Chapitre : {{ chapter }}</p>
          <p>Level : {{ level }}</p>
        </ul>
      </div>
    </div>

    <div class="button" @click="restart()">
      <p>Recommencer</p>
    </div>

    <audio :src="sound" autoplay ref="audio"></audio>
    <div @click="mute($refs.audio, soundIcon)" :class="soundIcon"></div>
  </div>
</template>

<script>
import characterData from "../assets/services/character";
import sounds from "../assets/sounds.js";
import musicParameter from "../assets/services/audio";
import leveling from "../assets/services/save-level";

export default {
  data() {
    return {
      endMessage: localStorage.getItem("lost"),
      character: characterData.character.name,
      characterSkills: characterData.character.skills,
      chapter: localStorage.getItem("chapter"),
      level: localStorage.getItem("level"),
      sound: sounds.lostSound,
      soundIcon: "sound-icon",
      mainclass: "big-header lose fade"
    };
  },
  methods: {
    mute(audio, icon) {
      this.soundIcon = musicParameter.mute(audio, icon);
    },

    restart() {
      //clear storage and go back to the mainscreen
      leveling.level = undefined;
      leveling.chapter = undefined;

      let elements = ["lost", "level", "chapter", "end", "character"];

      elements.forEach(element => {
        localStorage.removeItem(element);
      });
      this.$router.push({ path: "/" });
    }
  },
  mounted() {
    localStorage.setItem("end", "lose");

    //restore sound settings
    this.soundIcon = musicParameter.restoreAudioSettings(this.$refs.audio, this.soundIcon);

    
    setTimeout(() => {
      this.mainclass = "big-header lose"
    }, 1000)
  }
};
</script>
