
import React, { Component } from 'react';
// import Chart from 'chart.js';
import ChartTest from './chart';
export default class ChartParent extends Component {
    constructor(props){
        super(props);
        this.state={
            'linechart' : {
		        labels: ['Red', new Date(), 'Yellow', 'Green', 'Purple', 'Orange'],
		        datasets: [{
		            label: '# of Votes',
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        }
		    }
        };
        this.updatedata = this.updatedata.bind(this)
    }
    updatedata(chart){
        let linechart = this.state.linechart;
        let color = ['red','green']
        let hexcolor = ['rgba(0,0,0,1)','rgba(200,25,22)']
        let colord = Math.floor(Math.random(0,color.length-1)*10)
        alert(colord)
		linechart['labels'][0] = color[colord]
		linechart['datasets'][0]['backgroundColor'][0] = hexcolor[colord]
		this.setState({
			linechart : linechart
		},()=>{
			chart.update()
		})

	}
    render(){
        return(
            <div>
                <ChartTest chartname="mychart" color='blue' onClick={this.updatedata} linechart={this.state.linechart} />
                <ChartTest chartname="mychart1" color='blue' onClick={this.updatedata} linechart={this.state.linechart} />
            </div>
        )
    }
}