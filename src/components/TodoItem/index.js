import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = () => {
    // const {todoDetails} = this.props
    // const {updatedTitle} = this.state
    this.setState({editing: false})
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state

    return (
      <li
        className={todoDetails.completed ? 'todo-item-completed' : 'todo-item'}
      >
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.handleSave}>
              Save
            </button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={todoDetails.completed}
              onChange={() => toggleComplete(todoDetails.id)}
            />
            <p className="title">{todoDetails.title}</p>

            <button
              className="edit-btn"
              onClick={this.handleEdit}
              type="button"
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteTodo(todoDetails.id)}
              type="button"
            >
              Delete
            </button>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
