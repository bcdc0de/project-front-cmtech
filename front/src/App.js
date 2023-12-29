// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Home from './components/Home/Home';
import Pipeline from './components/Pipeline/Pipeline';
import Activities from './components/Activities/Activities';
import Companies from './components/Companies/Companies';
import Dashboard from './components/Dashboard/Dashboard';
import Forecast from './components/Forecast/Forecast';
import Help from './components/Help/Help';
import UserDataForm from './components/UserDataForm/UserDataForm';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <div className="main-container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Pipeline" element={<Pipeline />} />
              <Route path="/Activities" element={<Activities />} />
              <Route path="/Companies" element={<Companies />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Forecast" element={<Forecast />} />
              <Route path="/Help" element={<Help />} />
              <Route path="/UserDataForm" element={<UserDataForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;