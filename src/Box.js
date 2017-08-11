import React from 'react';
import { observer } from 'mobx-react';

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
          <h1 className="testheading">{this.props.store.hex}</h1>
        </div>
      </div>
    );
  };
};
