<template>
  <div class="page">
    <div class="navcolumn">
      
        <h1>{{ slogan }}</h1>
            
      </div>

 <div class="projectcontainer">

    <vue-goodshare-facebook 
    page_url="https://github.com" 
    title_social="Facebook"
    has_counter
    has_icon 
  ></vue-goodshare-facebook>

    <vue-goodshare-twitter 
   button_design="gradient"
   page_url="https://vuejsfeed.com/" 
   has_icon 
   has_square_edges
  ></vue-goodshare-twitter>
    
  </div>
 </div>
</template>

<script>

export default {

  name: 'Jade',
   data () {
    return {
      slogan: 'Contact me',
      designername: 'I am awesome' 
    }
  }
  
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/styles.scss";
   @import "~@/styles/leftbarstyles.scss";
 </style>
