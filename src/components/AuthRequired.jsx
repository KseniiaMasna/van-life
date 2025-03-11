import { Outlet, Navigate, useLocation} from "react-router-dom"

const AuthRequired = () => {
    const location = useLocation()    
    const isLoggedIn = localStorage.getItem('loggedin')
    if (!isLoggedIn){        
        return <Navigate             
            to='login' 
            state={{message: "You must log in first", pathname: location.pathname}}
            replace
            />
    }
    return <Outlet />
}

export default AuthRequired