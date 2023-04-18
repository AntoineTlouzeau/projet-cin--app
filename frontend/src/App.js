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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated);
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
            element={
              isAuthenticated ? (
                <Home />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
          <Route
            path="/cineflix"
            element={
              isAuthenticated ? (
                <Home />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
          {/* <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          /> */}
          <Route
            path="/movieinfo/:id"
            element={
              isAuthenticated ? (
                <MovieInfo />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
          <Route
            path="/searchresult"
            element={
              isAuthenticated ? (
                <SearchResult />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
          <Route
            path="/watchlist"
            element={
              isAuthenticated ? (
                <Watchlist />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
          <Route
            path="/forum"
            element={
              isAuthenticated ? (
                <Forum />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
          <Route
            path="/users"
            element={
              isAuthenticated ? (
                <Users />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
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
