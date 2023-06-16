import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Logout = (props) => {
  /*const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    window.localStorage.removeItem("pizzaforever-token");
    logoutUser();
    setRedirect(true);
  }, []);

  if (redirect) {
    return <Navigate to="/" />;
  }
*/
  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
