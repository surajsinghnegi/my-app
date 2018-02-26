import React, {Component} from 'react';
// import Celcius from './Celcius';

class Temprature extends Component {
	
	constructor(props) {
			super();
			this.state={
				temprature:'',
				ErrorCode:'',
				count:''
			}
	}

OnButtonClick  = () =>
{
	
	this.setState({
		count : this.count+1
	})
	
	this.suraj();
	console.log(this.state.count);
}

suraj()
{	
	if((this.state.count)/2===0)
	{
		alert('hi');
	}
	else{
		alert('bye');
	}
}
	render()
	{
		return(
				<div>
				 	<Dialog title="Mars Exploration Program"
					              message="How should we refer to you?">
					              <button className='btn btn-success' onClick={this.OnButtonClick.bind(this)}>click here</button>
					              
				      </Dialog>
				      <p>{this.ErrorCode}</p>
				</div>
			);
	}

}

function Dialog(props)
{
	return(
			
			<div>
			<div>{props.title}</div>
			{props.children}
			</div>


		);
}
// class Dialog extends Component{

// 	render()
// 	{
// 		return(
// 				<div>{this.props.title}{this.props.message}</div>
// 			);
// 	}
// } 

export default Temprature;