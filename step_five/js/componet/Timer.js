/**
 * Created by psenger on 5/21/16.
 */
import React from 'react'; 
 
export var Timer = React.createClass({    
    getInitialState(){
        return {
            secondsElapsed: 0
        };
    },
    tick(){
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    },
    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    },
    componentWillMount(){
        clearInterval(this.interval);
    },
    render(){
        return(<div><h1>Countdown</h1>{this.state.secondsElapsed}</div>);
        // return(<div><h1>Countdown</h1>{JSON.stringify(this.state,'\t',4)}</div>);
        // return(<div><h1>Countdown</h1></div>);
    }
});