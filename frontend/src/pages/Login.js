import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import Home from "./Home";

export default function Login(props) {
  const {setIsAuthenticated} = props;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", { email, password })
      .then((response) => {
        document.cookie = `token=${response.data.token}; expires=${new Date(
          Date.now() + 24 * 60 * 60 * 1000
        )}; path=/`;
        setIsAuthenticated(true);
      })

      .catch((error) => {
        
        if (error.code === "ERR_BAD_REQUEST")
          setErrorMessage(
            "L'adresse email ou le mot de passe est incorrect 😞"
          );
          setIsAuthenticated(false);
      });
  };

  return (
    <div className="login-container">
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container">
          <div className="form">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container">
              <input
                type="email"
                placeholder="Adresse e-mail"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              {error ? <h2>{error}</h2> : ""}
              <button onClick={handleLogin}>Se connecter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
