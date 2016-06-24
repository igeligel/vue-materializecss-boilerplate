<template>
  <p class="social-icons-paragraph">
    <template v-for="item in column.icons">
      <a class="white-text" :href="item.url">
        <i aria-hidden="true" :class="'fa ' + item.fontAwesomeIcon" target="_blank" rel="noopener noreferrer"></i>
      </a>
    </template>
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
