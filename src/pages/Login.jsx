import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import { loginUser } from "../api"

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const {state} = useLocation()

    function handleSubmit(e) {
        e.preventDefault()
        loginUser(loginFormData)
            .then(data => console.log(data))
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
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login