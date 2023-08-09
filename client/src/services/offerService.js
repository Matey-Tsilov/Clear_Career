import { get, post } from "../api/api"

const getAll = () => get("/data/offers");
const create = (data) => post("/data/offers", data)


export {
    getAll,
    create
}