import { useLocalStorage } from "../hooks/useLocalStorage";

const { createContext, useState } = require("react");

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    
    const [user, setUser] = useLocalStorage({})

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>

    )
}
