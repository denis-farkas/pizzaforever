import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzaData, setPizzaData] = useState();

  const putData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        const data = localStorage.setItem("products", JSON.stringify(myJson));
        setPizzaData(data);
      });
  };

  const getData = () => {
    const pizzaData = JSON.parse(localStorage.getItem("products"));
    return pizzaData;
  };

  useEffect(() => {
    putData();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzaData, getData }}>
      {children}
    </PizzaContext.Provider>
  );
};

export { PizzaProvider };
export default PizzaContext;
