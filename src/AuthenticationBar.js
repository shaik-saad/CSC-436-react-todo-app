import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default function AuthenticationBar({ user, dispatchUser}){

    // If user value is present, Logout Component is displayed. Else Login?Register Components are displayned.
    if (user) return <Logout user={user} dispatchUser={dispatchUser}/>
    else {
        return (
            <>
                <Login dispatchUser={dispatchUser}/>
                <Register dispatchUser={dispatchUser}/>
            </>
        )
    };
}