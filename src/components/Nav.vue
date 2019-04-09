<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/index">Test</router-link>|
    <router-link to="/index/test2">test2</router-link>
  </div>
</template>
<script>
export default {
  name: "nav",
  data() {
    return {
      isActive:false
    }
  },
  mounted() {
    console.log(this.$route)
    
  },
};
</script>