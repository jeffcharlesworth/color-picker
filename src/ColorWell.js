import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class ColorWell extends Component {

  hexToRgb(hex) {
    this.props.store.rgb.red = parseInt(hex[1] + hex[2], 16);
    this.props.store.rgb.green = parseInt(hex[3] + hex[4], 16);
    this.props.store.rgb.blue = parseInt(hex[5] + hex[6], 16);
  };

  render () {
    return(
      <input type="color"
        value={this.props.store.hex}
        onChange={(e) => { this.hexToRgb(e.target.value) }}
        id="colorWell" />
    )
  }
};

export default ColorWell;
