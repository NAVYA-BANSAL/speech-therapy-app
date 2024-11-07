import React, { useState, useEffect } from "react";
import "./SentenceFormation.css";

const exercises = {
    beginner: [
        { jumbled: "funny/is/very/sister/my", solution: "my sister is very funny" },
        { jumbled: "summer/when/camp/will/start/the", solution: "when will the summer camp start" },
        { jumbled: "superhero/how/the/film/is/new", solution: "how is the new superhero film" },
        { jumbled: "masks/now/wears/everybody", solution: "everybody wears masks now" },
        { jumbled: "an/father/my/architect/is", solution: "my father is an architect" },
    ],
    intermediate: [
        { jumbled: "threat/earth/global/to/on/today/is/warming/the/biggest/life/single", solution: "global warming is the single biggest threat to life on earth today" },
        { jumbled: "average/used/term/earth’s/rise/the/describe/in/temperature/is/to/unnatural/the", solution: "the term is used to describe the unnatural rise in earth’s average temperature" },
        { jumbled: "the/warming/increased/driver/dioxide/primary/global/is/carbon/of", solution: "increased carbon dioxide is the primary driver of global warming" },
        { jumbled: "impact/already/warming/is/creating/global/significant", solution: "global warming is already creating significant impact" },
        { jumbled: "is the/computer science/concerned with/robotics/field/and engineering/creating robots", solution: "robotics is the field of computer science and engineering concerned with creating robots" }
    ],
    advanced: [
        {
            question: `A. In simpler terms, it is the Indian version of the Razzies.
B. The 3rd Golden Kela Awards will be hosted by Cyrus Broacha this year.
C. It was created in order to ridicule the bad performances and as a revenge for wasting our precious time and money on such idiotic films.
D. The Golden Kela is held each year where awards are given for the year's worst in Bollywood.
E. It was created by Random magazine, India's longest running humor magazine in the year 2009.`,
            options: ["A. DAECB", "B. BACDE", "C. ACEDB", "D. CEADB"],
            correctOption: "A. DAECB",
            explanation: `Option A\nD introduces the Golden Kela Awards (INTRO).
            A explains the awards in simpler terms (EXPLANATION OF TOPIC).
            E continues the topic by explaining its creation (HISTORY).
            C gives the purpose (PURPOSE).
            B talks about the present, making it the closing statement.`
        },
        {
            question: `A. Despite the strong performance of the economy in 2010-11, the outlook for 2011-12 is clouded by stubborn and persistently high inflation, and rising external risks.
B. The three key macroeconomic concerns before the Union Budget 2011-12 were high inflation, high current account deficit (CAD), and fiscal consolidation.
C. Additionally, there was an expectation that the government would restart the reform process.
D. While the Budget sets a lower nominal gross domestic product (GDP) growth target of 14%, we believe that the real GDP growth target of 9% factored in the Budget is on the optimistic side.
E. The Budget has made an attempt to address all these issues, albeit through small steps.`,
            options: ["A. BCEAD", "B. CBAED", "C. DACEB", "D. ADCEB"],
            correctOption: "A. BCEAD",
            explanation: `Option A\nB introduces three main economic problems (INTRO).
            C follows as it adds that the government would address these issues (CONTINUATION).
            E refers to "these issues" introduced in B and C, making BCE a sequence.`
        },
        {
            question: `A. These were mainly bulwarks against winter, the hoarded dregs of more plentiful seasons.
B. The first were the earliest mince pies, which saw cooked, shredded meat, dried fruits, alcohol with its preservative qualities and perhaps a few spices or herbs, all encased in large pies.
C. Subsequently, people baked this into a kind of pie, adding bread-crumbs for bulk, eggs to bind it, and upping the dried fruits and called it 'plum pudding'.
D. The pudding seems to have had two principal forerunners.
E. The second main pudding was a pottage or soup called frumenty, a fast dish involving cracked wheat, currants and almonds which was ladled out at the start of a meal.`,
            options: ["A. ECDAB", "B. BAECD", "C. DACEB", "D. DBAEC"],
            correctOption: "D. DBAEC",
            explanation: `Option D\nD introduces two types of pudding.
            B discusses the first type (FIRST).
            A describes ingredients mentioned in B (DETAILS).
            E follows as the second main type (SECOND).
            C explains how the mixture becomes 'plum pudding'.`
        }
    ]
};

