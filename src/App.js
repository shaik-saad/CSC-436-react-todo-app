import { useState } from "react";
import AuthenticationBar from "./AuthenticationBar";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {

  // Initial List to display few eaxmple todos after authentication
  const initialList = [{
    id: "1239",
    title: "CSC-436 Assignment One",
    description: "Check D2l for README.pdf",
    author: "SAAAADD",
    dateCreated: "11-01-2023",
    isComplete: true,
    dateCompleted: "11-06-2023"
  }]

  const [user, setUser] = useState("");
  const [todoList, setTodoList] = useState(initialList)

  // Some of the values were updated while adding a todo and others were updated in Todo Component
  // Extracting and moving them over here makes it to easily update the values.
  const [newTodoItem, setNewTodoItem] = useState({
    id: "",
    title: "",
    description: "",
    author: "",
    dateCreated: "",
    isComplete: false,
    dateCompleted: ""
})

// New todo is added to the todoList state
  const handleAddTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList])
  }

  const handleUpdateTodo = (updateTodo) => {
    // TodoList is updated using map method, in which it replaces it with the updated todo item and returns a whole new updated array.
    setTodoList(todoList.map((todo, index) => todo.id === updateTodo.id ? todoList[index] = updateTodo : todo))
  }

  return (
    <>
     <AuthenticationBar user={user} setUser={setUser}/>
     {/* Conditional rendering, only if the user value is Truthy.*/}
     {user && <AddTodo user={user} newTodoItem={newTodoItem} setNewTodoItem={setNewTodoItem} handleAddTodo={handleAddTodo}/>}
     {user && <TodoList todoList={todoList} handleUpdateTodo={handleUpdateTodo}/>}
    </>
  );
}

export default App;
