<template>
  <div :class="css">
    <div class="background"></div>
    <div class="vignette"></div>

    <h1>Chapitre {{ chapter.id }}</h1>
    <img :src="level.img">

    <div class="story">
      <p class="description" v-for="text in level.texts" :key="text.id">{{ text }}</p>

      <div class="choice">
        <div
          v-for="action in level.actions"
          class="game__button"
          :key="action.name"
          @click="choiceSelected(action)"
        >
        <span>{{ action.name }}</span>
        
        </div>
      </div>
    </div>
    <audio :src="sound" autoplay loop ref="audio"></audio>
    <div @click="mute($refs.audio, soundIcon)" :class="soundIcon"></div>
  </div>
</template>



<script>

import game from "../assets/data.json"
import characterUpdate from "../assets/services/character.js"
import images from "../assets/chapters-images"
import leveling from "../assets/services/save-level"
import sounds from '../assets/sounds.js'
import musicParameter from '../assets/services/audio'

export default {
  data() {
    return {
      chapter: this.findChapter(),
      level: this.findLevel(),
      css: "big-header game fade",
      sound: sounds.gameSound,
      soundIcon: "sound-icon"
    };
  },
  methods: {
    //find te right chapter based on url/:id
    findChapter() {
      return game.chapters.find(
        chapter => chapter.id === parseInt(this.$route.params.number)
      );
    },

    findLevel() {
      return this.findChapter().levels.find(
        level => level.id === parseInt(this.$route.params.id)
      );
    },

    update(action) {
      
      characterUpdate.updateSkills(action);
    },

    changePath(action) {
      let nextPath = action.path;

      if (action.chapter) {
        this.$router.push({ path: `/chapter${action.chapter}` });
        leveling.updateChapter(action.chapter);
        
      } else if (nextPath == "win") {
        this.$router.push({ path: "/win" });
      } else if (nextPath == "lose") {
        this.$router.push({ path: "/lose" });
      } else {
        this.css = "big-header game fade";

        setTimeout(() => {
          this.$router.push({ params: { id: nextPath } });
          leveling.updateLevel(nextPath);

          setTimeout(() => {
            this.preloadImages()
          }, 2000)
        }, 800)
        
      }
    },
    checkCondition(action) {
      //if there is a condition
      if (action.condition) {
        //check the condition
        if (
          eval(
            `${
              characterUpdate.character.skills.find(
                skill => skill.name === action.condition.skill
              ).value
            } ${action.condition.condition}`
          )
        ) {
          localStorage.setItem("lost", action.condition.endmessage);
          this.$router.push({ path: action.condition.true });
        } else {
          this.changePath(action);
        }
      }

      //if there is no condition
      else {
        this.changePath(action);
      }
    },

    choiceSelected(action) {
      //update skills based on the chosen action
      this.update(action);

      this.checkCondition(action);
      
    },
    mute(audio, icon) {
      this.soundIcon = musicParameter.mute(audio, icon);
    },

    preloadImages() {

      //preload next component image 
      this.level.actions.forEach(action => {

        if (action.chapter) {
          let chapterImage = new Image()
          chapterImage.src = images[`chapter${action.chapter}`]
        } else {
          let gameImage = new Image();
          gameImage.src = images[`chapter${leveling.chapter}level${action.path}`]
        }

        if (action.condition) {
          let loseImage = new Image();
          let winImage = new Image();

          loseImage.src = require("../assets/images/highmount.jpeg");
          winImage.src = require("../assets/images/lhassa.jpg");
        }
      });
    }
  },

  mounted() {
    leveling.updateLevel(this.level.id)
    
    setTimeout(() => {
      this.preloadImages();
    }, 2000)

    // display the right background
    const background = document.querySelector(".game .background");
    background.style.backgroundImage = `url(${
      images[
        "chapter" + this.$route.params.number + "level" + this.$route.params.id
      ]
    })`;
    
    //restore sound settings
    this.soundIcon = musicParameter.restoreAudioSettings(this.$refs.audio, this.soundIcon);

    let component = document.querySelector('.fade')     
    setTimeout(() => {
      component.classList.remove('fade')
      this.css = "big-header game";
    }, 1000)

  },

  watch: {
    // on url change, change the level
    "$route.params.id"(to, from) {
      const background = document.querySelector(".game .background");
      background.style.backgroundImage = `url(${
        images["chapter" + this.$route.params.number +
            "level" +
            this.$route.params.id
        ]
      })`;

      this.level = this.findLevel();
      this.css = "big-header game";
    }
  }
};
</script>
