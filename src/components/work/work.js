import React, { Component } from 'react';
import Header from '../header/header';
import './work.css';

class Work extends Component {
    render(){
        return(
            <div>
                <Header/>
                
                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">GRIT Transactive Grid - Web</h1>
                            <p className="work-duration">2018-present</p>
                            <h2>Technology</h2>
                            <p>ReactJS, MaterialUI</p>
                            <h2>Goal</h2>
                            <p>Create a platform for buying and selling of energy among users of the GRIT smart meters.</p>
                            <a className="work-link" href="https://gtg.grit.systems" target="blank">Check it out</a>
                        </div>
                    </div>

                    <hr className="work-divider"/>

                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">GRIT Transactive Grid - Mobile</h1>
                            <p className="work-duration">2018-present</p>
                            <h2>Technology</h2>
                            <p>ReactJS, React Native, Native Base</p>
                            <h2>Goal</h2>
                            <p>Create a platform for buying and selling of energy among users of the GRIT smart meters.</p>
                            <a className="work-link" href="https://play.google.com/store/apps/details?id=com.gtg_native" target="blank">Check it out</a>
                        </div>
                    </div>

                    <hr className="work-divider"/>

                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">UBA Admin Portal</h1>
                            <p className="work-duration">2018</p>
                            <h2>Technology</h2>
                            <p>ReactJS, Vanilla CSS</p>
                            <h2>Goal</h2>
                            <p>Create a platform for management of UBA rewards platform</p>
                            <a className="work-link" href="https://tobi-stephen.github.io/admin_portal" target="blank">Check it out</a>
                        </div>
                    </div>

                    <hr className="work-divider"/>

                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">3T Impex</h1>
                            <p className="work-duration">2018-present</p>
                            <h2>Technology</h2>
                            <p>Wordpress CMS</p>
                            <h2>Goal</h2>
                            <p>Platform for sharing/blogging about import/export business</p>
                            <a className="work-link" href="http://www.3timpex.com" target="blank">Check it out</a>
                        </div>
                    </div>

                    <hr className="work-divider"/>

                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">Ify's Kitchen</h1>
                            <p className="work-duration">2018</p>
                            <h2>Technology</h2>
                            <p>Wordpress CMS</p>
                            <h2>Goal</h2>
                            <p>Create a platform for recipes sharing and online learning</p>
                            <a className="work-link" href="https://ifyskitchen.com" target="blank">Check it out</a>
                        </div>
                    </div>

                    <hr className="work-divider"/>

                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">iQube SDP</h1>
                            <p className="work-duration">2016-2018</p>
                            <h2>Technology</h2>
                            <p>Wordpress CMS</p>
                            <h2>Goal</h2>
                            <p>Create a platform for technology skill development</p>
                            <p>Participated as a mentor in tracks (Python, C++, SQL, Linux Server Admin)</p>
                            <a className="work-link" href="https://iqubesdp.com" target="blank">Check it out</a>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default Work;