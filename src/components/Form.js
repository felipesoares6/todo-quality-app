import React from 'react';

const Form = (props) => {
  return (
    <form>
      <input type="text" onChange={props.handleInputChange} value={props.currentTodo} />
    </form>
  )
}

Form.propTypes = {
  currentTodo: React.PropTypes.string,
  handleInputChange: React.PropTypes.func
}

export default Form;
