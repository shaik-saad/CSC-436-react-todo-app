import { useReducer} from "react";
import AuthenticationBar from "./AuthenticationBar";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import appReducer from "./reducers";

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

  // useReducer used for maintaining user's name at global level
  // initial list stored as a global state and updated using useReducer's dispatch
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initialList
  })

  const {user, todos} = state;

  return (
    <>
     <AuthenticationBar user={user} dispatch={dispatch}/>
     {/* Conditional rendering, only if the user value is Truthy.*/}
     {user && <AddTodo user={user} dispatch={dispatch}/>}
     {user && <TodoList todos={todos} dispatch={dispatch}/>}
    </>
  );
}

export default App;
