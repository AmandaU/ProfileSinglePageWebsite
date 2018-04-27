<template>
<div id="app">
 
    <div class="fullpage">
      <div class="navigationbar">
        Jade Ayla
      </div>
       <router-view></router-view>
    </div>
    <div class="floatingmenu">
      <div class="nav hnav">
         <ul>
              <li>
                  <div class="hoveritem" v-on:click="toggle()">Projects </div>
                   <!-- <div class="hoveritem" v-on:click="toggle()">  +  </div> -->
              </li>
              <li>
             <div class="hitem" v-show="isSubMenuOpen" v-on:click="filterProjects('all')">All</div>
            <li>
              <div class="hitem" v-show="isSubMenuOpen" v-on:click="filterProjects('photography')">Photography</div>
            </li>
            <li> <div class="hitem" v-show="isSubMenuOpen" v-on:click="filterProjects('illustration')">Illustration</div>
            </li>
            <li> <div class="hitem" v-show="isSubMenuOpen" v-on:click="filterProjects('styling')">Styling</div>
            </li>
            <li v-on:click="close()" ><router-link  to="/jade">About</router-link></li>
            <li v-on:click="close()"  ><router-link  to="/contact">Contact</router-link></li>
          </ul>
      </div>
      <!-- <div class="nav vnav" v-visible="isSubMenuOpen">
         <ul >
           <li>
             <div class="hitem" v-on:click="filterProjects('all')">All</div>
            <li>
              <div class="hitem" v-on:click="filterProjects('photography')">Photography</div>
            </li>
            <li> <div class="hitem" v-on:click="filterProjects('illustration')">Illustration</div>
            </li>
            <li> <div class="hitem" v-on:click="filterProjects('styling')">Styling</div>
            </li>
         </ul>
      </div> -->
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
     this.$router.push(
        {
         path: link,
        }
     )
 },
    open() {
      this.isSubMenuOpen = true;
    },
    close() {
      this.isSubMenuOpen = false;
    },
    toggle() {
      this.isSubMenuOpen = !this.isSubMenuOpen;
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

