import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

//import Popup from "./popup";

const ArticleDetail = ({ produit }) => {
  const [quantity, setQuantity] = useState(1);
  //const [error, setError] = useState(null);
  //const [isPopUp, setIsPopUp] = useState(false);

  /*const onClickAddBasket = () => {
    if (quantity !== "" && !isNaN(quantity)) {
      setIsPopUp(true);
      addToBasket(cart.basket, produit, quantity);
    } else {
      setError("Entrez une valeur correcte (chiffre)");
    }
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);*/

  return (
    <li className="pizza-section">
      {/*<Popup
        isPopUp={isPopUp}
        msg={"Vous avez ajouté : " + quantity + " pizza à votre panier !"}
        onClickClose={() => {
          setIsPopUp(false);
          setQuantity(1);
        }}
      />*/}
      <div>
        <img src={produit.photo} alt={produit.name} />
        <h3>{produit.name}</h3>
        <p className="ingredient">{produit.ingredient}</p>
        <p className="price">Prix unitaire : {produit.price} €</p>
      </div>
      <form>
        <input
          type="text"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.currentTarget.value);
          }}
        />
        <button
          className="addToBasket"
          type="button"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </form>
    </li>
  );
};

export default ArticleDetail;
