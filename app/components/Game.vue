<template>
  <div class="big-header">
    <transition name="pane">
      <div v-if="transition"></div>
    </transition>

    <h1> {{ chapter.title }} </h1>
    <p v-for="text in chapter.texts" :key="text.id"> {{ text }}</p>
    <p> {{ chapter.question }}</p>

    <!--  on click, we change the route path-->
    <div v-for="action in chapter.actions" class="button" :key="action.name" @click="choiceSelected(action)" > 
      {{ action.name }} 
    </div>
  </div>
</template>



<script>
/*import data.json file */

import game from '../assets/data.json';
import characterUpdate from '../assets/services/character.js';

export default {
  data() {
    return {
      chapter: this.findChapter(),
      transition: false
    }
  },
  methods: {
    //find te right chapter based on url/:id
    findChapter() {
      return game.chapters.find(chapter => chapter.id === parseInt(this.$route.params.id));
    },
    choiceSelected(action) {
      //if there is a condition
      if(action.condition) {
          characterUpdate.updateSkills(action);      
        if (eval(`${characterUpdate[action.condition.skill]} ${action.condition.condition}`)) {
          this.$router.push({path: action.condition.true}) 
        } else {
          this.$router.push({params: {id: action.path}});                    
        }
      }

      //if there is no condition 
      else {
        let nextPath = action.path

        if(nextPath == "win") {
          this.$router.push({path: '/win'})
        } else if (nextPath == "lose") {
          this.$router.push({path: '/lose'})
        } else {
          characterUpdate.updateSkills(action);
          this.$router.push({params: {id: nextPath}})
          localStorage.setItem('save', nextPath);
        }
      }

      //transition doesn't work yet
      // this.transition = !this.transition;

      // setTimeout(function() {
      //   this.transition = !this.transition;
      //   console.log('changed');
      // }, 1000)
    },
  },
  mounted() {
    let save = localStorage.getItem('save');
    
    if(save) {
      this.$router.push({path: save});
    }

    //trigger transition
    this.transition = !this.transition;

  },
  watch: {
     // on url change, change the chapter
    '$route.params.id'(to, from) {
      this.chapter = this.findChapter();
    }
  }
}
</script>
