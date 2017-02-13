import React from 'react';

const Item = (props) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.isComplete}/> {props.name}
    </li>
  )
}

export default Item;
