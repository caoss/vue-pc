<template>
  <div class="about">
    <Nav />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'index',
  components: {
    Nav
  },
}
</script>