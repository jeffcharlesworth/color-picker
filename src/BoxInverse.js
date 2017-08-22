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
      <div className="box" style={{backgroundColor: this.returnColor(this.props.store.inverseRgb.red, this.props.store.inverseRgb.green, this.props.store.inverseRgb.blue,)}}>
        <div className="testheadingcont">
          <h2 className="testheading">{this.props.store.inverseHex}</h2>
        </div>
      </div>
    );
  };
};
