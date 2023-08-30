import { Link } from "react-router-dom";

import style from "./Header.module.css";
import logo from "../../../assets/logo.jpg";

import { UserContext } from "../../../contexts/userContext.js";
import { useContext } from "react";
import { Notification } from "../Notification/Notification";
import { NotifyContext } from "../../../contexts/notificationContext";

export const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const { notify } = useContext(NotifyContext);

  return (
    <header>
      {/* Navigation */}
      <Link to="/" id="logo">
        <img id="logo-img" src={logo} alt="" />
      </Link>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        {Object.values(user) != 0 ? (
          <>
            <Link to="/create">Create Offer</Link>
            <Link onClick={() => setUser()} to="/dashboard">
              Logout
            </Link>
            <img src={user.profileImg} alt="profile-pic" />
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
      {notify.opened && <Notification message={notify.msg} />}
    </header>
  );
};
