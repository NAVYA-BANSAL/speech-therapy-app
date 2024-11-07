import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Exercise from "./components/Exercise.js";
import WordRepetition from "./components/WordRepetition.js";
import SentenceFormation from "./components/SentenceFormation.js";
import ComprehensionPractice from "./components/ComprehensionPractice.js";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/exercise/word-repetition" element={<WordRepetition />} />
        <Route path="/exercise/sentence-formation" element={<SentenceFormation />} />
        <Route path="/exercise/comprehension-practice" element={<ComprehensionPractice />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
