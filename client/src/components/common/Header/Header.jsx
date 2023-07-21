import { Link } from "react-router-dom"

import style from "./Header.module.css"
import logo from "./logo.jpg"


export const Header = () => {
    return (
        <header>
    {/* Navigation */}
    <a id="logo" href="/">
      <img id="logo-img" src={logo} alt="" />
    </a>
    <nav>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      {/* Logged-in users */}
      <div className="user">
        <Link to="/create">Create Offer</Link>
        <Link to="javascript:void(0)">Logout</Link>
      </div>
      {/* Guest users */}
      <div className="guest">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  </header>
    )
}