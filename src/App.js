import React, { Component } from 'react';
import ReactBootStrapSlider from 'react-bootstrap-slider';
import { observer } from 'mobx-react';

import './App.css';
import Box from './Box';
import RgbInput from './rgbInput';
import BoxInverse from './BoxInverse';

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
          <BoxInverse store={this.props.store}/>
        </div>
      </div>
    );
  }
};

export default App;
