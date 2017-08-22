import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ReactBootStrapSlider from 'react-bootstrap-slider';
import { hslToRgb } from './lib/color-switch';

@observer
class HslInput extends Component {

  changeColorHsl(e, colorStr) {
    var rgb = hslToRgb(this.props.store.hsl[0], this.props.store.hsl[1], this.props.store.hsl[2])
    switch(colorStr){
      case 'h':
        this.props.store.hsl[0] = e.target.value;
        this.props.store.rgb.red = rgb[0]
        this.props.store.rgb.green = rgb[1]
        this.props.store.rgb.blue = rgb[2]
        break;
      case 's':
        this.props.store.hsl[1] = e.target.value;
        this.props.store.rgb.red = rgb[0]
        this.props.store.rgb.green = rgb[1]
        this.props.store.rgb.blue = rgb[2]
        break;
      case 'l':
        this.props.store.hsl[2]  = e.target.value;
        this.props.store.rgb.red = rgb[0]
        this.props.store.rgb.green = rgb[1]
        this.props.store.rgb.blue = rgb[2]
        break;
    }
  }

  render() {
    return (
      <div>
        <div className="third ">
          <h2>{this.props.colorStr}</h2>
          <ReactBootStrapSlider
            value={this.props.store.hsl[0]}
            change={(e) => this.changeColorHsl(e, 'h')}
            max={360}
            min={0}
            orientation='horizontal'
          />
        </div>
        <div className="third ">
          <h2>{this.props.colorStr}</h2>
          <ReactBootStrapSlider
            value={this.props.store.hsl[1]}
            change={(e) => this.changeColorHsl(e, 's')}
            max={100}
            min={0}
            orientation='horizontal'
          />
        </div>
        <div className="third ">
          <h2>{this.props.colorStr}</h2>
          <ReactBootStrapSlider
            value={this.props.store.hsl[2]}
            change={(e) => this.changeColorHsl(e, 'l')}
            max={100}
            min={0}
            orientation='horizontal'
          />
        </div>
      </div>
    );
  }
};

export default HslInput;
