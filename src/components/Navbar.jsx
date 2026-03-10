import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import './../styles/Global.css';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Solutions', path: '/solutions' },

        { name: 'Technology', path: '/technology' },
        { name: 'Projects', path: '/projects' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <img src={logoImg} alt="Ecometrix Solutions Logo" style={{ height: '100px' }} />
                </Link>

                {/* Desktop Nav */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile menu toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile nav */}
            {isOpen && (
                <div className="mobile-nav glass">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                            onClick={handleLinkClick}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}

            {/* Styles for mobile menu directly here for simplicity */}
            <style>{`
        .mobile-toggle {
          display: none;
          cursor: pointer;
        }

        @media (max-width: 968px) {
          .mobile-toggle {
            display: block;
          }
          .mobile-nav {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            height: calc(100vh - 80px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            z-index: 999;
          }
          .mobile-nav a {
            font-size: 1.5rem;
            font-weight: 600;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
