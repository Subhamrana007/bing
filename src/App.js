// src/App.js
import { Theme } from '@radix-ui/themes';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <theme apperance="dark" accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </theme>
  );
}

export default App;
