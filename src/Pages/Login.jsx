import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs-react";
import { useContext } from "react";
import UserContext from "../context/UserProvider";

const Login = () => {
  const { setLogged } = useContext(UserContext);
  //création des states du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onSubmitForm() {
    //on récup les valeurs des states du form que l'on met dans un objet
    let user_json = localStorage.getItem("userData");
    let user = JSON.parse(user_json);
    let hashPassword = user.password;
    const proof = bcrypt.compare(password, hashPassword);
    if (proof && email === user.email) {
      setLogged(true);
      navigate("/");
    }
  }

  return (
    <div className="login-main">
      <h1>Se connecter</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm();
        }}
      >
        <input
          type="text"
          placeholder="Votre Email"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="Votre Mot de passe"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <input type="submit" name="Enregister" />
      </form>
    </div>
  );
};

export default Login;
