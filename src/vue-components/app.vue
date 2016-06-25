<template>
  <div class="wrapper">
    <navbar></navbar>
    <main>
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <footer-content></footer-content>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>

<script>
import Navbar from './main-slots/navbar.vue';
import FooterContent from './main-slots/footer.vue'

export default {
 name: "App",
  components: {
    'navbar': Navbar,
    'footer-content': FooterContent
  }
}

</script>
