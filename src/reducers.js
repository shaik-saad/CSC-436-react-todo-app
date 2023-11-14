import {v4 as uuidv4} from 'uuid'

export const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.username;
        case "REGISTER":
            return action.username;
        case "LOGOUT":
            return "";
        default:
            return state;
    }
}

export const todoReducer = (state, action) => {
    const {type, payload} = action;
    const {id, title, description, author, isComplete} = payload;
    switch (type) {
        case "CREATE_TODO":
            const newTodo = {
                id: uuidv4(),
                title,
                description,
                author,
                dateCreated: new Date().toLocaleDateString(),
                isComplete: false,
                dateCompleted: ""
            }
            return [newTodo, ...state];
        case "TOGGLE_TODO": 
            const updatedTodos = state.map((todo, index) =>  {
                return todo.id === id ? state[index] = {...todo, isComplete, dateCompleted: isComplete === true ? new Date().toLocaleDateString() : ""} : todo
            })
            return updatedTodos
        case "DELETE_TODO":
            const reducedTodos = state.filter((todo) => todo.id !== id)
            return reducedTodos
        default:
            return state;
    }
}