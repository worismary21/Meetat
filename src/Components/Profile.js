import React, {Component} from "react";
import firebase from "firebase";
 class Profile extends Component{
     render(){
         var user = firebase.auth().currentUser;
         var username
         if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
         username = profile.displayName;
  
  })
         }
        return(
             <h1> Welcome {username} </h1>
         )
     }
 }
 export default Profile;