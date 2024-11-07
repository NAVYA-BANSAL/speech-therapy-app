import React, { useState } from 'react';
import './ComprehensionPractice.css';

const comprehensionData = {
    beginner: [
        {
            text: "When the air is clear, the sunset will appear yellow, because the light from the sun has passed a long distance through air and the blue light has been scattered away. If the air is polluted with small particles, natural or otherwise, the sunset will be more red. Sunsets over the sea may also be orange, due to salt particles in the air. The sky around the sun is seen reddened, as well as the light coming directly from the sun. This is because all light is scattered relatively well through small angles, but blue light is then more likely to be scattered twice over the greater distances, leaving the yellow, red and orange colors.",
            question: "What color is the sunset in clear air?",
            answer: "Yellow",
        },
        {
            text: "Today I am having such a good time. I feel very happy that there is no school and I can do anything I want. I don't have any extra homework either as the schools are closed because of snow. That is why this is one of my favorite times. I like going to school but I like the snow even more. I get to play outside in the snow. I can build a snowman with my friends, we can have a snowball fight, we can slide and enjoy the snow. I know it is funny but sometimes we go to school just to play in the school yard even though it's closed. Snow holidays are the best",
            question: "Which holidays are the best?",
            answer: "Snow Holidays",
        },
        {
            text: "Dolphins are regarded as the friendliest creatures in the sea and stories of them helping drowning sailors have been common since Roman times. The more we learn about dolphins, the more we realize that their society is more complex than people previously imagined. They look after other dolphins when they are ill, care for pregnant mothers and protect the weakest in the community, as we do. Some scientists have suggested that dolphins have a language but it is much more probable that they communicate with each other without needing words. Could any of these mammals be more intelligent than man?",
            question: "Which animal is considered friendly?",
            answer: "Dolphins",
        },
    ],
    intermediate: [
        {
            text: "First language, also known as mother tongue, is generally the language a person learns first. However, one can have two or more native languages thus being a native bilingual or indeed multilingual. The order in which these languages are learned is not necessarily the order of proficiency. Lacking in first language skills often makes learning other languages difficult. Often a child learns the basics of his or her first language or languages from his or her family. The term mother tongue, however, should not be interpreted to mean that it is the language of one's mother. For instance, in some paternal societies, the wife moves in with the husband and thus may have a different first language or dialect than the local language of the husband. Yet their children usually only speak their local language.",
            questions: [
                { question: "What can someone be if they have two native languages?", answer: "Bilingual" },
                { question: "From whom do children usually learn their first language?", answer: "Family" },
                { question: "Who generally speaks the local language despite parental language differences?", answer: "Children" },
            ],
        },
        {
            text: "Every summer Nichole goes to the countryside for a month. She stays at her uncle’s farm and helps him. She works very hard but she likes it because she loves to spend time with her cousin Macy. Every morning she wakes up at six o’clock, first she collects the eggs and feeds the chickens, then she has breakfast at 6:30 and after breakfast, she helps her aunt with the house chores for an hour. She can't wait to spend time with her cousin Macy. They always have a great time together. They climb trees, pick fruits and flowers. They love being outdoors. They come back home before dark and get ready for dinner. After dinner, they go out and feed the animals. Before they go to bed they watch TV for a little bit or read books. They are always very tired at the end of the day and usually fall asleep watching TV or reading.",
            questions: [
                { question: "Where does Nichole go every summer?", answer: "Countryside" },
                { question: "Who does Nichole enjoy spending time with?", answer: "Macy" },
                { question: "What does Nichole collect first in the morning?", answer: "Eggs" },
            ],
        },
    ],
    advanced: [
        {
            text: "Theories about how the brain works remain a topic of debate. It is agreed, though, that the hippocampus, a part of the brain, is undeniably important for memory. When we experience something, the information is sent via our senses to the hippocampus, where it is processed. Scientists believe that brain cells called neurons first transform the sensory stimuli we experience into images in our immediate memory. Then, these images are sent to the hippocampus and stored temporarily in short term memory. In the hippocampus information is organized, and it is during this process that parts of the image of our experience fade away. Finally, certain information is then transferred to long term memory in a section in the frontal lobe of the brain known as the cerebral cortex. Scientists think this process may happen while we are sleeping, but exactly how the information is transferred from one area of the brain to another is a mystery.",
            questions: [
                { question: "What part of the brain is important for memory?", answer: "The hippocampus plays an important role in memory storage and processing." },
                { question: "What type of brain cells transform sensory stimuli into images?", answer: "Neurons transform sensory stimuli into images" },
                { question: "Where is information stored temporarily?", answer: "Information is stored temporarily in the hippocampus." },
            ],
        },
        {
            text: "Fictional stories about people who have extraordinary abilities have always attracted people's attention. One of them is the story of Vera Petrova, who is able to perceive things with different parts of her skin, and through solid walls. One day she comes into his father's office and puts her hands on the door of a locked safe. Suddenly she asks her father why he keeps so many old newspapers locked away there. Vera's curious talent is brought to the notice of a scientific research institute and she is given a series of tests by a special commission. During these tests she manages to read a newspaper through an opaque screen and then she describes the figures and colors of a picture hidden under a carpet. During all these tests Vera is blindfolded; and, indeed, except when blindfolded she lacks the ability to perceive things with her skin. It was also found that although she could perceive things with her fingers, this ability ceased the moment her hands were wet.",
            questions: [
                { question: "What kind of stories attract people's attention?", answer: "Stories about people with extraordinary abilities" },
                { question: "What unusual ability does Vera have?", answer: "Vera can perceive things with her skin, even through solid walls." },
                { question: "What stops Vera’s ability to perceive with her fingers?", answer: "Her ability stops when her hands are wet." },
            ],
        },
    ],
};

