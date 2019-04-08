<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/index">Test</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  mounted() {
    console.log(this.$route)
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
