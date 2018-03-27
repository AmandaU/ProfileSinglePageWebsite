<template>
<div class="page">
 <div class="navcolumn">
    
     <h1>{{ title }}</h1>
      <p v-html="splurb"></p>
     <h2>{{ subtitle }}</h2>
  </div>

 <div class="projectcontainer">
    <div class="rows">
       <div class="imagebox" v-for="image in images" v-bind:key="image.id">
           <img v-bind:src="image.url" v-bind:alt="image.alt" >
      </div>
    </div>
  </div>
 </div>
  
</template>

<script>

import jsondata from '../assets/data.json'
let projectsjson = jsondata
let nameparam = '';
let title = '';
let subtitle = '';
let splurb = '';
let images = [];
let clientwebsite = '';

export default {
  name: 'Project',

methods: 
{ 
   fetchProject ()
   {
    console.log('route', this.$route.params.name);
    this.nameparam = this.$route.params.name;
    console.log('route name', this.nameparam);
    var project = projectsjson.find(item => item.projectid === this.nameparam);

    this.title = project.projecttitle;
    this.subtitle = project.projectsubtitle;
    this.clientwebsite = project.clientwebsite;
    this.splurb = project.splurb.join("\n");
    this.images = project.photos;

   }
},
   data : function ()  {
    return {
      projects: projectsjson,
      title : '',
     description : '',
     splurb: '',
     images: [],
      }
  },

created: function () {
  this.fetchProject();
  	},
} 
</script>

<style lang="scss" scoped>
  @import "~@/styles/styles.scss";
   @import "~@/styles/leftbarstyles.scss";
 </style>


