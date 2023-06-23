<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
      <CustomSnack></CustomSnack>
    </v-main>
    <v-footer app> </v-footer>
  </v-app>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import CustomSnack from "@/components/CustomSnack.vue";
export default {
  components: {
    NavBar,
    CustomSnack,
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
