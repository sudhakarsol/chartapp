import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import  Dropdown from './components/dropdown/dropdown';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import Sidenav from './layout/sidenav';
class App extends Component {
    rand(min, max, num) {
        var rtn = [];
        while (rtn.length < num) {
          rtn.push((this.rand() * (max - min)) + min);
        }
        return rtn;
    }
  constructor(props){
    super(props);
    this.state = {'data': [
      {
          value: this.rand(25, 300, 1)[0],
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
      },
      {
          value: this.rand(25, 300, 1)[0],
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
      },
      {
          value: this.rand(25, 300, 1)[0],
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
      },
      {
          value: this.rand(25, 300, 1)[0],
          color: "#949FB1",
          highlight: "#A8B3C5",
          label: "Grey"
      },
      {
          value: this.rand(25, 300, 1)[0],
          color: "#4D5360",
          highlight: "#616774",
          label: "Dark Grey"
      }
      ],
    'source':[['bali','Bali'],['europe','Europe']],
    'salespersonsource':[['795','sudhakar kumar'],['2','gaurav']]}
    
  }

   


  render() {
    console.log(this.state.data)
    return (
      <div className="App">
      <Sidenav />
      <div className="row">
          <div className="col s4">
            <Dropdown source={this.state.source} label="Trip Location" onChange={()=>alert("sdf")} />
          </div>
          <div className="col s4"></div>
          <div className="col s4">
          <Dropdown source={this.state.salespersonsource} label="Saler Person" />
          </div>
      </div>
      </div>
    );
  }
}

export default App;
