<template>
  <div class="home">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'index',
  components: {
    Header,
    Footer
  },
  mounted() {
    console.log(this.$route)
  },
}
</script>
