import bcrypt from "bcryptjs-react";
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [logged, setLogged] = useState(false);

  const registerUser = (userData) => {
    const userData_json = JSON.stringify(userData);
    localStorage.setItem("userData", userData_json);
    setUserData(userData_json);
  };

  const loginUser = (connectData) => {
    let user_json = localStorage.getItem("userData");
    let user = JSON.parse(user_json);
    setUserData(user);
    const goodPassword = bcrypt.compare(
      connectData.password,
      userData.password
    );
    if (goodPassword) {
      setLogged(true);
    }
  };

  return (
    <UserContext.Provider
      value={{ logged, setLogged, setUserData, registerUser, loginUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
