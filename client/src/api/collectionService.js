import * as api from '../api/api.js'


export const login = api.login
export const register = api.register
export const logout = api.logout

const ep = {
    create: '/data/memes',
    getAll: '/data/memes?sortBy=_createdOn%20desc',
    getById: '/data/memes/',
    edit: '/data/memes/',
    delete: '/data/memes/',
    userMemes: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`

}
export async function createMeme(data) {
    return api.post(ep.create, data)
}
export async function getAll() {
    return api.get('/data/memes?sortBy=_createdOn%20desc')
}
export async function getById(id) {
    return api.get(ep.getById + id)
}
export async function editMeme(id, data) {
    return api.put(ep.edit + id, data)
}
export async function delMeme(id) {
    return api.del(ep.delete + id)
}
export async function getUserMemes(userId) {
    return api.get(ep.userMemes(userId))
}