function SentenceFormation() {
    const initialCompletionState = {
        beginner: Array(exercises.beginner.length).fill(false),
        intermediate: Array(exercises.intermediate.length).fill(false),
        advanced: Array(exercises.advanced.length).fill(false)
    };

    const [completed, setCompleted] = useState(initialCompletionState);
    const [answers, setAnswers] = useState({});
    const [selectedOptions, setSelectedOptions] = useState({});
    const [showAnswers, setShowAnswers] = useState({}); // State to show correct answers for advanced level

    useEffect(() => {
        const storedProgress = JSON.parse(localStorage.getItem("sentenceFormationProgress"));
        if (storedProgress) setCompleted(storedProgress);
    }, []);

    useEffect(() => {
        localStorage.setItem("sentenceFormationProgress", JSON.stringify(completed));
    }, [completed]);

    const handleSubmit = (level, index, solution) => {
        const isCorrect = (answers[level]?.[index] || "").toLowerCase() === solution.toLowerCase();
        setCompleted((prev) => ({
            ...prev,
            [level]: prev[level].map((item, i) => (i === index ? isCorrect : item))
        }));
    };

    const handleAnswerChange = (level, index, value) => {
        setAnswers((prev) => ({
            ...prev,
            [level]: { ...prev[level], [index]: value }
        }));
    };

    const handleOptionSelect = (level, index, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [level]: { ...prev[level], [index]: option }
        }));
        handleSubmit(level, index, option); // Check the answer upon selection
    };

    const toggleShowAnswer = (level, index) => {
        setShowAnswers((prev) => ({
            ...prev,
            [level]: { ...prev[level], [index]: !prev[level]?.[index] }
        }));
    };

    const resetProgress = () => {
        setCompleted(initialCompletionState);
        setAnswers({});
        setSelectedOptions({});
        setShowAnswers({});
    };

    // Check if all questions in the level are completed correctly
    const allCompletedCorrectly = (level) => {
        return completed[level].every((item) => item === true);
    };

    return (
        <div className="exercise-container">
            <h2>Sentence Formation Exercise</h2>

            {Object.keys(exercises).map((level) => (
                <div key={level} className="level-section">
                    <h3>{level.charAt(0).toUpperCase() + level.slice(1)} Level</h3>
                    <div className={`sentence-grid ${level}`}>
                        {exercises[level].map((exercise, index) => (
                            <div key={index} className={`sentence-card ${level}`}>
                                {level !== "advanced" ? (
                                    <>
                                        <p>Jumbled words: {exercise.jumbled}</p>
                                        <input
                                            type="text"
                                            value={answers[level]?.[index] || ""}
                                            onChange={(e) => handleAnswerChange(level, index, e.target.value)}
                                            className={`answer-input ${completed[level]?.[index] ? "correct" : answers[level]?.[index] ? "incorrect" : ""}`}
                                        />
                                        <button onClick={() => handleSubmit(level, index, exercise.solution)}>
                                            Submit Answer
                                        </button>
                                    </>
                                ) : (
                                    <div className="advanced-question">
                                        <p>{exercise.question.split('\n').map((line, idx) => <span key={idx}>{line}<br /></span>)}</p>
                                        <div className="options-container">
                                            {exercise.options.map((option, optIndex) => (
                                                <button
                                                    key={optIndex}
                                                    onClick={() => handleOptionSelect(level, index, option)}
                                                    className={`option-button ${selectedOptions[level]?.[index] === option ? (option === exercise.correctOption ? "correct" : "incorrect") : ""}`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                        <button onClick={() => toggleShowAnswer(level, index)}>
                                            {showAnswers[level]?.[index] ? "Hide Answer" : "Show Answer"}
                                        </button>
                                        {showAnswers[level]?.[index] && (
                                            <div className="explanation">
                                                <p>Explanation: {exercise.explanation}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {completed[level]?.[index] && <span className="completed-text">Completed</span>}
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => {
                            alert(`${level.charAt(0).toUpperCase() + level.slice(1)} Level completed!`);
                        }}
                        disabled={allCompletedCorrectly(level)}
                    >
                        Mark as Complete
                    </button>
                </div>
            ))}

            <div className="reset-section">
                <button onClick={resetProgress}>
                    Reset Progress
                </button>
            </div>
        </div>
    );
}

export default SentenceFormation;
