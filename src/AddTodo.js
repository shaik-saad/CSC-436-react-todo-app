import { useState } from 'react'


export default function AddTodo({ user, dispatch }){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    // Title and description input handlers
    const handleTitle = e => setTitle(e.target.value)
    const handleDescription = e => setDescription(e.target.value)

    // Form submit handler
    const handleSubmit = () => {
        // Todo's info is passed to dispatch as payload and dynamic values are added inside the reducer
        dispatch({type: "CREATE_TODO", payload: {title, description, author: user}})
        // cleaning inputs after form submission 
        setTitle("")
        setDescription("")
    }
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