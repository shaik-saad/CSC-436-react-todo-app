import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default function AuthenticationBar({ user, dispatch}){

    // If user value is present, Logout Component is displayed. Else Login?Register Components are displayned.
    if (user) return <Logout user={user} dispatch={dispatch}/>
    else {
        return (
            <>
                <Login dispatch={dispatch}/>
                <Register dispatch={dispatch}/>
            </>
        )
    };
}