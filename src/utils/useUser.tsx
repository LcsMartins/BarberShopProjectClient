/* eslint-disable @typescript-eslint/ban-types */
import React, {
    createContext,
    useContext,
    useState,
    useMemo,
  } from 'react';
  
  interface User{
    id: string,
    email: string,
    password: string,
    name: string,
    contactNumber: string,
  }

  interface UserContextProps {
    user?: User;
    setUser: Function;
  }
  
  const initialUser = {
    id: '',
    email: '',
    password:'' ,
    name:'Lucas' ,
    contactNumber: '',
  }

  const UserContext = createContext<UserContextProps>({
    user: initialUser,
    setUser: () => false,
  });
  
  interface Props{
    children: React.ReactNode;
  }

  export const UserProvider: React.FC <Props>= ({ children }) => {
    const [user, setUser] = useState(initialUser);
  
    const value = useMemo(
      () => ({
        user,
        setUser,
      }),
      [user],
    );
    return (
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
  };
  
  //funcao devolve user e setUser, por isso precisa desestrutrar
  export const useUser = () => {
    const context = useContext(UserContext);
  
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };