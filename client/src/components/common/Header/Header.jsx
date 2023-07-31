import { Link } from "react-router-dom";

import style from "./Header.module.css";
import logo from "../../../assets/logo.jpg";

import { UserContext } from "../../../contexts/userContext.js";
import { useContext } from "react";

export const Header = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <header>
      {/* Navigation */}
      <a id="logo">
        <img id="logo-img" src={logo} alt="" />
      </a>
      <nav>
        <div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        {Object.values(user) == 0 
                     ? 
        (
          <div className={style.guest}>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )
                     :
        (
          <div className={style.user}>
            <Link to="/create">Create Offer</Link>
            <Link onClick={() => setUser()} to="/">Logout</Link>
          </div>
        )}
      </nav>
    </header>
  );
};
