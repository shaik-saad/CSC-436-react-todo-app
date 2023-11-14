import { useEffect, useState } from "react"
import { useResource } from "react-request-hook"

export default function Register({ dispatch }){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    //user add request to mock server
    const [user, register] = useResource((username, password) => ({
        url: '/register',
        method: 'post',
        data: {email: username, password}
    }))

    useEffect(() => {
        if(user && user.data){
            // updating user's name in global state
            dispatch({type: "REGISTER", payload: {username: user.data.user.email}})
            //clearing local states
            setUsername("");
            setPassword("")
            setRepeatPassword("")
        }
    }, [user])
    
    // Handling user's inputs
    const handleUsername = e => setUsername(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleRepeatPassword = e => setRepeatPassword(e.target.value)
    return (
        // On Submission username is saved in it's respective state in App.js.
        <form 
            onSubmit={e => {
                e.preventDefault();
                register(username, password);
                }
            }
        >
            <label htmlFor="register-username">Username:</label>
            <input type="email" id="register-username" name="register-username" value={username} onChange={handleUsername} required/>
            <label htmlFor="register-password">Password:</label>
            <input type="password" id="register-password" name="register-password" value={password} onChange={handlePassword}/>
            <label htmlFor="register-repeat-password">Repeat Password:</label>
            <input type="password" id="register-repeat-password" name="register-repeat-password" value={repeatPassword} onChange={handleRepeatPassword}/>
            {/* Register button is disabled if username, password and repeatPassword are empty and also if password and repeatPassword are not matched*/}
            <input type="submit" value="Register" disabled={username === "" || password === "" || repeatPassword === "" || password !== repeatPassword}/>
        </form>
    )
}