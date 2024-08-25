import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* Add other routes here for About, Projects, Contact, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
