import React from 'react';
import { observer } from 'mobx-react';

import { hslToRgb, rgbToHex, textContrast, returnRgb } from './lib/color-switch';

@observer
class ColorBanner extends React.Component {

  render() {
    var headingColor =  hslToRgb(this.props.store.inverse[0][0], this.props.store.inverse[0][1], this.props.store.inverse[0][2]);
    var textColor = textContrast(headingColor[0], headingColor[1], headingColor[2]);

     return (
     <div className='banner'style={{backgroundColor: rgbToHex(headingColor[0], headingColor[1], headingColor[2]), color: returnRgb(textColor, textColor, textColor)}}>
       <div>
         <h1 >
           Swift Color Picker
         </h1>
       </div>
       <div className='intro'>
         <p>
           Welcome to Swift Color Picker! choose a color to start,
             adjust with the red, blue, green options and then click
             the hex code to copy to your clipboard and paste into your
             applications.
         </p>
       </div>
    </div>
    )
  }
}

export default ColorBanner;
