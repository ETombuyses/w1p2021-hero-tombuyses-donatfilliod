<template>
  <div class="big-header game">
    <transition name="fadegame" v-if="transition">
      <div>
        <h1>Chapitre {{ chapter.id }}</h1>
        <div class="story">
          <p class="description" v-for="text in level.texts" :key="text.id">{{ text }}</p>

          <div class="choice">
            <div
              v-for="action in level.actions"
              class="button"
              :key="action.name"
              @click="choiceSelected(action)"
            >{{ action.name }}</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>



<script>
/*import data.json file */

import game from "../assets/data.json";
import characterUpdate from "../assets/services/character.js";
import images from "../assets/chapters-images";
import leveling from "../assets/services/save-level";

export default {
  data() {
    return {
      chapter: this.findChapter(),
      level: this.findLevel(),
      transition: true
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
      this.transition = !this.transition;
      let nextPath = action.path;

      if (action.chapter) {
        this.$router.push({ path: `/chapter${action.chapter}` });
        leveling.updateChapter(action.chapter);
      } else if (nextPath == "win") {
        this.$router.push({ path: "/win" });
      } else if (nextPath == "lose") {
        this.$router.push({ path: "/lose" });
      } else {
        this.$router.push({ params: { id: nextPath } });
        leveling.updateLevel(nextPath);
      }
    },

    choiceSelected(action) {
      //update skills based on the chosen action
      this.update(action);

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
          console.log(action.condition);
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
    }
  },

  mounted() {
    leveling.updateLevel(this.level.id);

    // display the right background
    const background = document.querySelector(".game");
    background.style.backgroundImage = `url(${
      images[
        "chapter" + this.$route.params.number + "level" + this.$route.params.id
      ]
    })`;
  },

  watch: {
    // on url change, change the level
    "$route.params.id"(to, from) {
      setTimeout(() => {
        const background = document.querySelector(".game");
        background.style.backgroundImage = `url(${
          images[
            "chapter" +
              this.$route.params.number +
              "level" +
              this.$route.params.id
          ]
        })`;
        this.level = this.findLevel();

        this.transition = !this.transition;

      }, 1000);
    }
  }
};
</script>
