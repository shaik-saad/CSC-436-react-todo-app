import Todo from "./Todo";

export default function TodoList({ todoList = [], handleUpdateTodo }){
    return (
        <ul>
            {/* todolist state array is mapped to display the list items */}
            {todoList.map((todo) => <Todo todo={todo} handleUpdateTodo={handleUpdateTodo} key={todo.id}/>)}
        </ul>
    )
}