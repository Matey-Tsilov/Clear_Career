import { Link } from "react-router-dom";

import style from "./Header.module.css";
import logo from "../../../assets/logo.jpg";

import { UserContext } from "../../../contexts/userContext.js";
import { useContext } from "react";
import { Notification } from '../Notification/Notification'
import { NotifyContext } from "../../../contexts/notificationContext";

export const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const {notify} = useContext(NotifyContext)
  
  return (
    <header>
      {/* Navigation */}
      <Link to='/' id="logo">
        <img id="logo-img" src={logo} alt="" />
      </Link>
      <nav>
        <div className="guest-specific">
          <Link to="/profile">Welcome, <span>{user.email || "Guest"}</span></Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>

        </div>
        {Object.values(user) != 0 && 
        (
          <div className={style.user}>
            <Link to="/create">Create Offer</Link>
            <Link onClick={() => setUser()} to="/dashboard">Logout</Link>
          </div>
        )}
      </nav>
      {notify.opened && <Notification message={notify.msg}/>}
    </header>
  );
};
