import Vue from 'vue';
import App from '@/views/layouts/app';
import BalmUI from 'balm-ui'; 
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; 

Vue.config.productionTip = false;
Vue.use(BalmUI); 
Vue.use(BalmUIPlus); 

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
