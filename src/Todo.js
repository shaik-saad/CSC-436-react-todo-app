export default function Todo({ todo, dispatch }) {

  const {id, title, description, author, dateCreated, isComplete, dateCompleted } = todo;
  
  const handleComplete = (e) => {
    // isCompleted value based on event target is passed and dynamic values are updated inside the reducer
    dispatch({type: "TOGGLE_TODO", payload: {...todo, isComplete: e.target.checked}})
  };

  const handleDelete = () => {
    dispatch({type: "DELETE_TODO", payload: {id}})
  }

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
