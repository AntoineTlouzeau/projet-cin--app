import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Forum from "./pages/Forum";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MovieInfo from "./pages/MovieInfo";
import SearchResult from "./pages/SearchResult";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movieinfo/:id" element={<MovieInfo />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
