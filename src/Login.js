import { useState } from "react";

export default function Login({ setUser }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Handling user's inputs
    const handleUsername = e => setUsername(e.target.value);
    const handlePassword = e => setPassword(e.target.value);

    return (
        // On Submission username is saved in it's respective state in App.js.
        <form 
            onSubmit={e => {
                e.preventDefault();
                setUser(username)
                } 
            }
        >
            <label htmlFor="login-username">Username:</label>
            <input type="text" id="login-username" name="login-username" onChange={handleUsername}/>
            <label htmlFor="login-password">Password:</label>
            <input type="password" id="login-password" name="login-password" onChange={handlePassword}/>
            {/* Login button is disabled if username and password are empty*/}
            <input type="submit" value="Login" disabled={username === "" && password === ""}/>
        </form>
    );
}