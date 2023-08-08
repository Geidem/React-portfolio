import React from 'react';
import profileImage from '../assets/images/Profile-pic.jpeg';
function About() {
    return (
        <section>
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
                        Hello! My name is Geofferey Eidem, a 29-year-old residing in the city of Farmington, Utah. etc etc
                    </p>
                    <p>
                        I am currently enrolled in the University of Utah's Coding Bootcamp, and am excited to learn more about web development and programming in general.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;