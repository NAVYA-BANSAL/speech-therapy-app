import React from 'react';
import './About.css'; // Make sure to create a corresponding CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <h1>SpeechConnect</h1>
            <p>
                Welcome to SpeechConnect! We built this platform with the motive of providing a free online resource for individuals suffering from aphasia. Our goal is to offer accessible speech therapy exercises that can be done from the comfort of your home.
            </p>
            <h2>Contact Information</h2>
            <p>If you have any questions or feedback, please feel free to reach out to us:</p>
            <p>Contact Number: <strong>+91 7893524156</strong></p> {/* Replace with your actual contact number */}
            <h2>Feedback</h2>
            <p>Your feedback is important to us! Please take a moment to share your thoughts:</p>
            <a href="https://example.com/feedback" target="_blank" rel="noopener noreferrer">Provide Feedback</a> {/* Replace with your actual feedback link */}
        </div>
    );
};

export default About;
