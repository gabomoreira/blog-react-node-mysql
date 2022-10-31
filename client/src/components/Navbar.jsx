import React, { useContext } from "react";
import "../style.scss";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logoutContext } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt=".blog" />
          </div>
        </Link>
        <div className="links">
          <Link className="link" to="/?cat=art">
            Art
          </Link>
          <Link className="link" to="/?cat=science">
            Science
          </Link>
          <Link className="link" to="/?cat=technology">
            Technology
          </Link>
          <Link className="link" to="/?cat=cinema">
            Cinema
          </Link>
          <Link className="link" to="/?cat=design">
            Design
          </Link>
          <Link className="link" to="/?cat=food">
            Food
          </Link>
          {currentUser && <span>{currentUser.username}</span>}
          {currentUser ? (
            <span onClick={logoutContext}>Logout</span>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
