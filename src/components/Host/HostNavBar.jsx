import { Link } from "react-router-dom";

const HostNavBar = () => {

    return(
        <nav className="host-nav">
            <Link to=".">Dashboard</Link>
            <Link to="income">Income</Link>
            <Link to="vans">Vans</Link>
            <Link to="reviews">Reviews</Link>
        </nav>
    )
}

export default HostNavBar