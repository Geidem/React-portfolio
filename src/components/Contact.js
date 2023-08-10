import React, { useState } from 'react';
import { IoCallSharp } from 'react-icons/io5'
import { IoMailSharp } from 'react-icons/io5'

function Contact() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!userName) {
            setErrorMessage('Please enter your name');
            return;
        }
        if (!email) {
            setErrorMessage('Please enter your email address');
            return;
        }
        if (!setMessage(message)) {
            setErrorMessage('Please enter a message');
            return;
        }
        
        setUserName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id ="contact-me" className="contact">
            <div className="flex-row">
                <h2 className= "section-title secondary-border">Contact me</h2>
            </div>

            <div className="contact-info">
                <div>
                   <h3> Welcome, {userName}</h3>
                   <p>Feel free to reach out!</p>
                   <address>
                    Salt Lake City, UT <br/>
                    <IoCallSharp/><a href="tel:801-589-9717" className="contact-logo">801-589-9717
                    </a> 
                    <br/>
                    <IoMailSharp/><a href="mailto://gibby.eidem@gmail.com" className="contact-logo">gibby.eidem@gmail.com
                    </a>
                   </address>
                   <p>
                    <strong>I'd love to hear some feedback or discuss some collaboration!</strong>
                   </p>
                </div>

                <div className="contact-form">
                    <h3>Contact me</h3>
                    <form className="form">
                        <label for="contact-name">Your name</label>
                        <input
                            value={userName}
                            name="userName"
                            onChange={handleInputChange}
                            type="text"
                            id="contact-name"
                            placeholder="Name"
                        />

                        <label for="contact-email">Your email</label>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            id="contact-email"
                            placeholder="Email"
                        />

                        <label for="contact-message">message</label>
                        <textarea
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="message"
                            id="contact-message"
                            placeholder="Message"
                        />
                        <button type="button" onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>    
                )}
            </div>
        </section>
    )

}

export default Contact;