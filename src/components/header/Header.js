import React from "react";
import "./Header.css";
import { ArrowRight } from "lucide-react";

function Header() {
    return (
        <div className="header">
            <nav>
                <h3 className="logo">EduBridge</h3>
                <ul>
                    <li>
                        <a href="#!">Home</a>
                    </li>
                    <li>
                        <a href="#!">Product</a>
                    </li>
                    <li>
                        <a href="#!">Pricing</a>
                    </li>
                    <li>
                        <a href="#!">Contact</a>
                    </li>
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
