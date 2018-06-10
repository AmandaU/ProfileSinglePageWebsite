<template>
  
  <div class="photocontainer">

     <media :query="{maxWidth: 800}" @media-enter="media800Enter" @media-leave="media800Leave"> </Media> 
      
        <div  v-bind:class="[isRow ? 'rowstyle' : 'cols']">  
                <div  v-bind:key="project.id" v-for="project in filterProjects" v-on:click="redirectToProject(project.projectlink)" >
                 <div  :style="getImageStyle(project)"  > 
                  <img v-bind:src="project.linkphotourl" :style="getImageStyle(project)"  > 
                    <div  class="hoverLayer" >
                       <ul class="centerInHover" >  
                        <li >{{project.projecttitle}}</li>
                        <li >{{project.projectsubtitle}}</li>
                      </ul>
                  </div>  
                 </div> 
                  
               </div> 
        </div>  
    </div>
  
</template>
  <!-- :style="getImageStyle(project)" -->
<script>
import jsondata from '../assets/data.json'
import Media from 'vue-media'

let projectsjson = jsondata;
let projects = [];
let filterparam = '';

// import db from './firebaseInit'
// let projectsRef = db.ref('projects')

//let storageRef = Firebase.storage().ref();

export default {
  name: 'mainpage',

   components: {
    Media
  },

//    firebase: {
//     projects: projectsRef
// },

 created () {
    this.filterProjects();
    
  },

mounted() {
   window.addEventListener('resize', this.handleWindowResize);
    },

  beforeDestroy: function () {
  window.removeEventListener('resize', this.handleWindowResize)
},


data () {
    return {
        projects : [],
        isRow: false,
        greaterThan800: window.innerWidth > 800,
        containerWidth: window.innerWidth > 800? window.innerWidth/3: window.innerWidth > 600? window.innerWidth/ 2: window.innerWidth,
        criteria:[]
    }
  },
 
 computed: {
  
  filterProjects: function () {
         console.log('route', this.$route.params.projectfilter);
        this.filterparam = this.$route.params.projectfilter;
        console.log('route name', this.filterparam);

         if(this.filterparam == 'all') 
        {
           this.isRow = false;

          return projectsjson;
        }
        else
        {
           var list =  projectsjson.filter(project => {
            return project.projecttype == this.filterparam;
             });
             this.isRow = this.greaterThan800?  list.length <= 4: false;
         return list;
        } 
    }
  },

methods: {

      handleWindowResize(event) { 
        if(window.innerWidth < 600)
        {
          this.containerWidth = event.currentTarget.innerWidth;
        }
        else
        if(window.innerWidth < 800)
        {
          this.containerWidth = event.currentTarget.innerWidth/2;
        }
        else
          this.containerWidth = event.currentTarget.innerWidth/3; 
    },

      getImageStyle: function (project) { 
       var t = project.ratio * this.containerWidth;
          return  {
          //   'background-image':'url("' + project.linkphotourl + '")',
          //  'width': '100%',
          //  'background-repeat': 'no-repeat',
          // 'background-size': 'contain',
          // 'height': t + 'px',
           'background-color':'rgb(247, 107, 149)',
           'max-width': '100%',
           'width': this.containerWidth + 'px',
           'height': t + 'px',
           'position': 'relative'
          
        }
    },

    getTextStyle: function () { 
       
          return  {
          'position': 'absolute',
          'top': '50%',
          'left': '50%'
         // 'margin-top': -this.containerWidth + 'px'
          
        }
    },

     media800Enter(mediaQueryString) {
      this.greaterThan800 = false
    },
    media800Leave(mediaQueryString) {
      this.greaterThan800 = true
    },
  
    redirectToProject (link) {
      this.$router.push(
          {
          path: link,
          }
      )
    },
    
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/styles.scss";
   @import "~@/styles/containerstyles.scss"

</style>

