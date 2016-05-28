/**
 * Created by psenger on 5/28/16.
 */ 
import React, { Component } from 'react';

export class Goal extends Component {
    render() {
        return ( <div className="goal">{this.props.id}</div> );
    }
}