import React from 'react'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import { AuthProvider } from './contexts/AuthContext'
import SurveyPage from './pages/Survey';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/survey" element={<SurveyPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App; 
