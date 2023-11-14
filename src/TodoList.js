import Todo from "./Todo";

export default function TodoList({ todos = [], dispatchTodos }){
    return (
        <ul>
            {/* todolist state array is mapped to display the list items */}
            {todos.map((todo) => <Todo todo={todo} dispatchTodos={dispatchTodos} key={todo.id}/>)}
        </ul>
    )
}