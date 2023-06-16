import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzaData, setPizzaData] = useState();

  const getData = () => {
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
        setPizzaData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzaData }}>
      {children}
    </PizzaContext.Provider>
  );
};

export { PizzaProvider };
export default PizzaContext;
