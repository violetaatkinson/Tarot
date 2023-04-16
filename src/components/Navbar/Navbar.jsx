import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import moon from '../../images/moon.png'


const Navbar = () => {
    return (
        <div className='n'>   
            <nav className="fixed-top navbar-tertiary bg-tertiary">
                <div className="direc">
                    <img className='rotate p-4' src={moon} alt='logo' height={105}/>
                    <h2 className='mt-2 mistico'>Tarot Mistico</h2>
                        <div id="menuToggle">
                            <input type="checkbox"/>
                              <span></span>
                              <span></span>
                              <span></span>
                              <ul id="menu">
                                <li>
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/contacto">Contacto</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/calendario">Calendario</Link> 
                                </li>
                              </ul>
                        </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

