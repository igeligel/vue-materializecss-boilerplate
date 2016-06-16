import Vue from 'vue';
import App from './vue-components/app.vue';
import Home from './vue-components/home.vue';
import Test from './vue-components/test.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

var router = new VueRouter();

router.map({
  '/': {
    component: Home
  },
  'home': {
    component: Home
  },
  '/test': {
    component: Test
  }
});

router.afterEach(function(transition) {
    removeElementsByClass('vuescripts');
    loadjscssfile('https://code.jquery.com/jquery-2.1.1.min.js', 'js', false);
    loadjscssfile('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js', 'js', false);
    if (transition.to.path === '/test') {
      loadjscssfile('src/js/modals.js', 'js', false);
      loadjscssfile('src/js/parallax.js', 'js', false);
    }
});

router.start(App, '#app', function() {
  loadjscssfile('https://code.jquery.com/jquery-2.1.1.min.js', 'js', false);
  loadjscssfile('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js', 'js', false);
  loadjscssfile('src/js/sidebar.js', 'js', true);
});


function loadjscssfile(filename, filetype, loadOnce) {
  var cssNode;
  if (loadOnce) {
    cssNode = document.createElement('script');
    cssNode.setAttribute('type', 'text/javascript');
    cssNode.setAttribute('src', filename);
  }
  else if (filetype === 'js') {
    cssNode = document.createElement('script');
    cssNode.setAttribute('type', 'text/javascript');
    cssNode.setAttribute('src', filename);
    cssNode.setAttribute('class', 'vuescripts');
  } else if (filetype === 'css') {
    cssNode = document.createElement('link');
    cssNode.setAttribute('rel', 'stylesheet');
    cssNode.setAttribute('type', 'text/css');
    cssNode.setAttribute('href', filename);
  }
  if (typeof cssNode !== 'undefined') {
    document.getElementsByTagName('head')[0].appendChild(cssNode);
  }
}

function removeElementsByClass(className) {
  var elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
