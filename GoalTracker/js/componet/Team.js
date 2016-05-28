/**
 * Created by psenger on 5/28/16.
 */
import React, { Component } from 'react';
import { Player } from './Player'; 

export class Team extends Component {
    
    renderPlayer( player ){
        return ( <Player {...player} /> );
    }
    render() {
        return ( 
            <div className="team">
                {this.props.players.map(this.renderPlayer)}
            </div> 
        );
    }
}