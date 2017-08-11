import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ReactBootStrapSlider from 'react-bootstrap-slider';

@observer
class RgbInput extends Component {

  changeColor(e, colorStr) {
    switch(colorStr){
      case 'h':
        this.props.store.hsl[0] = e.target.value;
        break;
      case 's':
        this.props.store.hsl[1] n = e.target.value;
        break;
      case 'l':
        this.props.store.hsl[2]  = e.target.value;
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
