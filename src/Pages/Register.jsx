import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs-react";
import { useContext } from "react";
import UserContext from "../context/UserProvider";

const Register = () => {
  const { registerUser } = useContext(UserContext);

  //création des states du formulaire
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  // on envoie le formulaire
  async function onSubmitForm() {
    //création du password hash

    // hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    let userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      address: address,
      zip: zip,
      city: city,
      phone: phone,
    };

    registerUser(userData);
    navigate("/login");
  }

  return (
    <div className="register-main">
      <h1>S'enregistrer</h1>
      {/*formulaire*/}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm();
        }}
      >
        <input
          type="text"
          placeholder="Votre Prénom"
          onChange={(e) => {
            setFirstName(e.currentTarget.value);
          }}
          required="required"
        />
        <input
          type="text"
          placeholder="Votre Nom"
          onChange={(e) => {
            setLastName(e.currentTarget.value);
          }}
          required="required"
        />
        <input
          type="email"
          placeholder="Votre Email"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          required="required"
        />
        <input
          type="text"
          placeholder="Votre Mot de passe"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          required="required"
        />
        <input
          type="text"
          placeholder="Votre Addresse"
          onChange={(e) => {
            setAddress(e.currentTarget.value);
          }}
          required="required"
        />
        <input
          type="text"
          placeholder="Code postale"
          onChange={(e) => {
            setZip(e.currentTarget.value);
          }}
          required="required"
        />
        <input
          type="text"
          placeholder="Votre ville"
          onChange={(e) => {
            setCity(e.currentTarget.value);
          }}
          required="required"
        />
        <input
          type="text"
          placeholder="Votre téléphone"
          onChange={(e) => {
            setPhone(e.currentTarget.value);
          }}
          required="required"
        />
        <input type="submit" name="Enregister" />
      </form>
    </div>
  );
};

export default Register;
