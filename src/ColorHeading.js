import React from 'react';
import { observer } from 'mobx-react';

import { hslToRgb, rgbToHex } from './lib/color-switch';

@observer
class ColorHeading extends React.Component {

  render() {
    var headingColor =  hslToRgb(this.props.store.inverse[0][0], this.props.store.inverse[0][1], this.props.store.inverse[0][2])

     return (
     <div className='colorselecttext'>
      <h2 style={{color: rgbToHex(headingColor[0], headingColor[1], headingColor[2])}}>
        {this.props.text}
      </h2>
    </div>
    )
  }
}

export default ColorHeading;
