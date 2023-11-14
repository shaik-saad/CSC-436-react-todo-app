export default function Logout({ user, dispatchUser }){
    return (
        // Clearing user's value upon logout
        <form 
            onSubmit={e => {
                e.preventDefault();
                dispatchUser({type: "LOGOUT"})
                }
            }
        >
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout"/>
        </form>
    )
}