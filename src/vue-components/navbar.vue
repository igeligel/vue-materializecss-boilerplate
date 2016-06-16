<template>
  <header>
    <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" v-link="{ path: '/home'}" class="brand-logo" style="color: #616161">Logo</a>
        <ul class="right hide-on-med-and-down">
          <template v-for="menuEntry in menu">
            <li v-bind:class="{ active : menuEntry.active}"><a v-link="{ path: menuEntry.path}" style="color: #00897b" v-on:click="makeActive(menuEntry, $event)">{{menuEntry.name}}</a></li>
          </template>
        </ul>
        <ul id="nav-mobile" class="side-nav">
          <template v-for="menuEntry in menu">
            <li v-bind:class="{ active : menuEntry.active}"><a v-link="{ path: menuEntry.path}" style="color: #00897b" v-on:click="makeActive(menuEntry, $event)">{{menuEntry.name}}</a></li>
          </template>
        </ul>
        <a href="" data-activates="nav-mobile" class="button-collapse" style="color: black"><i class="material-icons" style="color: black">menu</i></a>
      </div>
    </nav>
  </header>
</template>

<style>
</style>

<script>
import _ from 'lodash';

module.exports = {
  props: {
  },
  data() {
    return {
      menu: [{
        name: 'Home',
        active: false,
        path: '/home'
      }, {
        name: 'Test',
        active: false,
        path: '/test'
      }]
    }
  },
  methods: {
    makeActive: function(menuEntry, event) {
      this.menu.forEach(function(element) { element.active = false; });
      var obj = _.find(this.menu, function(obj) { return obj.name === menuEntry.name });
      if (obj !== undefined) {
        obj.active = true;
      }
    },
    makeActiveByPath: function(path) {
      this.menu.forEach(function(element) { element.active = false; });
      var obj = _.find(this.menu, function(obj) { return obj.path === path });
      if (obj !== undefined) {
        obj.active = true;
      }
    }
  },
  ready: function () {
    this.makeActiveByPath(this.$route.path);
  },
  computed: {
  }
}
</script>
