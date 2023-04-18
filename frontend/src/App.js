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
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/check",
          // {
          //   withCredentials: true, // Permet d'envoyer les cookies avec la requête
          // }
        );
        setUser(response.data);
        console.log(setUser);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movieinfo/:id" element={<MovieInfo />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/users" element={<Users />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
