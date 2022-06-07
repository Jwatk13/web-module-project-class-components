import React from 'react'

import Todo from './Todo';

const TodoList = props => {
  return (
    <div className='todo'>
      {props.todos.map(item => (
        <Todo toggleTodo={props.toggleTodo} key={item.id} item={item} />
      ))}
    </div>
  )
}

export default TodoList;

// export default class TodoList extends React.Component {
//   render() {
//     return (
//       <div className='todo-list'>
//       </div>
//     )
//   }
// }
