<template>
  <div class="big-header">
    <h1>Bravo, vous vous êtes échapé !</h1>
    <p> {{ winMessage }}</p>
    <router-link class="button" to="/">Accueil</router-link>
  </div>
</template>

<script>
export default {
    data() {
      return {
        winMessage: localStorage.getItem('won')
      }
    }
};
</script>
