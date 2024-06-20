// Write your code here
import './index.css'
const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="list">
      <p>{title}</p>
      <button className="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
