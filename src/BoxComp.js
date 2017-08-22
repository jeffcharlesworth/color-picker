import React from 'react';
import { observer } from 'mobx-react';
import { comp, hslToRgb, rgbToHex } from './lib/color-switch'

@observer
export default class Box extends React.Component {

  render() {
    function returnColor(h, s, l) {
        return (
          "hsl(" + h + ", " + s + "%, " + l + "%)"
        )
    };

    function createBlock(colorSchema, rgb) {
      var comps = [];
      for (var i = 0; i < colorSchema.length; i++) {
        // var rgbHeading = hslToRgb(colorSchema[i][0], colorSchema[i][1], colorSchema[i][2])
        var rgbHeading = this.store.rgb
        comps.push(<div className="compbox" key={i} style={{backgroundColor: returnColor(colorSchema[i][0], colorSchema[i][1], colorSchema[i][2],)}}>
          <div className="testheadingcont">
            <h2 className="testheading">{rgbToHex(rgbHeading.red, rgbHeading.green, rgbHeading.blue)}</h2>
          </div>
        </div>)
      };
      return comps
    }

    var comps = []

    return (
      <div className='compline boxcont'>
        <div className='compline'>
          {createBlock(this.props.store.triadic)}
        </div>
        <div className='compline'>
          {createBlock(this.props.store.quadratic)}
        </div>
        <div className='compline'>
          {createBlock(this.props.store.splitComp)}
        </div>
        <div className='compline'>
          {createBlock(this.props.store.saturation)}
        </div>
      </div>
    );
  };
};
