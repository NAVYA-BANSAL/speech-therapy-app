import React from 'react';
import './Home.css'; // Make sure to include your CSS file

const HomePage = () => {
    return (
        <div className="home-page">
            <h1 className="app-name">SpeechConnect</h1>
            <div className="welcome-message">
                <p>
                    Welcome to SpeechConnect, where we connect people with aphasia.
                    Our mission is to provide a supportive and nurturing environment,
                    empowering individuals to reclaim their voice and communicate with confidence.
                    Together, we can transform challenges into achievements, fostering a community of
                    understanding, compassion, and hope.
                </p>
            </div>
        </div>
    );
};

export default HomePage;
