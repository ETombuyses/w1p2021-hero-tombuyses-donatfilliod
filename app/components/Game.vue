<template>
  <div class="big-header">
    <h1> {{ title }} </h1>
    <br />
    <router-link class="button" :to="pathA" > {{ optionA }} </router-link>
  </div>
</template>





<script>
//import data.json file
let game = require('../assets/data.json');


export default {
  data() {
    return {id: 1}
  },
  computed: {
    title() {
      return game.levels[`phase${this.id}`].title;
    },
    pathA() {
      return `/game/${game.levels[`phase${this.id}`].actions.A.route}`;
    }, 
    optionA() {
      return game.levels[`phase${this.id}`].actions.A.name;
    }
  },
   watch: {
    '$route.params.id': function(id) {
      console.log(id);
      this.id = id;
      
    }
  }
}
</script>
