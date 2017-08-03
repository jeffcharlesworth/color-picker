import React, { Component } from 'react';
import './App.css';

function invertColors(red, blue, green) {

}

class Input extends React.Component {

  render() {
    return (
      <div className="third">
        <h2>{this.props.color}</h2>
        <input type="text" onChange={this.props.onChange} />
      </div>
    );
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      rgb: {
        'red': 255,
        'green': 255,
        'blue': 255,
      },
      rgbInverse: {
        'red': 255,
        'green': 255,
        'blue': 255,
      }
    }
  }

  changeColor = function (event, color) {
    switch(color) {
      case 'red':
        this.setState({
          rgb: {'red': event.target.value,
                'green': this.state.rgb.green,
                'blue': this.state.rgb.blue
          }})
      break;
      case 'green':
        this.setState({
          rgb: {'red': this.state.rgb.red,
                'green': event.target.value,
                'blue': this.state.rgb.blue
          }})
        break;
      case 'blue':
        this.setState({
          rgb: {'red': this.state.rgb.red,
                'green': this.state.rgb.green,
                'blue': event.target.value
          }})
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Title</h1>
        </div>
        <div>
          <Input color='red' onChange={(e) => this.changeColor(e, 'red')}/>
          <Input color='green' onChange={(e) => this.changeColor(e, 'green')}/>
          <Input color='blue' onChange={(e) => this.changeColor(e, 'blue')}/>
        </div>
        <div className="boxcont">
          <Box red={this.state.rgb.red} green={this.state.rgb.green} blue={this.state.rgb.blue}/>
        </div>
      </div>
    );
  }
}

class Box extends React.Component {
  constructor(props) {
    super();
    this.state = {
      red: props.red,
      green: props.green,
      blue: props.blue,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      red: newProps.red,
      green: newProps.green,
      blue: newProps.blue,
  });
}

  returnColor(red, green, blue) {
    return (
      "rgb(" + red + "," + green + "," + blue + ")"
    )
  }

  render() {
    return (
      <div className="box" style={{backgroundColor: this.returnColor(this.state.red, this.state.green, this.state.blue,)}}></div>
    );
  };
};


export default App;
