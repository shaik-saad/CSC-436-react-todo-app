import Todo from "./Todo";

export default function TodoList({ todos = [], dispatch }){
    return (
        <ul>
            {/* todolist state array is mapped to display the list items */}
            {todos.map((todo) => <Todo todo={todo} dispatch={dispatch} key={todo.id}/>)}
        </ul>
    )
}