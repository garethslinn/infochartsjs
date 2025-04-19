import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => (
    <Router>
        <div className="app-container">
            <Header />
            <div className="layout" role="presentation">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    </Router>
);

export default App;
