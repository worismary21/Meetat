import React, {Component} from "react";
import { loginWithFacebook } from '../client'; // Adjust the import path as necessary

 class Page extends Component{
     render(props){ 
       let  btnstyle={width :'100%', margin:'10px'};
         let img = ["https://scontent.flos6-1.fna.fbcdn.net/v/t1.0-9/26231519_1697948836922997_1058310476786115456_n.jpg?_nc_eui2=v1%3AAeFMQWLwtTiMLPx4dFqz1sQmljhpjwiHfisaar8zGAo0de-MqJbKXgabVdS-OwY8sAC1Ci9YJBYaxhfUiGxbBAgelmuJr5d8TNg2-WDxAjcf0w&oh=68d74c0f64300d61a08ed02f31e0b1c4&oe=5B1DBD0D"];
         return(
             <div>
        <h5 className="center-align"> Me@ helps you Connect with your buddies around campus,Find new friends around you, chat, hangout, and leave a social review of your  hangouts</h5>
        <img width="100%" src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/GwFs3_KxNjS.png"/>
        <div>
            <img className="responsive-img" src ={img[0]}/>
             <ul className="collection with-header">
        <li className="collection-header white"><h4>Woris jakes</h4></li>
        <li className="collection-item black">Social points: 3200pts</li>
        <li className="collection-item black">Current Location: Abiola hostel</li>
        <li className="collection-item black"><i className="material-icons blue">thumb_up</i><span className ="badge white">100</span> </li>
        <li className="collection-item black"><i className="material-icons blue">thumb_down</i><span className ="badge white">0</span></li>
        <li className="collection-item black"><button> Send hangout request</button></li>
      </ul>
        </div>
    <div className="slider">
    <ul className="slides">
      <li>
        <img src="http://www.priotime.com/wp-content/uploads/2014/06/Simple-Steps-to-Connect-with-Friends.jpg"/>
        <div className="caption center-align">
          <h3>We@</h3>
          <h5 className="light grey-text text-lighten-3">Hangout and meet a new friend every day!!</h5>
        </div>
      </li>
      <li>
        <img src ="http://techcabal.com/wp-content/uploads/2014/10/soshaa.jpg"/>
        <div className="caption left-align">
          <h3>We@</h3>
          <h5 className="light grey-text text-lighten-3">Leave a social comment about a friend</h5>        </div>
      </li>
      <li>
        <img className="responsive-img" src="https://www.mymeucci.com/v3/images/meucci/connect-with-friends.png"/>
        <div className="caption right-align">
          <h3>We@</h3>
          <h5 className="light grey-text text-lighten-3">Update your hangout timeline {'&'} status</h5>
        </div>
      </li>
      <li>
        <img src="https://s-i.huffpost.com/gen/2654386/images/n-FRIENDS-BEING-SILLY-628x314.jpg"/>
        <div className="caption center-align">
          <h3>We@</h3>
          <h5 className="light grey-text text-lighten-3">Set up group hangouts with other friends</h5>
        </div>
      </li>
    </ul>
  </div>
  <hr/>
  <button onClick={loginWithFacebook} style={btnstyle} className="btn blue">Continue with Facebook</button>
        </div>
         )
     }
 }
 export default Page;