import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { useContext } from "react";
import UserContext from "../context/UserProvider";
import ShopDropdown from "./shopDropdown";
import Cart from "./cart";

const Header = () => {
  const { logged } = useContext(UserContext);

  let user_json = localStorage.getItem("userData");

  let user = JSON.parse(user_json);

  return (
    <div className="header-nav">
      <nav>
        <div className="logo-style">
          <img className="logo" src={logo} alt="pizza forever logo" />
          <p>
            Pizza <span>Forever</span>
          </p>
        </div>
        <div className="menu">
          <Link to="/">Accueil</Link>
          <Link to="/product">Produit</Link>
          {logged ? (
            <div>
              <Link to="/profil">{user && user.firstName}</Link>
              <Link to="/logout">Déconnexion</Link>
            </div>
          ) : (
            <div>
              <Link to="/register">S'enregistrer</Link>
              <Link to="/login">Se connecter</Link>
            </div>
          )}
          <div className="header-right">
            <Cart />
          </div>
          <div className="shopping" style={{ display: "none" }}>
            <ShopDropdown />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
