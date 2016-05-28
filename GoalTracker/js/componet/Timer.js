/**
 * Created by psenger on 5/28/16.
 */
import React, { Component } from 'react';

export class Timer extends Component {
    getInitialState(){
        return {
            secondsElapsed: 0
        };
    }
    tick(){
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }
    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillMount(){
        clearInterval(this.interval);
    }
    // {this.state.secondsElapsed}
    render() {
        return ( <div className="Timer">{this.props.id}</div> );
    }
}
