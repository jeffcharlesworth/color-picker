import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './App.css';
import Box from './Box';
import RgbInput from './rgbInput';
import BoxInverse from './BoxInverse';
import BoxHsl from './BoxHsl';
import ColorWell from './ColorWell';

@observer
class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="header">
          <h1>Title</h1>
        </div>
        <div className="controlcont col-md-3">
          <ColorWell store={this.props.store}/>
          <RgbInput colorStr='red' store={this.props.store}/>
          <RgbInput colorStr='green' store={this.props.store}/>
          <RgbInput colorStr='blue' store={this.props.store}/>
        </div>
        <div className="boxcont col-md-9">
          <Box store={this.props.store}/>
          <BoxInverse store={this.props.store}/>
          <BoxHsl store={this.props.store}/>
        </div>
      </div>
    );
  }
};

export default App;
