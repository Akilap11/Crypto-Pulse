import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "USD", symbol: "$" });
        break;
      case "lkr":
        setCurrency({ name: "LKR", symbol: "Rs" });
        break;
      case "inr":
        setCurrency({ name: "INR", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "USD", symbol: "$" });
    }
  };

  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/market-overview" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Markets
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/news-updates" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/learn-crypto" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Learn
          </NavLink>
        </li>
      </ul>

      <div className="nav-right">
        <select onChange={currencyHandler} className="currency-select">
          <option value="usd">USD</option>
          <option value="lkr">LKR</option>
          <option value="inr">INR</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
