import React from "react";
import ArticleDetail from "../components/articleDetail.jsx";
import { useContext } from "react";
import PizzaContext from "../context/PizzaProvider";

const Product = () => {
  const { getData } = useContext(PizzaContext);
  const pizzaData = getData();
  return (
    <div>
      <h2 className="pizza-h2">Produit</h2>
      {/*boucle map sur la state des produits qui va afficher le composant article detail (on passe les infos du produit en tant que props pour les recup dans le composant enfant*/}
      {
        <ul className="pizza-produit">
          {pizzaData.map((item) => {
            return <ArticleDetail key={item.id} produit={item} />;
          })}
        </ul>
      }
    </div>
  );
};

export default Product;
