import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" onChange={props.handleInputChange} value={props.currentTodo} />
    </form>
  )
}

Form.propTypes = {
  currentTodo: React.PropTypes.string,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
}

export default Form;
