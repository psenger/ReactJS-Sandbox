var Button = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },
  onClickHandler: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  render: function() {
    return ( < button onClick = {
      this.onClickHandler
    } > Go {
      this.state.counter
    } < /button>)
  }
});

ReactDOM.render( < Button / > , document.getElementById('root'));
