//  <swiper v-ref:swiper
//         direction="horizontal"
//         :mousewheel-control="true"
//         :performance-mode="false"
//         :pagination-visible=true
//         :pagination-clickable=true
//         :loop=true
//         @slide-change-start="onSlideChangeStart"
//         @slide-change-end="onSlideChangeEnd">
//    <div class="img-wrap" v-for="image in images" v-bind:key=image.id  >
//         <h1>{{ image.alt }}</h1>
//         <img  v-bind:src="image.url" width=80%  />
//       </div>
// </swiper>

//  <img style=" float:left; display:inline" src="~@/assets/Beach.jpg" width="160" height="90" alt="bbc news special" />


     
// divStyles: {
//  width :  50 ,//$(window).width()/3,
//   height: 50,//$(window).width()/3,
//   display:inline,
//    float: left,
// },


//Firebase and Storage 

//Contents of the fireBaseConfig.js:

// export default {
//     apiKey: "AIzaSyBlSqVDvgL5uPL7umq_p6em1J2HEeSITts",
//     authDomain: "aylaadmin.firebaseapp.com",
//     databaseURL: "https://aylaadmin.firebaseio.com",
//     projectId: "aylaadmin",
//     storageBucket: "aylaadmin.appspot.com",
//     messagingSenderId: "661870055176"
//   }

//Contents of the firebaseInit.js
  
// import firebase from 'firebase'
// import firebaseConfig from './firebaseConfig'
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// export default firebaseApp.database()


//This part goes in the script tag of the .vue file
// import db from './firebaseInit'

// let projectsRef = db.ref('projects')

//let storageRef = Firebase.storage().ref();


//function to save file
// function fetchImages(){
  
// foreach(project in projects)
// {

//   // var file = document.getElementById("files").files[0];
//   //   console.log(file);
 
//   //dynamically set reference to the file name
//   var thisRef = storageRef.child(project.name);

//   //put request upload file to firebase storage
// //   thisRef.put(file).then(function(snapshot) {
// //     console.log('Uploaded a blob or file!');
// // });
  
//   //get request to get URL for uploaded file
//   thisRef.getDownloadURL().then(function(url) {
//   console.log(url);
//   })

//   project.url = url;
// }

//   }

// export default {
//   name: 'mainpage',


// firebase: {
//  projects: projectsRef
// },

//    data () {

//      //fetchImages();
//     return {

//       msg: 'My Doggie Photos',
//       employee: 'Pictures of my little doggies' 
//     }
//   }

// created () {
// debugger;

// let projectsRef = db.ref('projects');
//  projectsRef.forEach((project) => {
//     this.projects.push({

//             'id': project.id,
//             'client': project.client,
//             'clientwebsite': project.clientwebsite,
//             'emailaddress': project.description,
//             'linkphotourl': project.linkphotourl,
//             'linktitle': project.linktitle,
//             'projectlink': project.projectlink,
//             'splurb': project.splurb,
//             'title': project.title
         
//         })
//       })
//       debugger
//     }

//}


//Detect changes in window size


// mounted() {
//    window.addEventListener('resize', this.handleWindowResize);
 
  // this.criteria = this.$refs.criteria;
  // this.containerWidth = this.criteria[0].clientWidth;
  //     console.log(this.$refs.criteria);
   // },
//   beforeDestroy: function () {
//   window.removeEventListener('resize', this.handleWindowResize)
// },

//This in Methods:
//     handleWindowResize(event) { 
      
//       this.containerWidth = event.currentTarget.innerWidth/3; 
      
//     },

//End Detect changes in window size


//Dynamic height of div to contain imge. Obtain image size at runtime
//   computedWidth: function(project) {
  
//         var img = new Image();
//          img.src = window.URL.createObjectURL(project.linkphotourl)
//          img.onload = function(project) {
           
//          window.URL.revokeObjectURL(img.src)
//         return  img.height / img.width * self.containerWidth;
        
//         }
     
//         return 0;

//     },


//     getImageStyle: function (project) { 
   
// var t = project.ratio * this.containerWidth;
//           return {'background-image':'url("' + project.linkphotourl + '")',
//           'width': '100%',
//           'background-repeat': 'no-repeat',
//           'background-size': 'contain',
//           'height': t + 'px',
//           //'padding-top': t  +'%',
//           'background-color':'rgb(247, 107, 149)',
         
//         }
//     },

//End Dynamic height of div to contain imge. Obtain image size at runtime
