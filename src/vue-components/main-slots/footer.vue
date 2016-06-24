<template>
  <footer class="page-footer teal darken-3">
    <div class="container">
      <div class="row">
        <div class="col m3 s12">
          <p class="footer-paragraph">
            Column 1
          </p>
          <ul>
            <li>
              <a href="#" class="footer-information">Point 1</a>
            </li>
          </ul>
        </div>
        <div class="col m3 s12">
          <p class="footer-paragraph">
            Column 2
          </p>
          <ul>
            <li>
              <a href="#" class="footer-information">
                Point 1
              </a>
            </li>
            <li>
              <a href="#" class="footer-information">
                Point 2
              </a>
            </li>
            <li>
              <a href="#" class="footer-information">
                Point 3
              </a>
            </li>
            <li>
              <a href="#" class="footer-information">
                Point 4
              </a>
            </li>
          </ul>
        </div>
        <div class="col m3 s12">
          <p class="footer-paragraph">
            Column 3
          </p>
          <ul>
            <li>
              <a href="#" class="footer-information">
                Point 1
              </a>
            </li>
            <li>
              <a href="#" class="footer-information">
                Point 2
              </a>
            </li>
          </ul>
        </div>
        <div class="col m3 s12">
          <p class="social-icons-paragraph">
            <a class="white-text">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a class="white-text">
              <i class="fa fa-paypal" aria-hidden="true"></i>
            </a>
          </p>
          <ul>
            <li>
              <a href="#" class="footer-information">
                Point 1
              </a>
            </li>
            <li>
              <a href="#" class="footer-information">
                Point 2
              </a>
            </li>
            <li>
              <a href="#" class="footer-information">
                Point 3
              </a>
            </li>
          </ul>
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
module.exports = {
  props: {
  },
  ready: function () {
  },
  data() {
    return {
      columns: {
        first-column: {

        }, second-column: {

        }, third-column: {

        }, fourth-column: {
          
        }
      }
    }
  },
  computed: {
  }
}
</script>
