import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserProvider";

const Logout = () => {
  const { setLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const disconnect = () => {
    setLogged(false);
    navigate("/");
  };

  return (
    <div className="logout">
      <h1>Merci pour votre Visite</h1>
      <button
        className="logout-button"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          disconnect();
        }}
      >
        DECONNEXION
      </button>
    </div>
  );
};

export default Logout;
