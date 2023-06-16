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
    <div>
      <h1>Merci pour votre Visite</h1>
      <button
        className="logout"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          disconnect();
        }}
      ></button>
    </div>
  );
};

export default Logout;
