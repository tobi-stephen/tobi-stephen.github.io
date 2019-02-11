import React, { Component } from 'react';
import Header from '../header/header';
import home from "../../assets/home-v.png";
import { Link } from "react-router-dom";
import './home.css';

class Home extends Component {
    render(){
        return(
            <div>
                <Header></Header>
                <div className="main">
                    <img src={home} className="home-logo" alt="home-graphic"/>
                    <div className="desc">
                        <h1 className="header-desc">
                            Hello, I'm Tobi. I'm a Software Engineer, Electrical Engineer, & lover of Music.
                        </h1>
                        <p className="brief-desc">
                            I am interested in machine learning and computer vision. 
                            I enjoy building application/systems including web, mobile and native desktop.
                        </p>
                        <p>
                            
                        </p>
                        <p className="brief-desc">
                            Check my projects <Link to={"/work"}>here</Link> and on <a href="https://github.com/tobi-stephen/">Github</a> and my resume <a href="https://bit.ly/2DqK9UW">here</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
