import React from 'react'

export default class Box extends React.Component {
  constructor(props) {
    super();
    this.state = {
      red: props.red,
      green: props.green,
      blue: props.blue,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      red: newProps.red,
      green: newProps.green,
      blue: newProps.blue,
  });
}

  returnColor(red, green, blue) {
    return (
      "rgb(" + red + "," + green + "," + blue + ")"
    )
  }

  render() {
    return (
      <div className="box" style={{backgroundColor: this.returnColor(this.state.red, this.state.green, this.state.blue,)}}>
        <div className="testheadingcont">
          <h1 className="testheading">Lorem ipsum dolor</h1>
        </div>
      </div>
    );
  };
};
