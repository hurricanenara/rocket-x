import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <NavLink className="menu" to="/launches">
        Launches
      </NavLink>
      <Logo />
      <NavLink className="menu" to="/rockets">
        Rockets
      </NavLink>
    </div>
  );
};

export default Home;
