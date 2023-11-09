import {v4 as uuidv4} from 'uuid'


export default function AddTodo({ user, newTodoItem, setNewTodoItem, handleAddTodo }){

    // Title and description input handlers
    const handleTitle = e => setNewTodoItem({...newTodoItem, title: e.target.value})
    const handleDescription = e => setNewTodoItem({...newTodoItem, description: e.target.value})

    // Form submit handler
    const handleSubmit = () => {
        // dynamic values are updated and passed to AddTodo handler
        const createdTodoItem = {...newTodoItem, id: uuidv4(), author: user, dateCreated: new Date().toLocaleDateString()}
        console.log(createdTodoItem.id)
        handleAddTodo(createdTodoItem)
    }
    return (
        <form 
            onSubmit={e => {
                e.preventDefault();
                handleSubmit();
            }}>
            <h3>Add a Todo:</h3>
            <label htmlFor="title">Title: *</label>
            <input type="text" id="title" name="title" onChange={handleTitle}/>
            <label htmlFor="description">Description:</label>
            <textarea id="description" onChange={handleDescription}/>
            <input type="submit" value="ADD"/>
        </form>
    );
}