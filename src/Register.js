import { useState } from "react"

export default function Register({ dispatch }){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    // Handling user's inputs
    const handleUsername = e => setUsername(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleRepeatPassword = e => setRepeatPassword(e.target.value)
    return (
        // On Submission username is saved in it's respective state in App.js.
        <form 
            onSubmit={e => {
                e.preventDefault();
                dispatch({type: "REGISTER", payload: {username}});
                }
            }
        >
            <label htmlFor="register-username">Username:</label>
            <input type="text" id="register-username" name="register-username" onChange={handleUsername}/>
            <label htmlFor="register-password">Password:</label>
            <input type="password" id="register-password" name="register-password" onChange={handlePassword}/>
            <label htmlFor="register-repeat-password">Repeat Password:</label>
            <input type="password" id="register-repeat-password" name="register-repeat-password" onChange={handleRepeatPassword}/>
            {/* Register button is disabled if username, password and repeatPassword are empty and also if password and repeatPassword are not matched*/}
            <input type="submit" value="Register" disabled={username === "" || password === "" || repeatPassword === "" || password !== repeatPassword}/>
        </form>
    )
}