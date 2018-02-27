import React, {Component} from "react";
import firebase from "firebase";
import jquery, {$} from "jquery";
import {Redirect} from "react-router-dom";
class UpdateProfile extends Component{
    constructor(){
        super();
        this.state = {
            isUpdated:false,
            username:"",
            level:"",
            age:"",
            school:"",
            bio:"",
            status:"",
            photo:""
        
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    };
     
    handleSubmit(e){
        var user = firebase.auth().currentUser;
        e.preventDefault();
            firebase.database().ref("users/"+user.uid).set({
                username:this.state.username,
                age:this.state.age,
                school:this.state.school,
                level:this.state.level,
                bio:this.state.bio,
                status:this.state.status,
                photo:this.state.photo
            })

        this.setState({
            isUpdated:true,
            username:"",
            age:"",
            school:"",
            level:"",
            bio:"",
            status:"",
            photo:""
    })
    }
    handleChange(e){
        var user = firebase.auth().currentUser;
        this.setState({
            [e.target.name]: e.target.value,
            photo: user.photoURL
        });
    }
    render(){
        const mystyle = {borderRadius:"5px", marginTop:"50px"}
        const imgstyle ={width:"50%", marginLeft:"20vw", border:"5px solid black"}
        var user = firebase.auth().currentUser;
        return(this.state.isUpdated==true ? (<Redirect to= "/Place"/>) : (
        <div className="black">
        <div className="container">
            <div className="white">
            <h5 className="center-align black-text title is-5">Hi we still need some basic information from you, please fill the form to continue</h5>
            <img className="circle" style={imgstyle} src={user.photoURL} alt="A photo of user"/>
            </div>
            <div style={mystyle}  className="white">
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <label className="label">Select a Username</label>
                    <div className="control has-icons-left has-icons-right">
            <input id ="username"   type= "text" placeholder ="Please Choose a username" name ="username" onChange= {this.handleChange}/>
            <span className="icon is-small is-left">
      <i className="fas fa-user"></i>
    </span>

                </div>
            </div>
            <div className="field">
            <label className="label">Please input your age</label>
            <div className="control">
            <input onChange ={this.handleChange} min ="18" max ="30" name ="age" type ="number"/>
            </div>
            </div>
            <div className="field">
                <label className="label"> Bio</label>
                <div className="control">
                    <textarea onChange={this.handleChange} name="bio" >Tell others a little bit about you</textarea>
            </div>
            </div>
            <div className="field">
                    <label className="label">Update your status</label>
                    <div className="control">
            <input   type= "text" placeholder="Add a new status" name ="status" onChange= {this.handleChange}/>
                </div>
            </div>
            <div className="field">
            <label className="label">What level are you in</label>
            <div className="control">
            <div className="select">
                <select name="level" onChange={this.handleChange}>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                </select>
                </div>
                </div>
            </div>
            <div className="field">
            <label className="label">Please select your school</label>
            <div className="control">
            <div className="select">
                <select name="school" onChange={this.handleChange}>
                    <option value="SEET">SEET</option>
                    <option value="SAAT">SAAT</option>
                    <option value="SEMS">SEMS</option>
                    <option value="SET">SET</option>
                    <option value="SMAT">SMAT</option>
                    <option value="SOS">SOS</option>
                </select>
                </div>
                </div>
            </div>
            <button  style={{marginLeft:"35vw"}} className="button is-rounded is-outlined is-large is-dark" type="submit">Update Profile</button>
            </form>
            </div>
            </div>
            </div>));
    }
}
export default UpdateProfile;