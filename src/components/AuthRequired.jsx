import { Outlet, Navigate} from "react-router-dom"

const AuthRequired = () => {
    const auth = false
    if (!auth){
        console.log("User is not authenticated")
        return <Navigate to='login' state={{message: "You must log in first"}}/>
    }
    return <Outlet />
}

export default AuthRequired