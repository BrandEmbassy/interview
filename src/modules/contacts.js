import React, { Component } from 'react';
import '../styles/contacts.css';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDN_31Rp6F_R4Cn-ZHYpjg2-CkQlM7mQHY",
  authDomain: "contactos-a8713.firebaseapp.com",
  databaseURL: "https://contactos-a8713.firebaseio.com",
  projectId: "contactos-a8713",
  storageBucket: "contactos-a8713.appspot.com",
  messagingSenderId: "1039443304965"
};
firebase.initializeApp(config);

const newDate = new Date();

const FurtherInfo = (props) => (
  <div className="contact__info-wrapper" id={props.number}>
    <span className="numbers">{props.number}</span>
    <span className="contact__info" onClick={props.clickOne}></span>
  </div>
)    

const Name = (props) => (
  <p className="contact__name" onClick={props.click}>{props.name}</p>
)

const Contact = (props) => (
  <li className="contact">
    <Name name={props.name} click={props.click}></Name>
    <FurtherInfo number={props.number} clickOne={props.clickOne} clickTwo={props.clickTwo}></FurtherInfo>
  </li>
)

const AddContact = (props) => (
  <div className="contact__add" onClick={props.click}>
    <span className="contact__add-plus"></span>
  </div>
)

const InfoWindow = (props) => (
  <div className="contact__info-window__wrapper">
    <div className="contact__input__wrapper">
      <span>Name:</span>
      <input type="text" placeholder={props.name} className="contact__add-name" />
    </div>
    <div className="contact__input__wrapper">
      <span>Number:</span>
      <input type="number" placeholder={props.number} className="contact__add-name" />
    </div>
    <div className="contact__input__wrapper">
      <span className="contact__add-likes-span">Likes:</span>
      <input type="text" placeholder={props.likes} className="contact__add-likes" />
    </div>
    {props.message}
    <div className="contact__add-button" onClick={() => {props.clickOne(); props.clickTwo();}}>
      Save
    </div>
    <div className="contact__add-button contact__add-button--delete" onClick={() => {props.clickThree(); props.clickTwo();}}>
      Delete
    </div>
  </div>
)

// Creates an array of numbers from/to
const createNumberArray = (lowEnd, highEnd) => {
  let arr = [];
  while(lowEnd <= highEnd){
    arr.push(lowEnd++);
  }
  return arr
}

// Check if persons birthdate matches current date
const checkBirthDays = (person) => person.birthDay[0] === newDate.getDate() && person.birthDay[1] === (newDate.getMonth()+1);

// Check if it was atleast a month since last called
const checkLastCalled = (person) => (person.date.day - newDate.getDate()) === 0 && (newDate.getMonth() - person.date.month) === 1;

// Check if year filled out
const checkOptions = (arr) => (arr[0] === 1 &&  arr[1] === 1 && arr[2] === 1900) ? false : true;

const getLikes = (arr, name) => arr.filter(obj => obj.name === name).map(obj => obj.likes);

export default class Contacts extends Component{
  constructor() {
    super()
    this.date = new Date();

    // Defining variables
    this.selects = document.getElementsByClassName("contact__add-day");
    this.years = createNumberArray(1900,this.date.getFullYear());
    this.database = firebase.database().ref('/contacts');
    this.months = createNumberArray(1,12);
    this.days = createNumberArray(1,31);
    this.birthDays = [];
    this.unCalled = [];
    this.inputs = [];
    this.called = "";

    // Binding functions
    this.changeContact = this.changeContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.createContact = this.createContact.bind(this);
    this.initiateCall = this.initiateCall.bind(this);
    this.beingAdded = this.beingAdded.bind(this);
    this.openInfo = this.openInfo.bind(this);

    // Defining intial states
    this.state = {
      infoOpened : [0,false],
      notification : false,
      unCalled: false,
      adding : false,
      filled : true,
      numbers : []
    };
  }

