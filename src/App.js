import React, { Component } from 'react';
import './App.css';
import Wellcome from './Wellcome.js'


var fontSize = '16px';
var nameUser = "Alex";

var style = {
  fontSize:fontSize,/*20+'px' '25px' */
  fontStyle:'italic'
}
const element = <h1>Hello, world!</h1>;
console.log("fg",);

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
};

const fullName = {
  firstName : 'Ivan',
  lastName : 'Ivanov'
};

class App extends Component {
  render() {

    return (
      <div>
            <p className="caption" style = {style}>Some test</p>             
            {element}  
            <Wellcome name = {nameUser} />   
      </div>
    );
  }
}

export default App;


