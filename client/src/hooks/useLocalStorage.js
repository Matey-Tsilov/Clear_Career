import { useState } from "react"
import { getUserData, clearUserData, setUserData } from "../api/util"

export const useLocalStorage = (defaultUser) => {
    const [user, setUser] = useState(() => {
        const loggedUser = getUserData()

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