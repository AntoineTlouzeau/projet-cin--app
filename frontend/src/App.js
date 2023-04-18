import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Forum from "./pages/Forum";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MovieInfo from "./pages/MovieInfo";
import SearchResult from "./pages/SearchResult";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken); 
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Home /> : <Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movieinfo/:id" element={token ? <MovieInfo />: <Signup />} />
          <Route path="/searchresult" element={token ? <SearchResult />: <Signup />} />
          <Route path="/watchlist" element={token ? <Watchlist />: <Signup />} />
          <Route path="/forum" element={token ? <Forum />: <Signup />} />
          <Route path="/users" element={token ?<Users /> : <Signup />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
