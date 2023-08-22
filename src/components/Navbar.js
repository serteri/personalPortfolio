import { NavLink } from "react-router-dom"
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
export function Navbar() {
    return (
        <nav className='navbar navbar-expand-xxl bg-primary navs'>
            <div className="container-fluid">
                <NavLink className='navbar-brand ' id="navbarNav" to="/">Home</NavLink>
                <div>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item "><NavLink className='nav-link active' to="/about">About</NavLink></li>
                        <li className="nav-item "><NavLink className='nav-link' to="/projects">Projects</NavLink></li>
                        <li className="nav-item"><NavLink className='nav-link' to="/about/contact">Contact</NavLink></li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}