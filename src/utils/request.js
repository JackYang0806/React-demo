import axios from 'axios'

const http = axios.create({
    baseURL: "https://cloud.seeyon.com",
    timeout: 1000 * 180,
    withCredentials: true
})
http.interceptors.request.use(request => {
    return request
})
http.interceptors.response.use(response => {
    if (response.status === 200) {
        return Promise.resolve(response.data)
    }
    return response
}, error => {
    return Promise.reject(error)
})
export default http