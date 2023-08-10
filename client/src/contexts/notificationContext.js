import { createContext } from "react";
import { useState } from "react";

export const NotifyContext = createContext()

export const NotifyContextProvider = ({children}) => {
  const [notify, setNotify] = useState({opened: false, msg: ''})

    return <>
    <NotifyContext.Provider value={{notify, setNotify}}>
        {children}
    </NotifyContext.Provider>
    </> 
}