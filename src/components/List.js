import React from 'react';
import Item from './Item';

const List = (props) => {
  return (
    <div className="Todo-list">
      <ul>
        {props.todos.map((todo) => <Item key={todo.id} {...todo} /> )}
      </ul>
    </div>
  )
}

List.propTypes = {
  todos: React.PropTypes.array.isRequired
}

export default List;
