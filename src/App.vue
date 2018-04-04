<template>
<div id="app">
 
    <div class="fullpage">
      <div class="navigationbar">
        Jade Ayla
      </div>
       <router-view></router-view>
    </div>
    
    <div class="navigation horizontalnavigation">
       
          <li ><router-link to="/">Home </router-link></li>
          <li ><router-link to="/jade">About me</router-link></li>
          <li ><router-link to="/contact">Contact Me</router-link></li>
      </div>

  </div>
  
</template>


<script>
export default {
  name: 'app',
 
  data () {
    return {
  
    openerText: 'Open',
    isOpen: false,
    // menu: [
    //     {
    //       id: 1,
    //       linktitle: "Home",
    //        routerlink: "/ "
    //      },
    //      {
    //       id: 2,
    //       linktitle: "PR",
    //        routerlink: "/jade "
    //       },
    //       {
    //       id: 3,
    //        linktitle: "Contact me",
    //        routerlink: "/contact "
    //       }]
    }},

  methods: {
    open() {
      this.openerText = 'Close';
      this.isOpen = true;
    },
    close() {
      this.openerText = 'Open';
      this.isOpen = false;
    },
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }
}
</script>
   

<style lang="scss" scoped>
  @import "~@/styles/styles.scss";
  @import "~@/styles/navigation.scss";
 </style>

