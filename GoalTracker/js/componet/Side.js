/**
 * Created by psenger on 5/28/16.
 */
import React, { Component } from 'react';
import { Goal } from './Goal';
import { Team } from './Team';

export class Side extends Component {
    renderGoal( goal ){
        return ( <Goal {...goal} /> );
    }
    renderTeam( team, index ){
        return ( <Team {...team} key={index} /> );
    }
    render() {
        return ( 
            <div className="side">
                {this.renderGoal(this.props.goal)}
                {this.renderTeam(this.props.team)}
            </div> 
        );
    }
}