import React, { Component } from 'react';


 function getDate() {
        return new Date().toDateString();   
 }


class Wellcome extends Component {
    constructor(props){
        super(props)
        this.state = {
            myVar:6,
            seVar:89,
            isToggleOn: true
        }

         this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    console.log(this.props); 
    console.log(this.state.seVar)       ;
    return (
      <div>
         Wellcome {this.props.name} !
         {getDate()}
         <br></br>
         {this.state.myVar + this.state.seVar}
         
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
         
      </div>
    );
  }
}

export default Wellcome;




