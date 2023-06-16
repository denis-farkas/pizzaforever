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

  return (
    <UserContext.Provider
      value={{ logged, setLogged, setUserData, registerUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
