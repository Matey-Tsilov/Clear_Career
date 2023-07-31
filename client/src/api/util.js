function getUserData() {
    return JSON.parse(localStorage.getItem('userData'))
}

function setUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData))
}

function clearUserData() {
    localStorage.removeItem('userData')
}

export{
    getUserData,
    setUserData,
    clearUserData
}