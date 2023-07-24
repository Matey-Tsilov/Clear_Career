function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'))
}

function setUserData(userData) {
    sessionStorage.setItem('userData', JSON.stringify(userData))
}

function clearUserData() {
    sessionStorage.removeItem('userData')
}

export{
    getUserData,
    setUserData,
    clearUserData
}