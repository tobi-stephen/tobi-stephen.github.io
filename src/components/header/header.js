import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/tobi-v.png';

class Header extends Component {
    render(){
        return(
            <div className="header">
                <div className="logo">
                    <Link to={"/"} style={{ textDecorationLine: "none", color: "white" }}>
                        <img src={logo} alt="TOBI STEPHEN"/>
                    </Link>
                </div>
                <div className="nav-links">
                    <Link to={"/"}>home</Link>
                    <Link to={"/work"}>work</Link>
                    {/* <Link to={"/about"}>about</Link> */}
                </div>
            </div>
        )
    }
}

export default Header;