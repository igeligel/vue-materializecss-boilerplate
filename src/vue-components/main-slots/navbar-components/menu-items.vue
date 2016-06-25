<template>
  <ul class="right hide-on-med-and-down">
    <template v-for="menuEntry in menu">
      <li v-bind:class="{ active : menuEntry.active}">
        <a v-link="{ path: menuEntry.path}" v-on:click="makeActive(menuEntry, $event)" class="menu-entry">{{menuEntry.name}}</a>
      </li>
    </template>
  </ul>
</template>

<style>
.menu-entry {
  color: #00897b !important;
}
</style>

<script>
module.exports = {
  props: {
    menu: {
      name: 'menu',
      type: Array
    }
  },
  methods: {
    makeActive: function(menuEntry, event) {
      this.$dispatch('menuClicked', menuEntry, event);
    }
  }
}
</script>
