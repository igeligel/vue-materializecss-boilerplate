<template>
  <footer class="page-footer teal darken-3">
    <div class="container">
      <div class="row">
        <div class="col m3 s12">
          <text-footer-column
            :column="columns.firstColumn"></text-footer-column>
        </div>
        <div class="col m3 s12">
          <text-footer-column
            :column="columns.secondColumn"></text-footer-column>
        </div>
        <div class="col m3 s12">
          <text-footer-column
            :column="columns.thirdColumn"></text-footer-column>
        </div>
        <div class="col m3 s12">
          <icon-header-text-column
            :column="columns.fourthColumn"></icon-header-text-column>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer-paragraph {
  line-height: 24px;
  font-size: 16px;
  color: #FFFFFF;
}

.social-icons-paragraph {
  font-size: 22px;
  line-height: 22px;
  margin-bottom: -8px;
}

.footer-information {
  line-height: 32px;
  font-size: 16px;
  color: #FFFFFF;
}
</style>

<script>
import TextColumn from './footer-components/text-column.vue';
import IconHeaderTextColumn from './footer-components/icon-header-text-column.vue';

module.exports = {
  components: {
    'text-footer-column': TextColumn,
    'icon-header-text-column': IconHeaderTextColumn
  },
  props: {
  },
  ready: function () {
  },
  data() {
    return {
      columns: {
        firstColumn: {
          title: 'This project',
          subList: [{
              title: 'GitHub Repository',
              url: 'https://github.com/igeligel/vue-materializecss-boilerplate'
            }
          ]
        },
        secondColumn: {
          title: 'Documentation',
          subList: [{
              title: 'at GitHub',
              url: 'https://github.com/igeligel/vue-materializecss-boilerplate'
            }, {
              title: 'at this site',
              url: 'https://github.com/igeligel/vue-materializecss-boilerplate'
            }
          ]
        },
        thirdColumn: {
          title: '',
          subList: []
        },
        fourthColumn: {
          icons: [{
            fontAwesomeIcon: 'fa-github',
            url: 'https://github.com/igeligel/vue-materializecss-boilerplate'
          }, {
            fontAwesomeIcon: 'fa-paypal',
            url: 'https://www.google.com'
          }],
          subList: [{
              title: 'GitHub Repository',
              url: 'https://github.com/igeligel/vue-materializecss-boilerplate'
            }, {
              title: 'GitHub Repository 2',
              url: 'https://github.com/igeligel/vue-materializecss-boilerplate'
            }
          ]
        }
      }
    }
  },
  computed: {
  }
}
</script>
