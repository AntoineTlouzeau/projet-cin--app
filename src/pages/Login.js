import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import Header from "../components/Header";

export default function Login() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

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
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <button onClick={handleLogin}>Se connecter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
