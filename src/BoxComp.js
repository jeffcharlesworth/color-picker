import React from 'react';
import { observer } from 'mobx-react';
import { comp, hslToRgb, rgbToHex } from './lib/color-switch';
import CopyToClipBoard from 'react-copy-to-clipboard';

@observer
export default class Box extends React.Component {

  render() {
    function returnColor(h, s, l) {
        return (
          "hsl(" + h + ", " + s + "%, " + l + "%)"
        )
    };

    function createBlock(colorSchema) {
      var comps = [];
      for (var i = 0; i < colorSchema.length; i++) {
        var rgbHeading = hslToRgb(colorSchema[i][0], colorSchema[i][1], colorSchema[i][2]);
        var hexCode = rgbToHex(rgbHeading[0], rgbHeading[1], rgbHeading[2]);
        //var rgbHeading = this.store.rgb
        comps.push(<div className="compbox" key={i} style={{backgroundColor: returnColor(colorSchema[i][0], colorSchema[i][1], colorSchema[i][2],)}}>
            <CopyToClipBoard text={hexCode}>
              <div className="testheadingcont">
                <h2 className="hexheading">{hexCode}</h2>
              </div>
            </CopyToClipBoard>
        </div>)
      };
      return comps
    }

    var comps = []

    return (
      <div className='compline boxcont'>
        <div className='compline'>
          <h2>Complementary</h2>
          {createBlock(this.props.store.inverse)}
        </div>
        <div className='compline'>
          <h2>Triadic</h2>
          {createBlock(this.props.store.triadic)}
        </div>
        <div className='compline'>
          <h2>Quadratic</h2>
          {createBlock(this.props.store.quadratic)}
        </div>
        <div className='compline'>
          <h2>Split Complementary</h2>
          {createBlock(this.props.store.splitComp)}
        </div>
        <div className='compline'>
          <h2>Saturation</h2>
          {createBlock(this.props.store.saturation)}
        </div>
      </div>
    );
  };
};
