import React, { useState } from 'react';
import catImage from './images/cat.jpg';
import peopleImage from './images/people.jpg';
import loveImage from './images/love.jpg';
import polyImage from './images/polyester.jpg';
import frightImage from './images/frightened.jpg';
import labelImage from './images/label.jpg';
import banImage from './images/banquet.jpg';
import compImage from './images/competition.jpg';
import proImage from './images/pronunciation.jpg';
import "./WordRepetition.css";

const WordRepetitionExercise = () => {
    const levels = {
        beginner: [
            { word: 'Cat', image: catImage },
            { word: 'People', image: peopleImage },
            { word: 'Love', image: loveImage },
        ],
        intermediate: [
            { word: 'Label', image: labelImage },
            { word: 'Polyester', image: polyImage },
            { word: 'Frightened', image: frightImage },
        ],
        advanced: [
            { word: 'Banquet', image: banImage },
            { word: 'Competition', image: compImage },
            { word: 'Pronunciation', image: proImage },
        ],
    };

    const [currentLevel, setCurrentLevel] = useState('beginner');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userInput, setUserInput] = useState('');

    const loadQuestion = () => {
        const levelQuestions = levels[currentLevel];
        if (currentQuestion < levelQuestions.length) {
            return levelQuestions[currentQuestion];
        }
        return null;
    };

    const handleMarkComplete = () => {
        const currentWord = levels[currentLevel][currentQuestion].word;
        if (userInput.trim().toLowerCase() === currentWord.toLowerCase()) {
            alert('Great job! You repeated the word correctly.');
            setCurrentQuestion(currentQuestion + 1);
            setUserInput('');
        } else {
            alert('Try again!');
        }
    };

    const handleResetProgress = () => {
        setCurrentQuestion(0);
        setUserInput('');
    };

    const handleLevelChange = (level) => {
        setCurrentLevel(level);
        setCurrentQuestion(0);
        setUserInput('');
    };

    const question = loadQuestion();

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <h1>Word Repetition Exercise</h1>
            <div className="level-buttons">
                <button onClick={() => handleLevelChange('beginner')}>Beginner</button>
                <button onClick={() => handleLevelChange('intermediate')}>Intermediate</button>
                <button onClick={() => handleLevelChange('advanced')}>Advanced</button>
            </div>
            {question ? (
                <div>
                    <img src={question.image} alt="Word Visual" style={{ maxWidth: '400px', margin: '20px 0' }} />
                    <h2>{question.word}</h2>
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Repeat the word here"
                    />
                    <br />
                    <button onClick={handleMarkComplete}>Mark as Complete</button>
                </div>
            ) : (
                <div>
                    <h2>All questions completed!</h2>
                    <button onClick={handleResetProgress}>Reset Progress</button>
                </div>
            )}
        </div>
    );
};

export default WordRepetitionExercise;
