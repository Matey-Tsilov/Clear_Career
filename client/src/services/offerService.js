import { get } from "../api/api"

const getAll = () => get("/data/offers");


export {
    getAll
}