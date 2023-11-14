import { useEffect, useReducer} from "react";
import AuthenticationBar from "./AuthenticationBar";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import appReducer from "./reducers";
import { StateContext } from './contexts.js'
import { useResource } from "react-request-hook";

function App() {

  // useReducer used for maintaining user's name and todo list at global level
  // Empty user string and empty todos array are passed in a object as Initial State
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: []
  })

  const {user} = state;

  //Read todo list from mock server
  const [todos, getTodos] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  //getTodos fired up only once when component is mounted
  useEffect(getTodos, [])

  // updating todo list in global state 
  useEffect(() => {
    if(todos && todos.data){
      dispatch({type: "FETCH_TODOS", payload: {todos: todos.data.reverse()}})
    }
  }, [todos])

  return (
    <>
      <StateContext.Provider value={{state, dispatch}}>
        <h1>React Todo App</h1>
        <AuthenticationBar/>
        {/* Conditional rendering, only if the user value is Truthy.*/}
        {user && <AddTodo/>}
        {user && <TodoList/>}
      </StateContext.Provider>
    </>
  );
}

export default App;
