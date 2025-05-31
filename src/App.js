import React, {Component} from 'react';
import css from "./App.css";
import Home from './Components/Home';
import Page from "./Components/Index";
import Profile from "./Components/Profile";
import Place from "./Components/Place";
import Notifications from "./Components/Notifications";
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import UpdateProfile from "./Components/UpdateProfile";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';




class App extends Component{
   constructor(props){
    super(props);
    this.state ={
      user: null
    }
    this.login = this.login.bind(this);
  }
  componentDidMount(){
   firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      this.setState({user:user});
    }
   }) 
  }
  login(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
   this.setState({user: result.user});
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}
  render()
{
  return(this.state.user == null ? (<div><h3> Meet@</h3><Page onClick = {this.login}/></div>) :(<div>   
    <ul>
      <div className="columns is-gapless is-mobile">
        <div className="column">
<li><Link to ="/Home"><i className="material-icons white-text">home</i></Link></li>
</div>

<div className="column">
<li><Link to ="/Profile"><i className="material-icons white-text">person</i></Link></li>
</div>
<div className="column">
<li><Link to ="/Chat"><i className="material-icons white-text">chat</i></Link></li>
</div>
<div className="column">
<li><Link to ="/Notification"><i className="material-icons white-text">notifications</i></Link></li>
</div>
<div className="column">
<li><Link to ="/Place"><i className="material-icons white-text">place</i></Link></li>
</div>
<div className="column">
<li><Link to ="/Explore"><i className="material-icons white-text">explore</i></Link></li>
</div>
</div>
</ul>
<Switch>
<Route  path ="/" render={()=>(
  this.state.user == null ? ( <Page onClick = {this.login}/>) : (<Redirect to ="/UpdateProfile"/>))
} exact/>
<Route path="/UpdateProfile" component={UpdateProfile}/>
<Route path ="/Home" component={Home}/>
<Route path ="/Profile" user ={this.state.user} component ={Profile} />
<Route path ="/Notification" component={Notifications}/>
<Route path ="/Place" component={Place}/>
</Switch>
</div>))}
}
export default App;