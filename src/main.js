import Vue from 'vue';
import App from './app';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import './assets/html2canvas.js';

Vue.use(Element);
Vue.component('eleme-header', require('./components/header.vue'));
Vue.component('eleme-aside', require('./components/aside.vue'));

new Vue({ // eslint-disable-line
  el: 'body',
  components: { App }
});
