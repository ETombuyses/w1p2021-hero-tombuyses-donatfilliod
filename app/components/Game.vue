<template>
  <transition>
    <div class="big-header">
      <h1> {{ title }} </h1>
      <br />
      <!--  on click, we change the route path-->
      <router-link class="button" :to="pathA" > {{ optionA }} </router-link>
    </div>
  </transition>
</template>



<script>
/*import data.json file */
let game = require('../assets/data.json');

export default {
  data() {
    return {
      id: localStorage.getItem("level")
    }
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
     /* when the id in the url changes, it changes the game id and save it as the last level reached */
     // does not work when we try to cheat by changing the url manually
     //only a click on a choice does change the id in the url 
     // OR a click on "go back / go prev" on the browser

    '$route.params.id': function(id) {
      localStorage.setItem("level", id)      
      this.id = id;
    }
  },

  //we set the first level to 1 for the first time we enter the game
  beforeCreate: function() {
    if(!localStorage.getItem('level')) {
      localStorage.setItem('level', 1)
    } 
  }
}
</script>
