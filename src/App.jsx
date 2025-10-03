import { Routes, Route } from 'react-router';
import './App.css';

import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="quiz" element={<QuizScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
