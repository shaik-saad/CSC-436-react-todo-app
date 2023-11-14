import { useEffect } from "react";
import { useResource } from "react-request-hook";

export default function Todo({ todo, dispatch }) {

  const {id, title, description, author, dateCreated, isComplete, dateCompleted } = todo;

  //update todo request to mock server
  const [updatedTodo, updateTodo] = useResource((id, updatedTodo) => ({
    url: `/todos/${id}`,
    method: 'put',
    data: updatedTodo
  }))
  
  // delete todo request to mock server
  const [deletedTodo, deleteTodo] = useResource((id) => ({
    url: `/todos/${id}`,
    method: 'delete'
  }))

  const handleComplete = (e) => {
    // isCompleted value based on event target is passed and dynamic values are updated
    const updatedTodo = {...todo, isComplete: e.target.checked, dateCompleted: e.target.checked === true ? new Date().toLocaleDateString() : ""}
    updateTodo(id, updatedTodo)
  };

  const handleDelete = () => {
    // todo is deleted using it's id
    deleteTodo(id)
  }

  useEffect(() => {
    // if todo updation is successful then todo is also updated in the global state
    if(updatedTodo && updatedTodo.data) {
      dispatch({type: "TOGGLE_TODO", payload: updatedTodo.data})
    }
  }, [updatedTodo])
  
  useEffect(() => {
    // if todo deletion is successful then todo is also deleted from the global state
    if(deletedTodo && deletedTodo.data){
      dispatch({type: "DELETE_TODO", payload: {id}})
    }
  })
  
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
          <input
            type="checkbox"
            id={`checkbox-id-${id}`}
            name={`checkbox-id-${id}`}
            checked={isComplete}
            onChange={handleComplete}
          />
          <label htmlFor={`checkbox-id-${id}`}>
            {isComplete ? "Completed" : "Mark as Complete"}
          </label>
      </div>
      <button type="button" onClick={handleDelete}>DELETE</button>
      <footer>
        <div>
          Todo by: <b>{author}</b>
        </div>
        <div>Created on: {dateCreated}</div>
        <div>
          Completed on: {isComplete ? dateCompleted : "Not yet completed!"}
        </div>
      </footer>
    </li>
  );
}
