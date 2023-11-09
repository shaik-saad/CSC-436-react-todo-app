import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default function AuthenticationBar({ user, setUser}){

    // If user value is present, Logout Component is displayed. Else Login?Register Components are displayned.
    if (user) return <Logout user={user} setUser={setUser}/>
    else {
        return (
            <>
                <Login setUser={setUser}/>
                <Register setUser={setUser}/>
            </>
        )
    };
}