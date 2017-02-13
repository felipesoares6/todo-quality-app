import React from 'react';

export const Form = (props) => {
  return (
    <form>
      <input type="text" onChange={props.handleInputChange} value={props.currentTodo} />
    </form>
  )
}
