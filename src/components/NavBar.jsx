import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 rounded m-2">
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/"} >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/about"} >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/login"} >Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
