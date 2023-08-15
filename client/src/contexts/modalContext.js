import { createContext, useState } from "react";

export const ModalContext = createContext()

export const ModalContextProvider = ({children}) => {
const [modal, setModal] = useState({opened: false, msg: ''})

return <ModalContext.Provider value={{modal, setModal}}>
    {children}
</ModalContext.Provider>
}