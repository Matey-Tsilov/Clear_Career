import { notify } from "../common/notify.js"
import { getUserData, setUserData, clearUserData } from "./util.js"

const host = "http://localhost:3030"

async function request(url, options) {
    
    try {
        const res = await fetch(host + url, options)

        if (!res.ok) {
        const problem = await res.json()
        throw new Error(problem.message)
        }

        // if (res.status == 204) {
        //     return res
        // }
        // return res.json()

        //за стари версии на сървъра:
        try {
            return await res.json()
        } catch (error) {
            return res
        }


    } catch (err) {
        //alert(err.message)
        notify(err.message)
        throw err
    }
    
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {

        }
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }
    const userData = getUserData()
    if (userData) {
        options.headers['X-Authorization'] = userData.token
    }
    
    return options
}

async function get(url) {
    return request(url, createOptions())
}
async function post(url, data) {
    return request(url, createOptions('post', data))
}
async function put(url, data) {
    return request(url, createOptions('put', data))
}
async function del(url) {
    return request(url, createOptions('delete'))
}

async function login(email, password) {

    const serverRes = await post('/users/login', {email, password})
    
    const userData = {
        email: serverRes.email, 
        password: serverRes.password,
        token: serverRes.accessToken,
        id: serverRes._id,
        workExp: serverRes.workExp
    }
    
    //така ще можем по-лесно да взимаме колко миима е написал, за да визуализираме бройката в userProfile view
    //работи само при стари версии на сървъра!//await get(`/data/memes?where=_ownerId%3D%22${userData.id}%22&count`)
    setUserData(userData)

}

async function register(email, password, workExp) {

    const serverRes = await post('/users/register', {email, password, workExp})
    
    const userData = {
        email: serverRes.email, 
        password: serverRes.password,
        token: serverRes.accessToken,
        id: serverRes._id,
        workExp: serverRes.workExp
    }
    //така ще можем по-лесно да взимаме колко миима е написал, за да визуализираме бройката в userProfile view
    setUserData(userData)

}

async function logout() {
    await get('/users/logout')
    clearUserData()
}

export {
    login,
    logout,
    register,
    get,
    post,
    put,
    del
}