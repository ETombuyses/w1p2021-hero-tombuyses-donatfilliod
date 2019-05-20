<template>
  <div class="big-header">
    <transition>
      <div class="pane"></div>
    </transition>
    <h1>Définissez votre personnalité</h1>
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
  </div>
</template>

<script>
import characterUpdater from "../assets/services/character.js";
import game from "../assets/data.json";

export default {
  data() {
    return {
      characters: game.characters
    };
  },
  methods: {
    save(character) {
      characterUpdater.save(character);
      this.$router.push({ path: "/chapter1" });
    }
  },
};
</script>
