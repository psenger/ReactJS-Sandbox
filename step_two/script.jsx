var Button = React.createClass({
  localOnClickHandler: function(){
    this.props.localOnClickHandler(this.props.incremenet);
  },
  render: function() {
    return ( <button onClick={this.localOnClickHandler}>Add {this.props.incremenet}</button> )
  }
});

var Result = React.createClass({
  render: function() {
    return ( <div>{this.props.localCounter}</div> )
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },
  onClickHandler: function( inc ) {
    this.setState({
      counter: this.state.counter + inc
    });
  },
  render: function() {
    return ( 
      <div>
        <Button localOnClickHandler={this.onClickHandler} incremenet={1}/>
        <Button localOnClickHandler={this.onClickHandler} incremenet={5}/>
        <Button localOnClickHandler={this.onClickHandler} incremenet={10}/>
        <Result localCounter={this.state.counter}/>
      </div> 
    )
  }
});

ReactDOM.render( <Main /> , document.getElementById('root'));
