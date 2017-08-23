import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './App.css';
import Box from './Box';
import RgbInput from './rgbInput';
import BoxInverse from './BoxInverse';
import BoxHsl from './BoxHsl';
import ColorWell from './ColorWell';
import HslInput from './hslInput';
import BoxComp from './BoxComp';
import { rgbToHex } from './lib/color-switch';
import ColorHeading from './ColorHeading';

@observer
class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="header">
          <h1>Quick color picker</h1>
        </div>
          <div className="topcontainer">
            <div className='intro'>
              <p>Welcome to Quick Color Picker! choose a color to start,
                adjust with the red, blue, green options and then click
                the hex code to copy to your clipboard.</p>
            </div>
            <div>
              <ColorHeading text='Pick a color' store={this.props.store}/>
              <div className='colorselect'>
                <ColorWell store={this.props.store}/>
              </div>
            </div>
              <RgbInput store={this.props.store}/>
            <div className="boxcont">
              <div>
                <BoxComp store={this.props.store}/>
              </div>
            </div>
          </div>

      </div>
    );
  }
};

export default App;
