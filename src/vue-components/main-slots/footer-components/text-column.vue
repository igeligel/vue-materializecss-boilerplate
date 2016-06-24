<template>
  <p class="footer-paragraph">
    {{column.title}}
  </p>
  <text-list
    :list="column.subList"></text-list>
</template>

<style>

</style>

<script>
import TextList from './text-list.vue';

module.exports = {
  components: {
    'text-list': TextList
  },
  props: {
    column: {
      name: 'column',
      type: Object
    }
  }
}
</script>
