<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Bienvenido a Vue.js App" /> -->
    <AppHeader />
    <!-- <router-link to="/home">Ir a home</router-link> -->
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
/* import HelloWorld from "./components/HelloWorld.vue"; */

import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    /* },
  data() {
    return {
      miPropiedad: "Hola",
    }; */
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
