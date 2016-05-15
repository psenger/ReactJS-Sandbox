var Card = React.createClass({
  getInitialState: function() {
    return {  };
  },
  // right after it mounts
  componentDidMount: function(){
    var self = this;
    $.get('https://api.github.com/users/' + this.props.login, function(data){
      self.setState(data);
    });
  },
  render: function(){
    return (
      <div class='card'>
        <img class='card-img-top' src={this.state.avatar_url} alt='Github image card' width="100" />
        <div class='card-block'>
          <h4 class='card-title'>{this.state.name}</h4> 
        </div>
      </div>
    )
  }
});

var Form = React.createClass({
  localOnSubmitHandler:function(e){
    e.preventDefault(); 
    // React also supports using a string (instead of a callback) as a ref prop on any component, although this approach is mostly legacy at this point.
    var loginInput = ReactDOM.findDOMNode(this.refs.login); 
    // now we can read/write to the elem
    // add care here
    this.props.addCard(loginInput.value);
    loginInput.value = '';
  },
  render:function(){
    return (
      <form onSubmit={this.localOnSubmitHandler}>
        <input placeholder='enter the github login id' ref='login'/>
        <button>add</button>
      </form>
    );
  }
});

var Main = React.createClass({
  getInitialState: function() {
    // return { logins: [ 'psenger','dmoralestech','akumar15' ] };
    return { logins: [] };
  },
  addCard: function( loginToAdd ){ 
    this.setState({
      logins: this.state.logins.concat(loginToAdd)
    });
  },
  render: function() {
    var cards = this.state.logins.map (
        function(login){
          return ( <Card login={login} /> );
        }
      );
    return ( <div><Form addCard={this.addCard}/>{cards}</div> );
  }
});

ReactDOM.render( <Main /> , document.getElementById('root'));
