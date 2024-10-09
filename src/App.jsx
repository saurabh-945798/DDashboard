import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Attendance from './Components/Dashboard/Attendance';
import Profile from './Components/Dashboard/Profile';
import Calendar from './Components/Dashboard/Calendar';
import Search from './Components/Dashboard/Search';
import Allocate from './Components/Dashboard/Project';
import Login from './Components/Dashboard/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/search" element={<Search />} />
        <Route path="/allocate" element={<Allocate />} />

        {/* Redirect any other route to the login page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
