import React from "react";
import { Link } from "react-router-dom";
import "./Exercise.css";

function Exercise() {
    return (
        <div className="exercise-container">
            <h1>Exercise Modules</h1>
            <ul>
                <li>
                    <Link to="/exercise/word-repetition">Word Repetition</Link>
                </li>
                <li>
                    <Link to="/exercise/sentence-formation">Sentence Formation</Link>
                </li>
                <li>
                    <Link to="/exercise/comprehension-practice">Comprehension Practice</Link>
                </li>
            </ul>
        </div>
    );
}

export default Exercise;