const ComprehensionPractice = () => {
    const [level, setLevel] = useState('beginner');
    const [currentParagraph, setCurrentParagraph] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const handleLevelChange = (newLevel) => {
        setLevel(newLevel);
        setCurrentParagraph(0);
        setCurrentQuestion(0);
        setUserInput('');
        setIsCorrect(null);
    };

    const handleAnswerSubmit = () => {
        const answer = getCurrentQuestionData().answer;
        if (userInput.trim().toLowerCase() === answer.toLowerCase()) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleShowAnswer = () => {
        const answer = getCurrentQuestionData().answer;
        alert(`Correct answer: ${answer}`);
    };

    const handleNextQuestion = () => {
        if (isCorrect) {
            const paragraphData = comprehensionData[level][currentParagraph];
            if (currentQuestion < paragraphData.questions.length - 1) {
                // Move to the next question in the current paragraph
                setCurrentQuestion(currentQuestion + 1);
                setUserInput('');
                setIsCorrect(null);
            } else if (currentParagraph < comprehensionData[level].length - 1) {
                // Move to the next paragraph if there are no more questions in the current paragraph
                setCurrentParagraph(currentParagraph + 1);
                setCurrentQuestion(0);
                setUserInput('');
                setIsCorrect(null);
            } else {
                alert('Congratulations, all questions completed!');
            }
        } else {
            alert('Please answer correctly before moving to the next question.');
        }
    };

    const getCurrentQuestionData = () => {
        if (level === 'beginner') {
            return comprehensionData[level][currentQuestion];
        } else {
            return comprehensionData[level][currentParagraph].questions[currentQuestion];
        }
    };

    const renderQuestions = () => {
        const data = level === 'beginner'
            ? comprehensionData[level][currentQuestion]
            : comprehensionData[level][currentParagraph];

        return (
            <div className="question-container">
                <p>{data.text}</p>
                <h3>{getCurrentQuestionData().question}</h3>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    style={{
                        backgroundColor: isCorrect === true ? 'lightgreen' : isCorrect === false ? 'lightcoral' : 'white',
                    }}
                />
                <button onClick={handleAnswerSubmit}>Submit</button>
                <button onClick={handleShowAnswer}>Show Answer</button>

                {level === 'beginner' ? (
                    <button onClick={handleNextQuestion}>Mark as Complete</button>
                ) : (
                    <button onClick={handleNextQuestion}>Next Question</button>
                )}

                {isCorrect === false && <p style={{ color: 'red' }}>Try Again!</p>}
            </div>
        );
    };

    return (
        <div className="main-content">
            <h1>Comprehension Practice</h1>
            <div>
                <button onClick={() => handleLevelChange('beginner')}>Beginner</button>
                <button onClick={() => handleLevelChange('intermediate')}>Intermediate</button>
                <button onClick={() => handleLevelChange('advanced')}>Advanced</button>
            </div>
            {renderQuestions()}
        </div>
    );
};

export default ComprehensionPractice;