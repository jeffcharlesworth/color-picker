import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './App.css';
import RgbInput from './rgbInput';
import ColorWell from './ColorWell';
import BoxComp from './BoxComp';
import ColorHeading from './ColorHeading';
import ColorBanner from './ColorBanner';

@observer
class App extends Component {

  render() {

    return (
      <div className="App">
        <ColorBanner store={this.props.store}/>
        <div className="page-cont">
          <div className="topcontainer">
            <div>
              <ColorHeading text='Pick a color' store={this.props.store}/>
              <div className='colorselect'>
                <ColorWell store={this.props.store}/>
              </div>
                <RgbInput store={this.props.store}/>
            </div>
              <div className="boxcont">
                <div>
                  <BoxComp store={this.props.store}/>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
};

export default App;
