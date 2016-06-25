<template>
  <header>
    <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" v-link="{ path: '/home'}" class="brand-logo hide-on-small-only" style="color: #616161" v-on:click="makeActiveByPath('/home')">vue-materializecss-boilerplate</a>
        <a id="logo-container" v-link="{ path: '/home'}" class="brand-logo hide-on-med-and-up" v-on:click="makeActiveByPath('/home')">
          <img height="56" width="56" src="../../../static/favicon-62.png" />
        </a>
        <menu-items
          :menu="menu"></menu-items>
        <mobile-menu-items
          :menu="menu"></mobile-menu-items>
        <a href="" data-activates="nav-mobile" class="button-collapse black-color">
          <i class="material-icons black-color">menu</i>
        </a>
      </div>
    </nav>
  </header>
</template>

<style>
.black-color {
  color: black;
}
</style>

<script>
import _ from 'lodash';

// Components.
import MenuItems from './navbar-components/menu-items.vue';
import MobileMenuItems from './navbar-components/mobile-menu-items.vue'

module.exports = {
  components: {
    'menu-items': MenuItems,
    'mobile-menu-items': MobileMenuItems
  },
  props: {
  },
  data() {
    return {
      menu: [{
        name: 'Home',
        active: false,
        path: '/home'
      }, {
        name: 'Examples',
        active: false,
        path: '/examples'
      }]
    }
  },
  events: {
    'menuClicked': function(menuEntry, event) {
      this.makeActive(menuEntry, event);
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
    var path = this.$route.path;
    if (path === '/') {
      path = '/home'
    }
    this.makeActiveByPath(path);
  }
}
</script>
