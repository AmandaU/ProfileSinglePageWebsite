

<template>

 <div class="page">
    <div class="navcolumn">
        <h1>{{ slogan }}</h1>
        <h2>{{ designername }}</h2>
    </div>

  <div class="aboutcontainer">
    <div class="centeredcontainer">
      <h1>Education</h1>
      <p>I went to Star of The Sea Convent school in Kalk Bay for primary school. High school was the amazing <a href="https://wwww.cedarhouse.co.za" target="_blank">Cedar House</a>
      <br>I got my BA Fashion Design at <a href="https://www.fedisa.co.za" target="_blank">Fedisa</a> in Cape Town
      </p>
      <br>
       <h1>Design Asthetic</h1>
      <p>I am a flippin great designer and I dig cool stuff. I draw nicely too
      <br> Cape Town is cool
      </p>
    </div>
 
  </div>
   </div>
</template>

<script>
export default {
  name: 'jade',
 
  data () {
    return {
   
      scrollPosition: null,
      slogan: 'I am, by design,',
      designername: 'Jade Ayla' ,
      images: [
        {
          id: 1,
          link: "https://vuejs.org",
          linktitle: "my stuff",
          alt: "On the beach",
           url: "./src/assets/Beach.jpg" 
                }, {
          id: 2,
           link: "https://github.com/vuejs/awesome-vue",
            linktitle: "your stuff",
          alt: "Me first",
           url: "./src/assets/Charging.jpg" 
           }, {
          id: 3,
           link: "http://vue-loader.vuejs.org/",
            linktitle: "her stuff",
          alt: "The Bodyguard",
           url: "./src/assets/Flash.jpg" 
        }, {
          id: 4,
           link: "http://vuejs-templates.github.io/webpack/",
            linktitle: "his stuff",
          alt: "Her Highness",
           url: "./src/assets/Twiggy.jpg" 
        }, {
          id: 5,
           link: "https://twitter.com/vuejs",
            linktitle: "their stuff",
          alt: "Queen Nishati",
           url: "./src/assets/Nishati.jpg" 
        }, {
          id: 6,
           link: "https://chat.vuejs.org",
            linktitle: "just stuff",
          alt: "Sister love",
           url: "./src/assets/PlayFighting.jpg" 
         }
      ]
    }
    
  }
  
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/styles.scss";
  @import "~@/styles/contactstyles.scss";
   @import "~@/styles/containerstyles.scss";
 </style>


