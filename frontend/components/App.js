import React from 'react'

import Form from './Form';
import TodoList from './TodoList';

const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: todos
    }
  }

  toggleTodo = (itemId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  addTodo = (item) => {
    const newTodo = {
      name: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  removeTodo = () => {
    this.setState({
      todos: [...this.state.todos, ""]
    })
  }

  render() {
    return (
      <div className='App'>
        <div className="header">
          <h1>Todo List</h1>
          <Form 
            addTodo={this.addTodo}
          />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
        />
        <button removeTodo={this.removeTodo} className='clear-btn'>Done!</button>
      </div>
    )
  }
}
