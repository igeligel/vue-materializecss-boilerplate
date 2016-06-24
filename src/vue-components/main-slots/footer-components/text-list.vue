<template>
  <ul>
    <li v-for="item in list">
      <a :href="item.url" class="footer-information" target="_blank" rel="noopener noreferrer">{{item.title}}</a>
    </li>
  </ul>
</template>

<style>

</style>

<script>
module.exports = {
  props: {
    list: {
      name: 'list',
      type: Array
    }
  }
}
</script>
