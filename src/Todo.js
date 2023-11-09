export default function Todo({ todo, handleUpdateTodo }) {

  const {id, title, description, author, dateCreated, isComplete, dateCompleted } = todo;
  
  const handleComplete = (e) => {
    // Updating the dynamic values based on event target
    const updateTodo = {
      ...todo,
      isComplete: e.target.checked,
      dateCompleted: e.target.checked === true ? new Date().toLocaleDateString() : ""
    };
    handleUpdateTodo(updateTodo);
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <form>
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
      </form>
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
