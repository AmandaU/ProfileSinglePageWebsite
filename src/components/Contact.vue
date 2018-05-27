<template>
  <div class="page">
    <div class="navcolumn">
        <h1>{{ slogan }}</h1>
        <h2>{{ designername }}</h2>
    </div>

  <div class="contactcontainer">
       <div class="verticalscrollcontainer">
         
          <!--a target="_blank" title="follow me on Twitter" href="http://www.twitter.com/ursling">
          <img alt="follow me on twitter" src="https://c866088.ssl.cf3.rackcdn.com/assets/twitter40x40.png" border=0>
          </a>
        <br>
          <a target="_blank" title="follow me on youtube" href="http://www.youtube.com/PLACEHOLDER">
          <img alt="follow me on youtube" src="https://c866088.ssl.cf3.rackcdn.com/assets/youtube40x40.png" border=0>
          </a>-->
          
           <h2><a :href="`mailto:ayla.jade@gmail.com`">ayla.jade@gmail.com</a> </h2>
           <br>
            <h2> <a href="tel:0828391629">0828391629</a> </h2>
            <br>
          <!-- <a target="_blank" title="follow me on instagram" href="http://www.instagram.com/urslingz">
          <img alt="follow me on instagram" src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram40x40.png" border=0>
          </a>
         <br>
          <h2>Follow me on Instagram</h2>
          <a target="_blank" title="follow me on instagram" href="http://www.instagram.com/urslingz">
          <img alt="follow me on instagram" src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram40x40.png" border=0>
          </a>
        <br> 
          <a target="_blank" title="follow us on instagram" href="http://www.instagram.com/urslingz">
          <img alt="follow us on instagram" src="https://c866088.ssl.cf3.rackcdn.com/assets/badgeinstagram.png" border=0>
          </a>
        <br>  -->
          <a href="https://www.instagram.com/urslingz/?ref=badge" class="openig-b- openig-b-16">
          <img src="//badges.instagram.com/static/images/ig-badge-16.png" alt="Instagram" /> 
          <b>AylaRea</b>
          </a>
        <!-- <br>  
          <a href="https://www.instagram.com/urslingz/?ref=badge" class="ig-b- ig-b-v-24">
          <img src="//badges.instagram.com/static/images/ig-badge-view-24.png" alt="Instagram" />
          </a>
        <br> 

            <a target="_blank" title="follow me on facebook" href="https://www.facebook.com/ursling">
            <img alt="follow me on facebook" src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook40x40.png" border=0></a>
        <br>      -->

          <!--vue-goodshare></vue-goodshare>
        <br> 
            <vue-goodshare-facebook 
              button_design="gradient"
              has_square_edges
              page_url="https://www.facebook.com/ursling" 
              title_social="Facebook"
              has_counter
              has_icon >
            </vue-goodshare-facebook>
        <br> 
            <vue-goodshare-twitter 
              button_design="gradient"
              page_url="https://vuejsfeed.com/" 
              has_icon 
              has_square_edges>
          </vue-goodshare-twitter-->
      </div>
  </div>
 </div>
</template>

<script>
// import VueGoodshare from 'vue-goodshare'
// import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
// import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue'
//import VueInstagram from 'vue-instagram'

export default {
 name: 'Jade',

// components: {
//    VueInstagram,
//    VueGoodshare,
//    VueGoodshareTwitter,
//    VueGoodshareFacebook
//   } ,
  
  methods: 
 { 
   fetchToken ()
   {
     this.accessToken = '';
   }
 },
   data : function ()  {
    return {
       slogan: 'Contact me',
      designername: 'I am awesome' ,
      accessToken : ''
      }
  },

created: function () {
  this.fetchToken();
  	},
 
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/styles.scss";
   @import "~@/styles/contactstyles.scss";
   @import "~@/styles/containerstyles.scss";
 </style>
