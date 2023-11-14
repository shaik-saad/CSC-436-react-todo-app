import { useContext, useEffect, useState } from 'react'
import { StateContext } from './contexts'
import {v4 as uuidv4} from 'uuid'
import { useResource } from 'react-request-hook'


export default function AddTodo(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const {state, dispatch} = useContext(StateContext)
    const {user} = state

    //add todo request to mock server 
    const [todo, createTodo] = useResource((newTodo) => ({
        url: '/todos',
        method: 'post',
        data: newTodo
    }))

    // Title and description input handlers
    const handleTitle = e => setTitle(e.target.value)
    const handleDescription = e => setDescription(e.target.value)

    // Form submit handler
    const handleSubmit = () => {
        // dynamic values are added to Todo's info.
        const newTodo = {
            id: uuidv4(),
            title,
            description,
            author: user,
            dateCreated: new Date().toLocaleDateString(),
            isComplete: false,
            dateCompleted: ""
        }
        createTodo(newTodo)
    }

    useEffect(() => {
        //if todo is successfully added to db.json, updating global todo list with new todo
        if(todo && todo.data){
            dispatch({type: "CREATE_TODO", payload: todo.data})
            // cleaning inputs after todo list is updated with new todo succesfully  
            setTitle("")
            setDescription("")
        }
    }, [todo])

    return (
        <form 
            onSubmit={e => {
                e.preventDefault();
                handleSubmit();
            }}>
            <h3>Add a Todo:</h3>
            <label htmlFor="title">Title: *</label>
            <input type="text" id="title" name="title" value={title} onChange={handleTitle}/>
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={handleDescription}/>
            <input type="submit" value="ADD" disabled={title === ""}/>
        </form>
    );
}