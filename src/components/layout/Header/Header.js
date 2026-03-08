import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight } from "lucide-react";

function Header() {
    return (
        <div className="header">
            <nav>
                <h3 className="logo"><GraduationCap /> EduBridge</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="account">
                    <a href="#!" className="btn-login">
                        Login
                    </a>
                    <a href="#!" className="btn-join">
                        Join Us <ArrowRight size={16} />
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Header;
