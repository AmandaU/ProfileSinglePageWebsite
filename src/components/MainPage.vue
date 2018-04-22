<template>
 
 <div class="photocontainer">
      <div class="container cols">
       <div class="hvrbox" v-bind:key="project.id" v-for="project in projects">
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
let projectsjson = jsondata
// import db from './firebaseInit'
// let projectsRef = db.ref('projects')

//let storageRef = Firebase.storage().ref();

export default {
  name: 'mainpage',

//    firebase: {
//     projects: projectsRef
// },
methods: {
  redirectToProject (link) {
     this.$router.push(
        {
         path: link,
        }
     )
 }
},
  data () {
    return {
    
       projects : projectsjson
    }
  }

}
</script>

<style lang="scss" scoped>
  @import "~@/styles/styles.scss";
   @import "~@/styles/containerstyles.scss"

</style>

