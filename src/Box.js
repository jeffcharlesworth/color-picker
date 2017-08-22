import React from 'react';
import { observer } from 'mobx-react';
import { rgbToHex } from './lib/color-switch'

@observer
export default class Box extends React.Component {
  returnColor(red, green, blue) {
    return (
      "rgb(" + red + "," + green + "," + blue + ")"
    )
  }

  render() {
    return (
      <div className="box" style={{backgroundColor: this.returnColor(this.props.store.rgb.red, this.props.store.rgb.green, this.props.store.rgb.blue,)}}>
        <div className="testheadingcont">
          <h2 className="testheading">{rgbToHex(this.props.store.rgb.red, this.props.store.rgb.green, this.props.store.rgb.blue)}</h2>
        </div>
      </div>
    );
  };
};
