import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';

@observer
class ColorWell extends Component {

  hexToRgb(hex) {
    this.props.store.rgb.red = parseInt(hex[1] + hex[2], 16);
    this.props.store.rgb.green = parseInt(hex[3] + hex[4], 16);
    this.props.store.rgb.blue = parseInt(hex[5] + hex[6], 16);
  };

  handleChange = (color, event) => {
    this.hexToRgb(color.hex)
  };

  render () {
    return(
      <SketchPicker
        onChange={ this.handleChange }
        color={ this.props.store.hex }
        disableAlpha={true}
        width={250}
      />
    )
  }
};

export default ColorWell;
