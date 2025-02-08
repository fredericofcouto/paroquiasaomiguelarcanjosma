import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catequese from './pages/Catequese';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catequese" element={<Catequese />} />
        {/* adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

export default App; 