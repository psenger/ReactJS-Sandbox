/**
 * Created by psenger on 5/28/16.
 */
import React, { Component } from 'react';

export class Player extends Component {
    render() {
        return ( 
            <div className="player">
                {this.props.name} - {this.props.id}
            </div> 
        );
    }
}