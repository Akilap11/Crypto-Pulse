import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({
          name: "USD",
          symbol: "$",
        });
        break;
      case "lkr":
        setCurrency({
          name: "LKR",
          symbol: "Rs",
        });
        break;
      case "inr":
        setCurrency({
          name: "INR",
          symbol: "₹",
        });
        break;
      default:
        {
          setCurrency({
            name: "USD",
            symbol: "$",
          });
        }
        break;
    }
  };

  return (
    <div className="navbar">
      <Link to={'/'}>
        <img src={logo} alt="Spotify Logo" className="logo" />
      </Link>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to="#about">Features</Link>
        </li>
        <li>
          <Link to="#services">Pricing</Link>
        </li>
        <li>
          <Link to="#contact">Blog</Link>
        </li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler} className="currency-select">
          <option value="usd">USD</option>
          <option value="lkr">LKR</option>
          <option value="inr">INR</option>
        </select>
        <button className="btn">
          Sign Up<img src={arrow_icon} alt=""></img>
        </button>
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
