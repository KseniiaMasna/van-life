import { NavLink, Link } from "react-router-dom"

const Header = () => {

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return(
        <header>
            <NavLink className="site-logo" to="/">#VanLife</NavLink>
            <nav>
                <NavLink
                    className={({isActive}) => isActive ? 'active-link' : ''} 
                    to="/about">About</NavLink>
                <NavLink
                    className={({isActive}) => isActive ? 'active-link' : ''} 
                    to="/vans">Vans</NavLink>
                <NavLink
                    className={({isActive}) => isActive ? 'active-link' : ''} 
                    to="/host">Host</NavLink>
                <Link to="login" className="login-link">
                    <img
                        src="src/assets/User circle.png"
                        className="login-icon"
                    />
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    )
}

export default Header