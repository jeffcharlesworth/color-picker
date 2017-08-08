import React from 'react'

const Input = (props) => {
  return (
    <div>
      <h2>{props.color}</h2>
      <input type="text" onChange={props.onChange}/>
    </div>
  );
};

export default Input;