  componentWillMount () {
    // Fetch data from Firebase
    this.database.once("value")
      .then( _ => { 
        this.setState({numbers : Object.keys(_.val()).map(e => _.val()[e])}) 

        // Check if it is someones birthday today
        Object.keys(_.val())
          .map(e => _.val()[e])
          .filter(checkBirthDays)
          .forEach(person => {this.birthDays.push(person.name)})
        
        if(this.birthDays.length !== 0) this.setState({notification: this.state.notification ? false : true})

        // Check how long it has been since you called someone
        Object.keys(_.val())
          .map(e => _.val()[e])
          .filter(checkLastCalled)
          .forEach(person => this.unCalled.push(person.name))

        if(this.unCalled.length !== 0) this.setState({unCalled: this.state.unCalled ? false : true})
      })
  } 

  // Update state if contact is being added or added
  beingAdded () {
    this.setState({adding: this.state.adding ? false : true});
  }

  // Creates an object of contact information
  createContact () {
    const arrayOfOptions = [...this.selects].map(option => option.options[option.selectedIndex].value);
    const getInputs = document.querySelectorAll(".contact__add input");
    const options = checkOptions(arrayOfOptions) ? arrayOfOptions : [];
    this.inputs = [];

    // Push year to array inputs
    this.inputs.push(options);

    // Push all onther inputs into array inputs
    [...getInputs].forEach(input => this.inputs.push(input.value))

    // Check if Name and Number are filled out
    if(this.inputs[1] === "" || this.inputs[2] === ""){
      this.setState({filled: false});
      return
    }

    // Initialize the addContact function
    this.addContactFunc("new")
  }

  // Re-write the numbers object with changed attributes
  changeContact () {
    const getInputs = document.querySelectorAll(".contact__info-window__wrapper input");
    let indexNumber = "";
    let birthDay = [];
    this.inputs = [];

    // Get the already existing birthday and index 
    this.state.numbers.forEach((person, index, array) => {
      if(person.number === this.state.infoOpened[0]){
        birthDay = this.state.numbers[index]["birthDay"]
        indexNumber = index;
      }
    })

    // Push existing birthday to newly created array inputs
    this.inputs.push(birthDay);

    // Push all inputs into array inputs
    [...getInputs].forEach(input => this.inputs.push(input.value))

    // Check if Name, Number and Likes are filled out, if not, use already assigned values
    if(this.inputs[2] === "") this.inputs[2] = this.state.numbers[indexNumber].number;
    if(this.inputs[3] === "") this.inputs[3] = this.state.numbers[indexNumber].likes;
    if(this.inputs[1] === "") this.inputs[1] = this.state.numbers[indexNumber].name;

    // Initialize the addContact function
    this.addContactFunc("info")
  }

  // Deletes selected contact and pushes changes to Firebase
  deleteContact () {

    // Delete the selected person object from numbers object
    this.state.numbers.forEach((person, index, array) => {
      if(person.number === this.state.infoOpened[0]){
        delete this.state.numbers[index]
      }
    })

    // Push new nummbers object to Firebase
    this.database.remove();
    setTimeout(() => this.database.set(this.state.numbers), 1000)
  }

  // Creates and adds the contact object to numbers object and pushes changes to Firebase
  addContactFunc (choice) {
    let newObj = {};

    switch (choice) {
      case "new":
        newObj = {
          date : {
            day : 0,
            month : 0,
            year : 0
          },
          name : this.inputs[1],
          number : this.inputs[2],
          likes : this.inputs[3],
          birthDay : this.inputs[0]
        }

        // Refresh the numbers object
        this.setState({numbers: [...this.state.numbers, newObj]});

        // Closes adding window
        this.setState({adding: this.state.adding ? false : true});

        break;

      case "info": 
        let oldDate = {}

        // Assign last called date to oldDate variable
        this.state.numbers.forEach(
          (person, index, array) => {
            if(person.number === this.state.infoOpened[0]) 
              oldDate = this.state.numbers[index].date
          })

        // Define new object to be pushed to Firebase
        newObj = {
          date : oldDate,
          name : this.inputs[1],
          number : this.inputs[2],
          likes : this.inputs[3],
          birthDay : this.inputs[0]
        }

        // Push new object to numbers object
        this.state.numbers.forEach((person, index, array) => {
          if(person.number === this.state.infoOpened[0]){
            this.state.numbers[index] = newObj
          }
        })

        break;
    }

    this.database.remove();
    setTimeout(() => this.database.set(this.state.numbers), 1000)
  }

