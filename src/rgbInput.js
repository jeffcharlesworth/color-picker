import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ReactBootStrapSlider from 'react-bootstrap-slider';

@observer
class RgbInput extends Component {

  changeColor(e, colorStr) {
    switch(colorStr){
      case 'red':
        this.props.store.rgb.red = e.target.value;
        break;
      case 'green':
        this.props.store.rgb.green = e.target.value;
        break;
      case 'blue':
        this.props.store.rgb.blue = e.target.value;
        break;
    }
  }

  render() {
    return (
      <div className="third ">
        <h2>{this.props.colorStr}</h2>
        <ReactBootStrapSlider
          value={this.props.colorState}
          change={(e) => this.changeColor(e, this.props.colorStr)}
          max={255}
          min={0}
          orientation='horizontal'
        />
      </div>
    );
  }
};

export default RgbInput;
