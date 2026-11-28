import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL
const api = axios.create({
    baseURL: baseURL + '/api',
    withCredentials: true,
    withXSRFToken: true,

    headers: {
        'Content-Type' : 'application/json',
    },
    timeout: 5000
})


const web = axios.create({
    baseURL: baseURL ,
    withCredentials: true,
    withXSRFToken: true,
    
    headers: {
        'Content-Type' : 'application/json',
    },
    timeout: 5000
})

export { api , web };