  // Simulates calling someone and pushes new date of call to Firebase
  initiateCall (e) {
    this.state.numbers.forEach((person, index, array) => {
      if(person.number === e.target.parentElement.getElementsByClassName("contact__info-wrapper")[0].id){

        // Set new date of last call
        array[index].date.day = this.date.getDate();
        array[index].date.month = this.date.getMonth();
        array[index].date.year = this.date.getFullYear();

        // Change classes to simulate visual effect of calling
        this.called = String(e.target.parentElement.getElementsByClassName("contact__info-wrapper")[0].id);
        e.target.parentElement.classList.add("called")
        setTimeout(() => {
          document.getElementById(this.called).parentElement.classList.remove("called")
        }, 2000)
      }
    })

    // Push new data to Firebase
    this.database.remove();
    setTimeout(() => this.database.set(this.state.numbers), 5000)
  }

  // Opens info window which enables to adjust values of contacts
  openInfo (e) {
    let id = this.state.infoOpened[1] ? 0 : e.target.parentElement.id;
    let opened = this.state.infoOpened[1] ? false : true;
    this.setState({infoOpened: [id, opened]})
  }

  // Gets specified attribute from numbers object
  getAttribure (attribute, id) {
    let value = "";

    this.state.numbers.forEach((person, index, array) => {
      if(person.number === id){
        value = this.state.numbers[index][attribute]
      }
    })

    return value
  }

  render() {
    // Defining modules
    let notificationBirthDay = this.state.notification ? 
      <div className="notification" onClick={() => this.setState({notification: this.state.notification ? false : true})}>
        {`${this.birthDays[0]} has birthday today! He/she likes ${getLikes(this.state.numbers,this.birthDays[0])}`}
      </div> : 
      <div className="notification--closed"></div>;

    let notificationCall = this.state.unCalled ? 
      <div className="unCalled" onClick={() => this.setState({unCalled: this.state.unCalled ? false : true})}>
        {`You havent called ${this.unCalled[0]} in a month! Do something about it :)`}
      </div> : 
      <div className="notification--closed"></div>;

    let message = this.state.filled ? 
      <p className="none-message"></p> : 
      <p className="error-message">Please fill out name and number</p>;

    const AddContactForm = (props) => (
      <div className="contact__add open">
        <div className="contact__input__wrapper">
          <span>Name:</span>
          <input type="text" className="contact__add-name" />
        </div>
        <div className="contact__input__wrapper">
          <span>Number:</span>
          <input type="number" className="contact__add-name" />
        </div>
        <div className="contact__input__wrapper">
          <span>Birth day:</span>
          <select className="contact__add-day">
            {this.days.map(day => <option value={day}>{day}</option>)}
          </select>
          <select className="contact__add-day">
            {this.months.map(month => <option value={month}>{month}</option>)}
          </select>
          <select className="contact__add-day">
            {this.years.map(year => <option value={year}>{year}</option>)}
          </select>
        </div>
        <div className="contact__input__wrapper">
          <span className="contact__add-likes-span">Likes:</span>
          <input type="text" className="contact__add-likes" />
        </div>
        {message}
        <div className="contact__add-button" onClick={this.createContact}>
          Save
        </div>
        <div className="contact__add-button contact__add-button--delete" onClick={this.beingAdded}>
          Close
        </div>
      </div>
    )

    let Button = this.state.adding ? 
      <AddContactForm click={this.beingAdded}/> : 
      <AddContact click={this.beingAdded} />;

    let infoWindow = this.state.infoOpened[1] ? 
      <InfoWindow  
        message={message} 
        clickOne={this.changeContact}
        clickTwo={this.openInfo} 
        clickThree={this.deleteContact}
        name={this.getAttribure("name", this.state.infoOpened[0])} 
        number={this.getAttribure("number", this.state.infoOpened[0])} 
        likes={this.getAttribure("likes", this.state.infoOpened[0])}>
      </InfoWindow> : 
      <span></span> ;

    const listItems = Object.keys(this.state.numbers)
      .map(e => this.state.numbers[e])
      .map(person => 
        <Contact 
          name={person.name} 
          number={person.number} 
          click={this.initiateCall} 
          clickOne={this.openInfo}>
        </Contact> 
      );
    
    return (
      <div>
        {notificationBirthDay}
        {notificationCall}
        <ul className="contacts__wrapper">{listItems}</ul>
          {infoWindow}
          {Button}
      </div>
    );
	}
}