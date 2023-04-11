import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Header from "../components/Header";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

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
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
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
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Commencer</button>
            )}
          </div>
          <button onClick={handleSignIn}>S'identifier</button>
        </div>
      </div>
    </div>
  );
}
