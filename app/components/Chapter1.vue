<template>
  <div class="big-header">
    <h2> {{ title }} - {{ signs }} </h2>
    <h3> Chapter {{ chapter }}</h3>
    <router-link class="button" to="/game/1">Commencer</router-link>
  </div>
</template>

<script>


export default {
  data() {
    return {
      chapter: 1,
      title: "Les autres",
      signs: "གང་ཟག"
    }
  }
}
</script>