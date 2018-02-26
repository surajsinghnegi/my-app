import React, { Component } from 'react';
import s from './css/style.css';
class Condition extends Component {
  constructor(props)
  {
  	super(props);
  	this.state = {
  		name:'',
  		password:''

  	}
  }
  submitForm(event)
  {
  	 this.setState(
  	 		{
  	 			 [event.target.name]: event.target.value
  	 		}
  	 	)

  }
	showMessage(e)
	{
			if(this.state.password.length<6)
			{
				const errorMessage = "password should be more that 6 character";
			}
			e.preventDefault();
	}


  render() {
  
    return (
      <form onSubmit={this.showMessage.bind(this)}> 
        <label>
        
          Name:
          <input
           className={s.box}
           type="text" 
           name="name" 
           value={this.state.name} 
           onChange={this.submitForm.bind(this)} />
           {this.errorMessage}
        </label>

         <label>
          Name:
          <input
           type="password" 
           name="password" 
           value={this.state.password} 
           onChange={this.submitForm.bind(this)} />
        </label>
        <input type="submit" />
        <br/>
          {this.state.value}
      </form>

    );
  }
}

export default Condition;