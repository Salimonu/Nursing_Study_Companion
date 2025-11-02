import { Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { QuizProvider } from './context/QuizContext.jsx';
import { AuthSyncWrapper } from './features/Authentication/useAuthSync.jsx';
import './App.css';

import ProtectedRoute from './ui/ProtectedRoute.jsx';
import Header from './ui/Header';
import AppLayout from './ui/AppLayout.jsx';
// import SectionsScreen from './ui/SectionsScreen';
// import Section1 from './ui/Section1.jsx';
// import Section2 from './ui/Section2.jsx';
// import Section3 from './ui/Section3.jsx';

import ProfilePage from './pages/ProfilePage.jsx';
import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import ResultPage from './pages/ResultPage.jsx';

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
          <Route path="homepage" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route
            element={
              <AuthSyncWrapper>
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              </AuthSyncWrapper>
            }
          >
            <Route index element={<Navigate replace to="profile" />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="profile/quiz" element={<QuizPage />} />
            <Route path="profile/quiz/results" element={<ResultPage />} />

            {/* <Route path="sections" element={<SectionsScreen />}>
              <Route path="section1" element={<Section1 />} />
              <Route path="section2" element={<Section2 />} />
              <Route path="section3" element={<Section3 />} />
            </Route>*/}
          </Route>
        </Routes>
      </QuizProvider>
    </QueryClientProvider>
  );
}

export default App;
