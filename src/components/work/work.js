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
                            <h1 className="work-header">Event Streamer</h1>
                            <p className="work-duration">2024</p>
                            <h2>Technology</h2>
                            <p>Python, Flask, Kafka, MongoDB, ElasticSearch, Docker, Kubernetes</p>
                            <h2>Goal</h2>
                            <p>Event-driven microservice workflow with a publisher and subscriber services.</p>
                            <p>Developed a flask app to showcase workflow for proof of concept event-driven system and modern application packaging.</p>
                            <a className="work-link" href="https://github.com/tobi-stephen/event-streamer" target="blank">Check it out</a>
                        </div>
                    </div>

                    <hr className="work-divider"/>

                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">Real-time Inventory Aggregator</h1>
                            <p className="work-duration">2024</p>
                            <h2>Technology</h2>
                            <p>Apache Kafka, Kafka Connect, KSQLDB, Docker, ElasticSearch, Kibana</p>
                            <h2>Goal</h2>
                            <p>Implemented a data pipeline for aggregating pharmacy inventory systems into a common store in order to improve response times for HMOs.</p>
                            <p>The pipeline aggregates inventory from different data stores including MySQL and MongoDB and indexes it into an elasticsearch instance.</p>
                            <a className="work-link" href="https://github.com/tobi-stephen/inventory-aggregator-with-kafka" target="blank">Check it out</a>
                        </div>
                    </div>

                    <hr className="work-divider"/>

                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">Medication Dispatch using Drones</h1>
                            <p className="work-duration">2022</p>
                            <h2>Technology</h2>
                            <p>Java, Spring Boot, H2 Database</p>
                            <h2>Goal</h2>
                            <p>Developed a web service to manage abstract medication dispatch with abstract drones.</p>
                            <a className="work-link" href="https://github.com/tobi-stephen/drone-medication-dispatch" target="blank">Check it out</a>
                        </div>
                    </div>

                    <hr className="work-divider"/>

                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">Retrieval Augmentation Generation(RAG) System</h1>
                            <p className="work-duration">2024</p>
                            <h2>Technology</h2>
                            <p>Python, Kafka, ElasticSearch, OpenAI</p>
                            <h2>Goal</h2>
                            <p>Implemented a project which integrates a Retrieval-Augmented-Generation(RAG) AI system with real-time data augmentation.</p>
                            <p>The system works to improve and customize user prompts with semantic search results added before being passed to an LLM.</p>
                            <a className="work-link" href="https://github.com/tobi-stephen/RAG-with-kafka-and-elastic-search" target="blank">Check it out</a>
                        </div>
                    </div>

                    <hr className="work-divider"/>

                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">Chatbot Assistant</h1>
                            <p className="work-duration">2024</p>
                            <h2>Technology</h2>
                            <p>Python, Flask, OpenAI, LangChain, Docker</p>
                            <h2>Goal</h2>
                            <p>The project is a minimalist implementation of a chatbot assistant.</p>
                            <p>Grounded by context document uploaded for improved accuracy in response.</p>
                            <a className="work-link" href="https://github.com/tobi-stephen/chatbot-flask-openai" target="blank">Check it out</a>
                        </div>
                    </div>

                    <hr className="work-divider"/>

                    <div className="work">
                        <div className="work-img"></div>
                        <div className="work-content">
                            <h1 className="work-header">Road condition Sensing</h1>
                            <p className="work-duration">2020</p>
                            <h2>Technology</h2>
                            <p>React Native, Android</p>
                            <h2>Goal</h2>
                            <p>Project utilizing android sensors to detect road conditions</p>
                            <p>Created a demo application that uses the combination of accelerometer and gyrometer of an android device to detect different road conditions(Potholes, bumps, etc)</p>
                            <a className="work-link" href="https://github.com/tobi-stephen/road_condition_sensing" target="blank">Check it out</a>
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
                            <h1 className="work-header">Ify's Kitchen</h1>
                            <p className="work-duration">2018</p>
                            <h2>Technology</h2>
                            <p>Wordpress CMS</p>
                            <h2>Goal</h2>
                            <p>Create a platform for recipes sharing and cooking lessons</p>
                            <a className="work-link" href="https://ifyskitchen.com" target="blank">Check it out</a>
                        </div>
                    </div>

            </div>
        )
    }
}

export default Work;