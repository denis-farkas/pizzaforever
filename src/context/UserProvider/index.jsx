import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  const registerUser = (userData) => {
    const userData_json = JSON.stringify(userData);
    localStorage.setItem("userData", userData_json);
  };

  let user_json = localStorage.getItem("userData");
  let user = JSON.parse(user_json);

  return (
    <UserContext.Provider value={{ userData, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
