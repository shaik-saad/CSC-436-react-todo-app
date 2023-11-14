const userReducer = (state, action) => {
    const {type, payload} = action;
    const {username} = payload;
    switch (type) {
        case "LOGIN":
            return username;
        case "REGISTER":
            return username;
        case "LOGOUT":
            return "";
        default:
            return state;
    }
}

const todoReducer = (state, action) => {
    const {type, payload} = action;
    const { id } = payload;
    switch (type) {
        case "CREATE_TODO":
            return [payload, ...state];
        case "TOGGLE_TODO": 
            const updatedTodos = state.map((todo, index) =>  {
                return todo.id === id ? state[index] = payload : todo
            })
            return updatedTodos
        case "DELETE_TODO":
            const reducedTodos = state.filter((todo) => todo.id !== id)
            return reducedTodos
        case "FETCH_TODOS":
            return payload.todos
        default:
            return state;
    }
}

export default function appReducer(state, action){
return {
    user: userReducer(state.user, action),
    todos: todoReducer(state.todos, action)
}
}