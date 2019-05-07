<template>
  <div class="big-header">
    <h1> {{ title }} </h1>
    <br />
    <router-link class="button" v-on:click="idUpdate" :to="pathA" > {{ optionA }} </router-link>
  </div>
</template>





<script>
//import data.JSON file
let game = require('../assets/data.json');


export default {
  
  methods: {
    idUpdate() {
      console.log("cliqué");
      game.state.id = game.levels[`phase${game.state.id}`].actions.A.route;
      console.log(game.state.id);
    }
  },
  computed: {
    title() {
      return game.levels[`phase${game.state.id}`].title;
    },
    pathA() {
      return `/game/${game.levels[`phase${game.state.id}`].actions.A.route}`;
    }, 
    optionA() {
      return game.levels.phase1.actions.A.name;
    }
  }
}
</script>
