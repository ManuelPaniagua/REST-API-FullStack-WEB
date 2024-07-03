import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
function Navbar() {
    const { isAuthenticated } = useAuth();
    return (
        <nav className='navbar'>
            <h1>Task Manager</h1>
            <ul className='navbar__list'>
                {isAuthenticated ? (
                    <>
                        <li className='navbar__option'>Welcome User</li>
                        <Link to='/logout' className='navbar__link'>
                            Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <li className='navbar__option'>
                            <Link to='/login' className='navbar__link'>
                                Login
                            </Link>
                        </li>
                        <li className='navbar__option'>
                            <Link to='/register' className='navbar__link'>
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
