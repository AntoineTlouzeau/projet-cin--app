import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
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
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/check",
          {
            withCredentials: true, // permet de transférer les cookies avec la requête
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkToken();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/cineflix"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/movieinfo/:id"
            element={
              isAuthenticated ? <MovieInfo /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/searchresult"
            element={
              isAuthenticated ? (
                <SearchResult />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/watchlist"
            element={
              isAuthenticated ? <Watchlist /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/forum"
            element={
              isAuthenticated ? <Forum /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/users"
            element={
              isAuthenticated ? <Users /> : <Navigate to="/login" replace />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
