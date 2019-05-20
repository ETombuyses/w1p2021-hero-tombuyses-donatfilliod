<template>
  <div class="big-header">
    <h1>Perdu</h1>
    <p> {{ endMessage }} </p>
    <h2> Vos statistiques : </h2>
    <h3> Personnage : {{ character }}</h3>
    <ul>
      <li v-for="skill in characterSkills" :key="skill.name"> {{skill.name}} : {{ skill.value }}</li>
    </ul>
    <h3> Avancée de l'histoire: </h3>
    <p>Chapitre : {{ chapter }}</p>
    <p>Level : {{ level }}</p>

    <router-link class="button" to="/">Recommencer</router-link>
  </div>
</template>

<script>

import characterData from '../assets/services/character';

export default {
  data() {
    return {
      endMessage: localStorage.getItem('lost'),
      character: characterData.character.name,
      characterSkills: characterData.character.skills,
      chapter: localStorage.getItem('chapter'),
      level: localStorage.getItem('level'),
    }
  }
    
};
</script>
