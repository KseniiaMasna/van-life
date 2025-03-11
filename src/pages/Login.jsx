import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { loginUser } from "../api"

const Login = () => {
    const [authState, setAuthState] = useState('idle')
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const [userIsLogged, setUserIsLogged] = useState(false)
    const [err, setErr] = useState(null)

    const {state} = useLocation()
    const location = useLocation()
    const from = location.state?.pathname || '/host'    
    const navigate = useNavigate()

    

    function handleSubmit(e) {
        e.preventDefault()        
        setAuthState('submitting')        
        loginUser(loginFormData)
            .then(data => {
                localStorage.setItem("loggedin", true)
                navigate(from, { replace: true } )
                // if(data.token === "Enjoy your pizza, here's your tokens."){
                //     setUserIsLogged(true)
                // } else {
                //     console.log("Token isn't correct")
                // }
            })                     
            .catch(error => {
                setErr(error)
            })
            .finally( () => {
                setAuthState('idle')
            })         
    }
    

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return(
        <div className="login-container">
            {state ? <p>{state.message}</p> : null}
            <h1>Sign in to your account</h1>
            {err?.message && <p>{err.message}</p>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button 
                    disabled={authState === 'submitting'}
                    
                >{authState === 'submitting' ? 'Logging in...' : 'Log in'}</button>
            </form>
        </div>
    )
}

export default Login