import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();
    return (
        <nav className='navbar'>
            <Link to={isAuthenticated ? '/task' : '/'}>
                <h1>Task Manager</h1>
            </Link>
            <ul className='navbar__list'>
                {isAuthenticated ? (
                    <>
                        <li className='navbar__option'>
                            Welcome {user.username}
                        </li>
                        <Link
                            to='/'
                            onClick={() => {
                                logout();
                            }}
                            className='navbar__link'>
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
