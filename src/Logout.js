export default function Logout({ user, dispatch }){
    return (
        // Clearing user's value upon logout
        <form 
            onSubmit={e => {
                e.preventDefault();
                dispatch({type: "LOGOUT", payload: {}})
                }
            }
        >
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout"/>
        </form>
    )
}