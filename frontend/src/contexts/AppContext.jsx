import { createContext, useContext, useEffect, useState } from "react";
import { validateTokenFunc } from "../api-calls";

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const isLogged = async (req, res) => {
      const response = await validateTokenFunc();
      setIsLoggedIn(response);
      console.log(response);
      return response;
    };
    isLogged();
  }, [isLoggedIn]);
  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        // data,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
