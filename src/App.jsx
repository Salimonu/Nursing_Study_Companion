import { Routes, Route } from 'react-router';

import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';

function App() {
  return (
    <>
      <div className="bg-blue-50 h-screen py-14 px-20">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="quiz" element={<QuizScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
