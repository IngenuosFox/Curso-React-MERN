import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0 align-center">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
