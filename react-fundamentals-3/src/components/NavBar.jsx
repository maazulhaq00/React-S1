import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (<>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Website</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link" } to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link" } to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link" } to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link" } to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link" } to="/mui">
                                MUI
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    </>);
}

export default NavBar;