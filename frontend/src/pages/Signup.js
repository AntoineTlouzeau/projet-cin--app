import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import axios from "axios";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/signup", { email, password })
      .then((response) => {
        alert("Utilisateur créé !");
        window.location.href = "/login";
      })
      .catch((error) => {
        setErrorMessage(error.response.data.err);
        console.log(email, password);
      });
  };

  return (
    <div className="signup-container" showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Films, séries et bien plus en illimité.</h1>
            <h4>Où que vous soyez. Annulez à tout moment</h4>
            <h6>
              Prêt à regarder Netflix? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre abonnement.
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Adresse email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Commencer</button>
            )}
          </div>
          {showPassword ? (
            <button onClick={handleSignup}>S'inscrire</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
