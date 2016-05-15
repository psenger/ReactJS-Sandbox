/**
 * Created by psenger on 5/16/16.
 */
var StarFrame = React.createClass({

  render:function(){
    var stars = [];
    for(var i=0;i<this.props.numberOfStars;i++){
      stars.push(
        <span className='glyphicon glyphicon-star'></span>
      );
    }
    // className = class this is a JSX specification
    return(
      <div id='stars-frame'>
        <div className='well'>
          {stars}
        </div>
      </div>
    );
  }
});

var ButtonFrame = React.createClass({
  render:function(){
    var disabled  = ( this.props.selectedNumbers.length === 0 )
    return(
      <div id='button-frame'>
        <button className='btn btn-primary btn-lg' disabled={disabled}>=</button>
      </div>
    );
  }
});

var AnswerFrame = React.createClass({
  render:function(){
    var props = this.props;
    var selectedNumbers = props.selectedNumbers.map(function(i){
      return(
        <span onClick={props.unSelectNumber.bind(null,i)}>
          {i}
        </span>
      );
    });
    return(
      <div id='answer-frame'>
        <div className='well'>
          {selectedNumbers}
        </div>
      </div>
    );
  }
});

var NumbersFrame = React.createClass({
  render:function(){
    var numbers = [];
    var className;
    var selectedNumbers = this.props.selectedNumbers;
    var selectNumber = this.props.selectNumber;
    for ( var i=1; i<=9; i++ ) {
      className = 'numbers selected-' + (selectedNumbers.indexOf(i)>=0)
      numbers.push(
        <div className={className} onClick={selectNumber.bind(null,i)}>{i}</div>
      );
    }
    return (
      <div id='numbers-frame'>
        <div className='well'>
          {numbers}
        </div>
      </div>
    );
  }
});

var Game = React.createClass({
  getInitialState: function(){
    return {
      numberOfStars: Math.floor( Math.random() * 9 ) + 1,
      selectedNumbers: []
    };
  },
  unSelectNumber:function(clickedNumber){
    var selectedNumbers = this.state.selectedNumbers,
      indexOfNumber = selectedNumbers.indexOf(clickedNumber);
    selectedNumbers.splice(indexOfNumber, 1);
    this.setState( { selectedNumbers : selectedNumbers } );
  },
  selectNumber: function(clickedNumber){
    if(this.state.selectedNumbers.indexOf(clickedNumber) < 0 ){
      this.setState(
        { selectedNumbers:this.state.selectedNumbers.concat(clickedNumber) }
      );
    }
  },
  render:function(){
    return(
      <div id='game'>
        <h2>Play Nine</h2>
        <hr/>
        <div className='clearfix'>
          <StarFrame numberOfStars={this.state.numberOfStars}/>
          <ButtonFrame selectedNumbers={this.state.selectedNumbers} />
          <AnswerFrame selectedNumbers={this.state.selectedNumbers}
                       unSelectNumber={this.unSelectNumber} />
        </div>
        <NumbersFrame selectedNumbers={this.state.selectedNumbers}
                      selectNumber={this.selectNumber}/>
      </div>
    );
  }
});

React.render(
  <Game />,
  document.getElementById('container')
);
