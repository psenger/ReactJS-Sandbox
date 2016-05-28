/**
 * Created by psenger on 5/28/16.
 */
import React, { Component } from 'react';
import { Side } from './Side';

export class Field extends Component {
    renderSide( side, index ){
        return (
           <Side {...side} key={index} /> 
        );
    }
    render() {
        return ( 
            <div className="field">
                {this.props.sides.map(this.renderSide)}
            </div> 
        );
    }
}