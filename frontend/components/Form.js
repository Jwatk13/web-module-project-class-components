import React from 'react'

export default class Form extends React.Component {

  constructor () {
    super ()
    this.state = {
      itemText: ""
    }
  }

  handleChange = evt => {
    this.setState({
      itemText: evt.target.value
    })
  };

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.addTodo(this.state.itemText)
    this.setState({
      itemText: ""
    })
  };

  render() {
    return (
     <form onSubmit={this.handleSubmit}>
       <input type="text" name="item" value={this.state.itemText} onChange={this.handleChange} />
       <button>Add</button>
     </form>
    );
  }
}
