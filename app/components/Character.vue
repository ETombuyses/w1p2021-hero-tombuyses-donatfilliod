<template>
  <div class="big-header character__choice">
    <div class="background"></div>
    <div class="vignette"></div>

    <h1>Choix du personnage</h1>
    <p class="description">
      Vous vous réveillez péniblement, avec une douleur aigüe au crâne.
      Vous souvenirs ressurgissent pendant que vous vous frottez les yeux et tenter de retrouver vos esprits. <br/>
      L'avion. Le feu. Le crash.<br/> Vous sentez alors la neige, glacée contre votre peau. 
      Vous avez survécu. <br/> Vous gisez aux milieu des décombres de l'épave de votre avion, seul, terrifié, sans affaires.
      Autour de vous, les montagnes enneigées de l'Himalaya se dressent en immenses remparts, cherchant à attraper le ciel d'un bleu sans nuages. <br/>
      Vous devez trouver un moyen de rejoindre la ville la plus proche. Rassemblant vos dernières forces et derniers espoirs, vous
      savez que vous pouvez compter sur vos ressources pour vous sortir de ce pétrin, <br/>
      car vous êtes un...
    </p>
    <div class="characters">
      <div
        v-for="character in characters" class="character" :key="character.name" v-on:click="save(character)"
      >
        <h2 class="character__name">{{ character.name }}</h2>
        <p>{{ character.description }}</p>
        <ul>
          <li v-for="skill in character.skills" :key="skill.name"> {{ skill.name }} : {{ skill.value}}</li>
        </ul>
      </div>
    </div>
    <audio :src="sound" autoplay loop ref='audio'></audio>
      <div @click="mute()" :class="soundIcon"></div>
  </div>
</template>

<script>
import characterUpdater from "../assets/services/character.js";
import game from "../assets/data.json";
import sounds from '../assets/sounds.js'


export default {
  data() {
    return {
      characters: game.characters,
      sound: sounds.characterSound,
      soundIcon: "sound-icon"
    };
  },
  methods: {
    save(character) {
      characterUpdater.save(character);
      this.$router.push({ path: "/chapter1" });
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
