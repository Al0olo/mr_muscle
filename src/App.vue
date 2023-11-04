<template>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/register">Create Member</router-link> | 
    <router-link to="/subscripers">Members</router-link> 
  </nav>
  <router-view/>
</template>

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

<script lang="ts">
import "maz-ui/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    // LocaleChanger,
  },
  data: () => ({
    user: localStorage.getItem("user"),
  }),
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>