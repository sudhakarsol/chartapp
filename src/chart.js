
import React, { Component } from 'react';
import Chart from 'chart.js';
export default class ChartTest extends Component {
	constructor(props){
		super(props);
		this.state = {}
		console.log(this.state.linechart)
		this.updatedata = this.updatedata.bind(this);
	}
	componentDidMount(){
		let ctx = document.getElementById(this.props.chartname);

		let myChart = new Chart(ctx, {
		    type: 'bar',
		    data: this.props.linechart
		});
		this.setState({
			myChart:myChart
		})

	}

	updatedata(){
		// let linechart = this.state.linechart;
		// linechart['labels'][0] = 'Black'
		// linechart['datasets'][0]['backgroundColor'][0] = 'rgba(0,0,0,1)'
		// this.setState({
		// 	linechart : linechart
		// },()=>{
		// 	this.state.myChart.update()
		// })
		this.props.onClick(this.state.myChart)

	}

	render() {
		console.log(this.state)
	return (
	  <div className="App">
		<canvas id={this.props.chartname} width="400" height="400"></canvas>
		<button type="button" onClick={this.updatedata}>Update Data</button>
	  </div>
	);
	}
}