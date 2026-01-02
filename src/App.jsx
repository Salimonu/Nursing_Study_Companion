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
import PageNotFound from './ui/PageNotFound.jsx';
import About from './ui/About.jsx';
import { useState } from 'react';
import Sidebar from './ui/Sidebar.jsx';
import SystemQuePage from './features/Questions/SystemQuetions.jsx';
import SubscriptionPage from './pages/SubscriptionPage.jsx';
import { RETRY, STALE_TIME } from './utils/constants.js';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      retry: RETRY,
      retryDelay: 2000,
    },
  },
});

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSideBar = () => setIsOpen(false);

  const handleToggle = () => {
    setIsOpen(cur => !cur);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <QuizProvider>
        <div className="relative ">
          <Header isOpen={isOpen} onOpen={handleToggle} />
          {isOpen && <Sidebar isOpen={isOpen} closeSideBar={closeSideBar} />}
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="subscribe" element={<SubscriptionPage />} />
            <Route
              element={
                <AuthSyncWrapper>
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                </AuthSyncWrapper>
              }
            >
              {/* Protected Routes */}
              <Route path="profile" element={<ProfilePage />} />
              <Route path="profile/quiz" element={<QuizPage />} />
              <Route path="profile/system" element={<SystemQuePage />} />
              <Route path="profile/quiz/results" element={<ResultPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </QuizProvider>
    </QueryClientProvider>
  );
}

export default App;
