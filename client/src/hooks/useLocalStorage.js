import { useState } from "react"
import { getUserData, clearUserData, setUserData } from "../api/util"

export const useLocalStorage = (defaultUser) => {
    const [user, setUser] = useState(() => {
        const loggedUser = getUserData()
//единствено заради този ред имаме local/sessionStorage, 
//просто без него нямаше как да ни преживя информацията за потребиталя през refresh-овете!
        if (loggedUser?.userData) {
            return loggedUser
        }
        return defaultUser
    })

const setLocalStorage = (curUser = '') => {
    if (curUser) {
        setUser(curUser)
        setUserData(curUser)
    }else {
        setUser({})
        clearUserData()
    }
}

    return [user, setLocalStorage]
}