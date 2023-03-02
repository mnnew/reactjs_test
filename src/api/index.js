import axios from "axios"

export const api = (url, method, data=null, headers) => {
    const Instanse = axios.create({
        baseURL: "http://localhost:3000"
    })

    const config ={
        url,
        method,
        data
    }
    if (headers) {
        config.headers = headers
    }
    return Instanse.request(config)
}