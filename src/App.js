import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Forum from './pages/Forum';
import Users from './pages/Users';

const App = () => {
  return (
    <>       
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
};

export default App;