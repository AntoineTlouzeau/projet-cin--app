import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Se connecter" : "S'inscrire"}
      </button>
    </div>
  );
}
