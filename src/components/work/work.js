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
                            <p>Create a platform for recipes sharing and cooking lessons</p>
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

                    <hr className="work-divider"/>

                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">Flower Classifier</h1>
                            <p className="work-duration">2018</p>
                            <h2>Technology</h2>
                            <p>Python, PyTorch, Jupyter, OpenCV, Numpy</p>
                            <h2>Goal</h2>
                            <p>a project for classifying various types of flowers through deep learning as part of the PyTorch Scholarship Challenge from Facebook</p>
                            <p>Constructed a model based off of DenseNet121 and attained over 90% accuracy on test set.</p>
                            <a className="work-link" href="https://github.com/tobi-stephen/flower-classifier" target="blank">Check it out</a>
                        </div>
                    </div>

                    <hr className="work-divider"/>

                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">Convolutional Neural Network for Visual Recognition(CS231n)</h1>
                            <p className="work-duration">2018</p>
                            <h2>Technology</h2>
                            <p>Python, PyTorch, Jupyter, OpenCV, MatPlotLib Numpy</p>
                            <h2>Goal</h2>
                            <p>A course from Stanford University led by Computer Vision Expert Fei Fei Li</p>
                            <p>Worked on several implementation of various neural network models in the assignments notebooks</p>
                            <p>Including artificial neural network to convolutional neural network, Recurrent Neural Network, Long Short Term Memory, Style Transfer</p>
                            <a className="work-link" href="https://github.com/tobi-stephen/cs231n-stanford" target="blank">Check it out</a>
                        </div>
                    </div>
                
                
            </div>
        )
    }
}

export default Work;