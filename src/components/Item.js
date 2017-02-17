import React from 'react';
import { partial } from '../lib/utils'

const Item = (props) => {
  const handleToggle = partial(props.handleToggle, props.id);
  const handleRemove = partial(props.handleRemove, props.id);
  return (
    <li>
      <span className="delete-item">
        <a href="#" onClick={handleRemove}> X </a>
      </span>
      <input type="checkbox" onChange={handleToggle} checked={props.isComplete}/> {props.name}
    </li>
  )
}

Item.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired,
}

export default Item;
