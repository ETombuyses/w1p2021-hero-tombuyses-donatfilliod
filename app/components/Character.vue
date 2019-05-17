<template>
  <div class="big-header">
    <h1>Définissez votre personnalité</h1>
    <br />
    <div class="characters">
    <div  v-for="character in characters" class="character" :key="character.name" v-on:click="save(character)">
    <h2 class="character__name"> {{ character.name }} </h2>
    <p> {{ character.description }} </p>
    </div>
    </div>
  </div>
</template>

<script>

import characterUpdater from '../assets/services/character.js';
import game from '../assets/data.json';

export default {
  data() {
    return {
      characters : game.characters
    }
  },
  methods: {
    save(character) {
      characterUpdater.save(character);
      this.$router.push({path: '/chapter1'});
    }
  },
  mounted() {
    //if there is a game save, go to the last reached level
    let save = localStorage.getItem('save');

    if(save) {
      this.$router.push({path: `/game/${save}`});
    }
  }
}
</script>
