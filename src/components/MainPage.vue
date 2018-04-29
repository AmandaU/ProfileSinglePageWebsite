<template>
 
 <div class="photocontainer">
      <div class="cols">
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
let projectsjson = jsondata;
let projects = [];
let filterparam = '';
// import db from './firebaseInit'
// let projectsRef = db.ref('projects')

//let storageRef = Firebase.storage().ref();

export default {
  name: 'mainpage',

//    firebase: {
//     projects: projectsRef
// },

data () {
    return {
          projects : []
    }
  },

//  created () {
//     this.filterProjects();
//   },

 computed: {
    filterProjects() {
//debugger;
       console.log('route', this.$route.params.projectfilter);
        this.filterparam = this.$route.params.projectfilter;
        console.log('route name', this.filterparam);

         if(this.filterparam == 'all') 
        {
          //this.projects = projectsjson;
          return projectsjson;
        }
      else
        {
          return projectsjson.filter(project => {
         return project.projecttype == this.filterparam;
      })
          
        } 
    }
  },


methods: {

  // filterProjects: function () {

  //    debugger;
  //       console.log('route', this.$route.params.projectfilter);
  //       this.filterparam = this.$route.params.projectfilter;
  //       console.log('route name', this.filterparam);

  //        if(this.filterparam == 'all') 
  //       {
  //         this.projects = projectsjson;
  //         return projects;
  //       }
  //       else
  //       {
  //          return projects.filter(function (project) {
  //              return project.projecttype == this.filterparam;
  //            })
  //       } 
   
  // },
    redirectToProject (link) {
      this.$router.push(
          {
          path: link,
          }
      )
    },
    // filterProjects ()
    // {
    //     debugger;
    //     console.log('route', this.$route.params.projectfilter);
    //     this.filterparam = this.$route.params.projectfilter;
    //     console.log('route name', this.filterparam);

    //     if(this.filterparam == 'all') 
    //     {
    //       this.projects = projectsjson;
    //     }
    //     else
    //     {
    //       this.projects = projectsjson.find(item => item.projecttype == this.filterparam);
    //     } 
    // },
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/styles.scss";
   @import "~@/styles/containerstyles.scss"

</style>

