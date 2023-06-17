import { useState, useContext } from "react";
import CartContext from "../../context/CartProvider";
import "./presentation.css";
import "./mobile-presentation.css";

const ArticleDetail = ({ props, produit }) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const [counter, setCounter] = useState(1);

  let shopCart = {
    id: cart.length + 1,
    name: produit.name,
    price: produit.price,
    image: produit.thumbnails,
    quantity: counter,
  };

  const incrementCount = () => {
    setCounter(counter + 1);
  };
  const decrementCount = () => {
    setCounter((c) => Math.max(c - 1, 0));
  };

  return (
    <li className="pizza-section">
      <div>
        <img className="img-section" src={produit.photo} alt={produit.name} />
        <h3>{produit.name}</h3>
        <p className="ingredient">{produit.ingredient}</p>
        <p className="price">Prix unitaire : {produit.price} €</p>
      </div>
      <div className="section-buttons">
        <div className="btn-group">
          <button className="btn btn-left" onClick={decrementCount}>
            <img className="svg" src="images/icon-minus.svg" alt="minus" />
          </button>
          <button className="btn btn-center">{counter}</button>
          <button className="btn btn-right" onClick={incrementCount}>
            <img src="images/icon-plus.svg" alt="plus" />
          </button>
        </div>
        <button
          className="add"
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: { shopCart },
            })
          }
        >
          <img
            className="cart-btn"
            src="images/icon-little-cart.svg"
            alt="cart"
          />
          Acheter
        </button>
      </div>
    </li>
  );
};

export default ArticleDetail;
