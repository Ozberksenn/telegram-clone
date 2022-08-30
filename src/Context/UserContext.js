import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext();

const DEFAULT_USER = {
  firstname: '',
  lastname: '',
  username: '',
};

const UserProvider = ({children}) => {
  const [user, setUser] = useState({});

  console.log(user);
  const values = {
    user,
    setUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export {UserProvider, useUser};
