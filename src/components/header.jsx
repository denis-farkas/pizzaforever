import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { useContext } from "react";
import UserContext from "../context/UserProvider";

const Header = () => {
  const { logged } = useContext(UserContext);

  console.log(logged);

  let user_json = localStorage.getItem("userData");

  let user = JSON.parse(user_json);
  let firstname = user.firstName;
  console.log(firstname);

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
              <Link to="/profil">{user && firstname}</Link>
              <Link to="/logout">Déconnexion</Link>
            </div>
          ) : (
            <div>
              <Link to="/register">S'enregistrer</Link>
              <Link to="/login">Se connecter</Link>
            </div>
          )}
          <Link to="/basket">Panier</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
