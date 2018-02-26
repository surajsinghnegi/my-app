import React, {Component}  from 'react';
class Test extends Component{
	constructor(props)
	{
		super();
		this.state={
			age:props.initialAge,
			data2:props.data
		}

	}
	OnMakeOlder()
		{
			this.setState({
				age:this.state.age+3,
				data2:this.state.data2
			})
		}	

	
	render()
	{

		return(
					<div>
					<button onClick={this.OnMakeOlder.bind(this)}>Click Here</button>	
					<p>{this.state.age}</p>
					<p>{4>5?'true':'false'}</p>
						<ul>
							{this.state.data2.hobbies.map((hobby,i)=><li key={i}>{hobby}</li>)}
							{this.props.children}
						</ul>
					</div>
			)
	}
}
export default Test;

