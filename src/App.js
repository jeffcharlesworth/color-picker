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

@observer
class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="header">
          <h1>Title</h1>
        </div>
          <div className="topcontainer">
            <div className="controlcont col-md-3">
              <ColorWell store={this.props.store}/>
              <RgbInput store={this.props.store}/>
            </div>
            <div className="boxcont col-md-9">
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
