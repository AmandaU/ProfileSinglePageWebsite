// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
 import Vue from 'vue'
 import App from './App'
import router from './router'
import VueFire from 'vuefire'

Vue.use(VueFire)

// import VueGoodshare from 'vue-goodshare'

// // Import vue-goodshare single elements
// import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
// import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue'

 new Vue({
   el: '#app',
  
  router,
   template: '<App/>',
  components: { App 
    // ,   VueGoodshareTwitter,
    // VueGoodshareFacebook
  } 
 
 })

