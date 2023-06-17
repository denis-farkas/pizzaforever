import { useContext } from "react";
import CartContext from "../../context/CartProvider";
import "./shop.css";
import "./mobile-shop.css";

const ShopDropdown = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  if (cart.length > 0) {
    return (
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <p className="cart-title">Panier</p>
        </div>

        <ul className="shopping-cart-items">
          {cart.map((item, index) => (
            <li key={index}>
              <div className="first">
                <img
                  className="thumb-shop"
                  src={`${item.shopCart.image}`}
                  alt="product"
                />
              </div>
              <div className="second">
                <p className="item-name">{item.shopCart.name}</p>
                <p className="item-price">
                  ${item.shopCart.price} x {item.shopCart.quantity}
                  <span className="dark">
                    ${item.shopCart.price * item.shopCart.quantity}.00
                  </span>
                </p>
              </div>
              <div className="third">
                <button
                  className="remove"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item,
                    })
                  }
                >
                  <img src="images/icon-delete.svg" alt="delete" />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <button className="checkout">Commander</button>
      </div>
    );
  } else {
    return (
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <p className="cart-title">Panier</p>
        </div>
        <div className="shopping-cart-body big">
          <p className="p-big">Votre panier est vide.</p>
        </div>
      </div>
    );
  }
};

export default ShopDropdown;
