import React from "react";
import { Link } from "react-router-dom";
import delivery from "../assets/logo/delivery.png";

const popup = (props) => {
  return (
    <div>
      {props.isPopUp && (
        <div className="popUp">
          <p
            className="closePopUp"
            onClick={(e) => {
              props.onClickClose();
            }}
          >
            X
          </p>
          <h4>Félicitation</h4>
          <p>{props.msg}</p>
          <img src={delivery} alt="delivery" />
          <button
            id="btn-vers-panier"
            onClick={(e) => {
              props.onClickClose();
            }}
          >
            <Link to="/basket" id="vers-panier">
              Allez dans votre panier
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default popup;
