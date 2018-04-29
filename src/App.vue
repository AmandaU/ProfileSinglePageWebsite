<template>
<div id="app">
 
    <div class="fullpage">
      <div class="navigationbar">
        Jade Ayla
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

export default {
  name: 'app',
 
  data () {
    return {
      isSubMenuOpen: false,
        }},

  methods: {
    
     filterProjects (filter) {
       //debugger;
     this.$router.push(
        {
         path: filter,
        }
     )
 },
    open() {
      this.isSubMenuOpen = true;
    },
    close(link) {
      this.isSubMenuOpen = false;
      this.$router.push(
        {
         path: link,
        }
     )
    },
    toggle() {
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

