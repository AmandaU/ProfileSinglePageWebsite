<template>
<div id="app">
 
    <div class="fullpage">
       <div class="logo">
          <Jayla ref="jayla"
         :loop="false"
         :sizing="contain"
        :states="{ JaylaOpacity: { value: this.jaylaOpacity} }"
        :haikuComponentDidMount="updateOpacity"
     
          ></Jayla>
        </div>
      <div class="navigationbar">
       
          <div class="dropdownmenu">
            <div class="hoveritem" v-on:click="toggle()">Projects </div>
             <div class=" hoversubitem" v-show="isSubMenuOpen" v-on:click="filterProjects('/main/photography')">Photography</div>
             <div class=" hoversubitem" v-show="isSubMenuOpen" v-on:click="filterProjects('/main/illustration')">Illustration</div>
             <div class=" hoversubitem" v-show="isSubMenuOpen" v-on:click="filterProjects('/main/styling')">Styling</div>
             <div class="hoveritem" v-on:click="close('/jade')" >About</div>
             <div class="hoveritem" v-on:click="close('/contact')"  >Contact </div>
         </div>
      </div>
       <router-view></router-view>
    </div>
    
   </div>
  
</template>

<script>
//Begin Haiku Core
// import Vue from 'vue';
 //import HaikuCore from "@haiku/core/dom";

//End Haiku Core
 import Jayla from '@haiku/ursling-jayla/vue';



export default {
  name: 'app',

   components: {
      Jayla
      },

  computed: {
   
  },

  data () {
    return {
      isSubMenuOpen: false,
      jaylaOpacity :1
      }},

  methods: {

    updateOpacity: function (component) {
          component.haiku.setState({
      JaylaOpacity: 1
      });
      },

      filterProjects (filter) {
       //debugger;
     this.$router.push(
        {
         path: filter,
        }
     )
 },
    open() {
      this.playSignature();
      this.isSubMenuOpen = true;
    },

    close(link) {
      this.playSignature();
      this.isSubMenuOpen = false;
      this.$router.push(
        {
         path: link,
        }
     )
    },

    playSignature()
    {
      var timeline = this.$refs.jayla.haiku.getDefaultTimeline();
      if(!timeline.isPlaying())      timeline.gotoAndPlay(0);
    },

    toggle() {
     
     this.playSignature();
  
      this.isSubMenuOpen = !this.isSubMenuOpen;
      this.filterProjects('/main/all');
    },

     showAll() {
      this.$router.push(
        {
         path: "/"
        }
     )
    }
  }
}
</script>
  
<style lang="scss" scoped>
  @import "~@/styles/styles.scss";
  @import "~@/styles/navigation.scss";
 </style>

````