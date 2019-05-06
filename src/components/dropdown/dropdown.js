import React, { Component } from "react";
// import {Select} from 'react-materialize';
import M from "materialize-css";
export default class Dropdown extends Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    changeDropdown(e){
        // alert(e.target.value)
        console.log(e.target.value)
        return true;
        if (this.props.onChange !== undefined && typeof(this.props.onChange) === 'function') {
            this.props.onChange();
        }
    }

    render(){
        return (
            <div className="row">
                <select onChange={this.props.selectChange}>
                    <option value={this.props.label}>{this.props.label}</option>
                    {this.props.source.map((source,index) => (
                        <option value={source[0]} key={source[0]}>{source[1]}</option>
                    ))}
                </select>
            </div>
        )
    }
}