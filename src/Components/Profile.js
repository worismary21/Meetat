import React, { Component } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


class Profile extends Component {
    render() {
        var user = firebase.auth().currentUser;
        var username
        if (user != null) {
            user.providerData.forEach(function (profile) {
                console.log("Sign-in provider: " + profile.providerId);
                username = profile.displayName;

            })
        }
        return (
            <div>
            <h1> Welcome {username} </h1>
             <li className="collection-header white"><h4>Woris jakes</h4></li>
        <li className="collection-item black">Social points: 3200pts</li>
        <li className="collection-item black">Current Location: Abiola hostel</li>
        <li className="collection-item black"><i className="material-icons blue">thumb_up</i><span className ="badge white">100</span> </li>
        <li className="collection-item black"><i className="material-icons blue">thumb_down</i><span className ="badge white">0</span></li>
        <li className="collection-item black"><button> Send hangout request</button></li>
        </div>
     )
    }
}


export default Profile;