import { Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { QuizProvider } from './context/QuizContext.jsx';
import { AuthSyncWrapper } from './features/Authentication/useAuthSync.jsx';
import './App.css';

import ProtectedRoute from './ui/ProtectedRoute.jsx';
import Header from './ui/Header';
import AppLayout from './ui/AppLayout.jsx';

import ProfilePage from './pages/ProfilePage.jsx';
import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import ResultPage from './pages/ResultPage.jsx';
import Footer from './ui/Footer.jsx';

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
          </Route>
        </Routes>
        <Footer />
      </QuizProvider>
    </QueryClientProvider>
  );
}

export default App;
