import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class BoxHsl extends React.Component {
  returnHslColor(hsl) {
    return (
      "hsl(" + hsl[0] + ", " + hsl[1] + "%, " + hsl[2] + "%)"
    )
  }

  render() {
    return (
      <div className="box" style={{backgroundColor: this.returnHslColor(this.props.store.hsl)}}>
        <div className="testheadingcont">
          <h1 className="testheading">Lorem ipsum dolor</h1>
        </div>
      </div>
    );
  };
};
