import React, {Component} from 'react';
class Filter extends Component
{
	constructor()
	{
		super();
		this.state={
			data:['1','2','3','4','5','6','7','8','9','10','11','12'],
			dataName:''
		};
	}
	filter(e)
	{
		let newdata = this.refs.dataName.value;
		let searchIndex = this.state.data.indexOf(newdata);
		let newArrayData = this.state.data[searchIndex];

		let dddata = [newArrayData];
		this.setState({
			data:dddata,
			dataName:newdata
		})
	
	

	}
	render()
	{
		return(
			<div>
				<h3>filter</h3>
				<input type='text' name='dataName' ref='dataName' value={this.state.dataName} onChange={this.filter.bind(this)}/>
				<ul>
					{this.state.data.map((data,i)=> <li key={i}>{data}</li>)}
				</ul>
			</div>
			);
	}
}
export default Filter;