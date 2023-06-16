import { useState, useEffect } from "react";

const Profil = () => {
  const [msg, setMsg] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  /*
  useEffect(() => {
    //mise à jour des states (pour pouvoir afficher les infos de l'user par défaut dans les champs de formulaire)
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setAddress(user.address);
    setCity(user.city);
    setZip(user.zip);
    setPhone(user.phone);
  }, [user]);*/

  const onSubmitForm = () => {
    let data = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      zip: zip,
      city: city,
      phone: phone,
    };
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
