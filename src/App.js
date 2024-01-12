// App.js or index.js
import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Website from './website';
import TermsAndConditions from './terms'; 
import Privacy from './privacy'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/" element={<Website />} />
      </Routes>
    </Router>
  );
}


export default App