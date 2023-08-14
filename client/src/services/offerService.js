import { get, post, put, del } from "../api/api"

const getAll = () => get("/data/offers");
const getById = (id) => get(`/data/offers/${id}`)
const create = (data) => post("/data/offers", data)
const edit = (data, id) => put(`/data/offers/${id}`, data)
const remove = (id) => del(`/data/offers/${id}`)

export {
    getAll,
    getById,
    create,
    edit,
    remove
}