import { Routes, Route } from 'react-router';
import { QuizProvider } from './context/QuizContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css';

import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import SectionsScreen from './components/SectionsScreen';
import Section1 from './pages/Section1.jsx';
import Section2 from './pages/Section2.jsx';
import Section3 from './pages/Section3.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <QuizProvider>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="sections" element={<SectionsScreen />}>
            <Route path="section1" element={<Section1 />} />
            <Route path="section2" element={<Section2 />} />
            <Route path="section3" element={<Section3 />} />
          </Route>
        </Routes>
      </QuizProvider>
    </QueryClientProvider>
  );
}

export default App;
