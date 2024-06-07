import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logoblog.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);

    useEffect(() => {
        const handleResize = () => {
            setIsNavShowing(window.innerWidth > 800);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const closeNavHandler = () => {
        if (window.innerWidth < 800) {
            setIsNavShowing(false);
        }
    };

    return (
        <nav className='nav'>
            <div className='container nav_container'>
                <Link to="/" className='nav_logo' onClick={closeNavHandler}>
                    <img src={Logo} alt="Navbar Logo" />
                </Link>
                <button className='nav_toggle-btn' onClick={() => setIsNavShowing(!isNavShowing)}>
                    {isNavShowing ? <AiOutlineClose /> : <FaBars />}
                </button>
                <ul className={`nav_menu ${isNavShowing ? 'show' : ''}`}>
                    <li><Link to="/profile/sddd" onClick={closeNavHandler}>Sofia Loria</Link></li>
                    <li><Link to="/create" onClick={closeNavHandler}>Create Post</Link></li>
                    <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
                    <li><Link to="/logout" onClick={closeNavHandler}>Logout</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;

