import React, { Component } from 'react';
import ReactBootStrapSlider from 'react-bootstrap-slider';
import { observer } from 'mobx-react';

import './App.css';
import Box from './Box';
import RgbInput from './rgbInput';

function invertColor(rbgValue) {
  return 255 - rbgValue;
};

function rgbToHex(red, green, blue) {
  var rgb = [red, green, blue];
  var hex = [];
  for (let i = 0; i < 3; i++) {
    hex.push(Number(rgb[i]).toString(16));
    if (hex[i].length < 2) {
      hex[i] = "0" + hex[i];
    }
  };
  return '#' + hex.join("");
};

@observer
class App extends Component {

  render() {
    const red = this.props.store.rgb[0];

    return (
      <div className="App">
        <div className="header">
          <h1>Title</h1>
        </div>
        <div className="controlcont col-md-3">
          <RgbInput colorStr='red' store={this.props.store}/>
          <RgbInput colorStr='green' store={this.props.store}/>
          <RgbInput colorStr='blue' store={this.props.store}/>
        </div>
        <div className="boxcont col-md-9">
          <Box store={this.props.store}/>

        </div>
      </div>
    );
  }
};

export default App;
