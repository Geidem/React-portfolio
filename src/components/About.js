import React from 'react';
import profileImage from '../assets/images/Profile-pic.png';
function About() {
    return (
        <section id="about-me" classname="my-5 intro">
            <div class="flex-row">
                <h1 id = "about" className= "section-title primary-border">
                    About Me
                </h1>
            </div>
            <div class="flex-row">
                <div class = "intro-info">
                    <div class="intro-img">
                        <img src= {profileImage} style= {{width: "100%"}} alt="Profile Picture" />
                    </div>
                    <p>
                        Hello! My name is Geofferey Eidem, a 29-year-old residing in the city of North Salt Lake, Utah. I'm a small business owner in the automotive industry. While thriving in my current venture, 
                        I have decided to pursue a career in web development. I have always had a passion for technology, and have been interested in coding since I was a teenager. Seeing the ins and outs of the web development process
                        is something that has always peaked my interest, motivating me to learn more about all things front end and back end development.
                    </p>
                    <p>
                        I am currently enrolled in the University of Utah's Full Stack Web Development Bootcamp, and am excited to learn more about web development and programming in general. 
                        I am looking forward to the challenges that lie ahead, and am excited to see where this journey takes me.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;