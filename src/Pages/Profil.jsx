import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Profil = () => {
  const { registerUser } = useContext(UserContext);

  const [msg, setMsg] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    let user_json = localStorage.getItem("userData");
    let user = JSON.parse(user_json);

    //mise à jour des states (pour pouvoir afficher les infos de l'user par défaut dans les champs de formulaire)
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setAddress(user.address);
    setPassword(user.password);
    setCity(user.city);
    setZip(user.zip);
    setPhone(user.phone);
  }, []);

  const navigate = useNavigate();

  const onSubmitForm = () => {
    let data = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      email: email,
      password: password,
      zip: zip,
      city: city,
      phone: phone,
    };
    registerUser(data);
    navigate("/login");
  };

  return (
    <div className="profil-main">
      <h2>Profil</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm();
        }}
      >
        <input
          type="text"
          placeholder="Prénom"
          defaultValue={firstName}
          onChange={(e) => {
            setFirstName(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="Nom"
          defaultValue={lastName}
          onChange={(e) => {
            setLastName(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="Adresse"
          defaultValue={address}
          onChange={(e) => {
            setAddress(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="Code postal"
          defaultValue={zip}
          onChange={(e) => {
            setZip(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="Ville"
          defaultValue={city}
          onChange={(e) => {
            setCity(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="Téléphone"
          defaultValue={phone}
          onChange={(e) => {
            setPhone(e.currentTarget.value);
          }}
        />
        <input type="submit" name="Modifier" />
      </form>
    </div>
  );
};

export default Profil;
