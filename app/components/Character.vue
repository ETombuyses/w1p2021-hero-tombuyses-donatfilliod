<template>
  <div class="big-header character__choice">
    <h1>Choix du personnage</h1>
    <p class="description">
      Vous vous réveillez péniblement, avec une douleur aigüe au crâne. <br/>
      Vous souvenirs ressurgissent pendant que vous vous frottez les yeux et tenter de retrouver vos esprits. <br/>
      L'avion. Le feu. Le crash. Vous sentez alors la neige, glacée contre votre peau. <br/>
      Vous avez survécu. Vous gisez aux milieu des décombres de l'épave de votre avion, seul, terrifié, sans affaires.
      Autour de vous, les montagnes enneigées de l'Himalaya se dressent en immenses remparts, cherchant à attraper le ciel d'un bleu sans nuages. <br/>
      Vous devez trouver un moyen de rejoindre la ville la plus proche. Rassemblant vos dernières forces et derniers espoirs, vous
      savez que vous pouvez compter sur vos ressources pour vous sortir de ce pétrin.
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
