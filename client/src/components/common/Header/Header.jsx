import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
    {/* Navigation */}
    <a id="logo" href="/">
      <img id="logo-img" src="./images/logo.jpg" alt="" />
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