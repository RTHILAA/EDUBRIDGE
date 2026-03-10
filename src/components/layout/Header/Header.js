import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import { GraduationCap, ArrowRight, Menu, X } from "lucide-react";
import ThemeToggle from '../../ThemeToggle';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="header">
            <nav>
                <h3 className="logo"><GraduationCap /> EduBridge</h3>
                
                {/* Desktop Navigation */}
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/product" onClick={closeMenu}>Product</Link></li>
                    <li><Link to="/pricing" onClick={closeMenu}>Pricing</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                    
                    {/* Mobile Account Buttons */}
                    <li className="mobile-only">
                        <div className="mobile-account">
                            <a href="#!" className="btn-login mobile-btn" onClick={closeMenu}>
                                Login
                            </a>
                            <a href="#!" className="btn-join mobile-btn" onClick={closeMenu}>
                                Join Us <ArrowRight size={16} />
                            </a>
                        </div>
                    </li>
                </ul>

                <div className="account desktop-only">
                    <a href="#!" className="btn-login">
                        Login
                    </a>
                    <a href="#!" className="btn-join">
                        Join Us <ArrowRight size={16} />
                    </a>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button and Theme Toggle */}
                <div className="mobile-controls">
                    <ThemeToggle />
                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Overlay for mobile menu */}
            {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
        </div>
    );
}

export default Header;