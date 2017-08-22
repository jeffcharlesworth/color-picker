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
      <div>
        <div className="third ">
          <h2>Red</h2>
          <ReactBootStrapSlider
            value={this.props.store.rgb.red}
            change={(e) => this.changeColor(e, 'red')}
            max={255}
            min={0}
            orientation='horizontal'
          />
        </div>
        <div className="third ">
          <h2>Blue</h2>
          <ReactBootStrapSlider
            value={this.props.store.rgb.blue}
            change={(e) => this.changeColor(e, 'blue')}
            max={255}
            min={0}
            orientation='horizontal'
          />
        </div>
        <div className="third ">
          <h2>Green</h2>
          <ReactBootStrapSlider
            value={this.props.store.rgb.green}
            change={(e) => this.changeColor(e, 'green')}
            max={255}
            min={0}
            orientation='horizontal'
          />
        </div>
      </div>
    );
  }
};

export default RgbInput;
