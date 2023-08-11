import React from 'react';
import headlinehqImage from '../assets/images/Headling-hq.png';
import hireMe from '../assets/images/Hire-me.png';
import easyNoteTaker from '../assets/images/note-welcome.png';
import weatherDashboard from '../assets/images/SearchCity.png';
import workDay from '../assets/images/Workday.png';
import JHmedical from '../assets/images/JHmedical.png';

function Portfolio() {
    return (
        <div>
            <section id = "work" className="jobs">
                <div className="flex-row">
                    <h2 className="section-title secondary-border">Work</h2>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://jh-medical-6686065930da.herokuapp.com/">
                                {" "}
                                <img
                                    src={JHmedical}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="JH Medical"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4> JH Medical Inc</h4>
                            <p>
                                A real-world use site for a medical supply company. This site was built using React, Node, Express, and MongoDB.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://blakee-37.github.io/404-Found/">
                                {" "}
                                <img
                                    src={headlinehqImage}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="Headline HQ"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4> Headline HQ</h4>
                            <p>
                               An application that allows users to search for news articles by topic. This site was built using HTML, CSS, JavaScript, and jQuery.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                     <div className="job-info">
                        <div className="job-img">
                            <a href="https://lit-plateau-73143.herokuapp.com/">
                                {" "}
                                <img
                                    src={hireMe}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="Hire Me"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4> Hire.me</h4>
                            <p>
                                This application is a job search site that allows users to search for jobs by title and location. 
                            </p>
                        </div>    
                     </div>
                </div>

                <div className="job">
                     <div className="job-info">
                        <div className="job-img">
                            <a href="https://geidem.github.io/Easy-Note-Taker/">
                                {" "}
                                <img
                                    src={easyNoteTaker}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="Hire Me"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4> Easy Note Taker</h4>
                            <p>
                            An application that provides the user the ability to add new
                notes, and to delete notes.
                            </p>
                        </div>    
                     </div>
                </div>
                
                <div className="job">
                     <div className="job-info">
                        <div className="job-img">
                            <a href="https://geidem.github.io/5-day-weather-forcast/">
                                {" "}
                                <img
                                    src={weatherDashboard}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="Weather Forecast"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4> 5 Day Weather Forecast</h4>
                            <p>
                            This weather forecast application is a great solution to quickly and accurately 
                            search for live weather, as well as get a 5 day forecast for any given city in the US with a simple search input.
                            </p>
                        </div>    
                     </div>
                </div>

                <div className="job">
                     <div className="job-info">
                        <div className="job-img">
                            <a href="https://geidem.github.io/Work-day-scheduler/">
                                {" "}
                                <img
                                    src={workDay}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="Workday Scheduler"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4> Workday Scheduler</h4>
                            <p>
                            This project is an example of a day to day planner based off 
                            of common 9-5 business hours, tailored more towards a work day functionality.
                            </p>
                        </div>    
                     </div>
                </div>

                    
            </section>    
        </div>
    )
}

export default Portfolio;