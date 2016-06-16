<template>
  <navbar></navbar>
  <main>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
  <footer-bar></footer-bar>
</template>

<style>
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>

<script>
import Navbar from './navbar.vue';
import FooterBar from './footer-bar.vue'
export default {
 name: "App",
  components: {
    Navbar,
    FooterBar
  }
}

</script>
