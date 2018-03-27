

<template>
  <div class="jadea">
         <h1>{{slogan}}</h1>
    <h2>{{ designername }}</h2>

 <div class="scrollmenu">
    <div  v-for="image in images" v-bind:key=image.id  >
        <h1>{{ image.alt }}</h1>
        <img  v-bind:src="image.url" width=80%  />
        <p align=center><a v-bind:href="image.link" v-bind:target="_blank">{{ image.linktitle }}</a></p>
        
      </div>

    </div>

    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
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
  @import "~@/styles/styles.scss"
 </style>


