<template>
  
 <div class="photocontainer">
     <media :query="{maxWidth: 800}" @media-enter="media800Enter" @media-leave="media800Leave"> </Media> 
       
        <!-- <div v-bind:class="[isRow ? 'rowstyle' : 'cols']">  
                <div class="hvrbox" v-bind:key="project.id" v-for="project in filterProjects">
                 <img v-bind:src="project.linkphotourl" class="hvrbox-layer_bottom" >  
                    <div class="hvrbox-layer_top" v-on:click="redirectToProject(project.projectlink)">
                      <ul>       
                        <li>{{project.projecttitle}}</li>
                        <li>{{project.projectsubtitle}}</li>
                    </ul>
                  </div> 
              </div>
        </div>   -->

        <div v-bind:class="[isRow ? 'rowstyle' : 'cols']">  
                <div class="hvrbox" v-bind:key="project.id" v-for="project in filterProjects">
                 <img v-bind:src="project.linkphotourl" class="hvrbox-layer_bottom" >  
                    <div class="hvrbox-layer_top" v-on:click="redirectToProject(project.projectlink)">
                      <ul>       
                        <li>{{project.projecttitle}}</li>
                        <li>{{project.projectsubtitle}}</li>
                    </ul>
                  </div> 
              </div>
        </div>  
    </div>
  
</template>

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

//  created () {
//     this.filterProjects();
//   },

data () {
    return {
          projects : [],
        isRow: false,
        greaterThan800: window.innerWidth > 800,
    }
  },


 computed: {
  
  filterProjects: function () {
  
//debugger;
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
         // debugger;
          var list =  projectsjson.filter(project => {
            return project.projecttype == this.filterparam;
             });

             this.isRow = this.greaterThan800?  list.length <= 4: false;
             return list;
        } 
    }
  },


methods: {

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

