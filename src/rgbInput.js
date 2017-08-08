import React from 'react';
import ReactBootStrapSlider from 'react-bootstrap-slider';
import Input from './Input';

const RgbInput = (props, colorState, colorStr) => {
  return (
    <div className="third ">
      <ReactBootStrapSlider
        value={colorState}
        change={(e) => this.changeColor(e, colorStr)}
        max={255}
        min={0}
        orientation='horizontal'
      />
    </div>
  );
};

export default RgbInput;
