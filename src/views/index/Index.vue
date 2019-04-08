<template>
  <div class="home">
    <Nav/>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'index',
  components: {
    Header,
    Footer,
    Nav
  },
}
</script>
