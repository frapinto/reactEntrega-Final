import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <nav className="Navbar">
                <Link to='/' style={{textDecoration:"none", color:"blue"}}>
                    <h3 style={{ fontSize: '35px' }}>Neoclothes</h3>
                </Link>
                <div className="buttons-order">
                    <li>
                        <NavLink to={`/category/Calzado`} id="buttons" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Calzado</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/category/Vestimenta`} id="buttons" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Vestimenta</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/category/Gorros`} id="buttons" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Gorros</NavLink>
                    </li>
                </div>
                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar;