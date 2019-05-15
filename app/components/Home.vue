<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/character">Choisir son personnage</router-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'Escape game'
    };
  }, 
  //when we arrive 
  created: function () {
    localStorage.clear()
  }
};

</script>
