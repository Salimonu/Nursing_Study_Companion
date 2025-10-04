import { Routes, Route } from 'react-router';
import './App.css';

import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import SectionsScreen from './components/SectionsScreen';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="sections" element={<SectionsScreen />}>
            <Route path="section1" element={<Section1 />} />
            <Route path="section2" element={<Section2 />} />
            <Route path="section3" element={<Section3 />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
