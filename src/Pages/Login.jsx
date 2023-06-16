import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);
  //création des states du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = () => {
    //on récup les valeurs des states du form que l'on met dans un objet
    let datas = {
      email: email,
      password: password,
    };
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/" />;
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
