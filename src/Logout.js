export default function Logout({ user, setUser }){
    return (
        // Clearing user's value upon logout
        <form 
            onSubmit={e => {
                e.preventDefault();
                setUser("")
                }
            }
        >
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout"/>
        </form>
    )
}