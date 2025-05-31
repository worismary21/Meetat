import React, {Component} from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // 
import { getAuth } from 'firebase/auth';


class Place extends Component{
    constructor(){
        super();
        this.state = {
            place:"",
            time:"",
            date:"",
            text:"",

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value,
        }) 
    }
    handleSubmit(e){
        var user = firebase.auth().currentUser;
        var newpostkey = firebase.database().ref().child('Hangouts').push().key;
        e.preventDefault();
        firebase.database().ref("/Hangouts/"+user.uid+"/"+ newpostkey).set({
            time:this.state.time,
            date:this.state.date,
            place:this.state.place,
            text:this.state.text
        })
    }
render(){
    return(
    <div>
    <h1 className="center-align title"> Make a hangout  request</h1>
    <div className="columns">
        <div className="column">
              <div className="card">
            <div className="card-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPWPNE-1zeBFgR_crl8OEKoWh4awV09Ui3YJU1v9JhliXiu0s1g"/>
              <span className="card-title">2500 Capacity hall</span>
            </div>
            <div className="card-content">
              <p><i className ="material-icons">place</i>2500 capacity</p>
            </div>
    </div>
        </div>
        <div className="column">
            <div className="card">
            <div className="card-image">
              <img className="responsive-img" src="https://www.futa.edu.ng/futacms/images/gallery/galleryfull8.jpg"/>
              <span className="card-title">Futa Wildlife park</span>
            </div>
            <div className="card-content">
              <i className ="material-icons">place</i>Futa Zoo
            </div>
    </div>
        </div>
        <div className="column">
            <div className="card small">
            <div className="card-image">
              <img className="responsive-img" src="http://studentsforumng.com/wp-content/uploads/2015/01/FUTA-Hilltop.jpg"/>
              <span className="card-title">Hill Top</span>
            </div>
            <div className="card-content">
              <p><i className ="material-icons">place</i>CCE Hilltop Auditorium</p>
            </div>
    </div>
        </div>
    </div>
    <i style={{marginLeft: "35vw"}} className="large  material-icons">place</i>
    <div className ="container">
        <form onSubmit ={this.handleSubmit}>
            <div className="columns is-mobile">
            <div className="column">
            <div className ="field">
                <label className ="label"> Select a prefered location you would love to hangout </label>
                <div className="control">
                    <div className="select">
                        <select name="place" onClick = {this.handleChange}>
                            <option value ="Jibowu car park">Jibowu car park</option>
                            <option value="Jibowu common room">Jibowu common room</option>
                            <option value ="Sweet savour">Sweet savour</option>
                            <option value ="Mega">Mega</option>
                            <option value ="Sub Common room">Sub Common room</option>
                            <option value ="Jadesola Common room">Jadesola Common room</option>
                            <option value ="Adeniyi">Adeniyi Common room</option>
                            <option value ="Jibowu car park">Jibowu car park</option>
                            <option value ="Sub Conference room">Sub Conference room</option>
                            <option value ="Uiversity auditorium">2500 Auditorium</option>
                         </select>
                    </div>
                    </div>
            </div>
            </div>
            <div className="column">
                <div className="field">
                    <label className ="label">Please input the day you would love to hangout</label>
                    <div className="control">
                        <input type="date" name="date" onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
            </div>
            <div className="field">
                <label className="label"> Choose your preferred hangout time</label>
                <div className="control">
                    <input name = "time" onChange={this.handleChange} type="time"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Write a hangout text</label>
                <div className="control">
                    <input name = "text" placeholder="Lets meet@ SUB relaxation center and chat over a couple of drinks...." onChange={this.handleChange} type="text"/>
                </div>
            </div>
            <button className="button is-primary is-centered" type="submit">Post Hangout</button> 
            </form>
        </div>
    </div>
    )
}
}
export default Place;

