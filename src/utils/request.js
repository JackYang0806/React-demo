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
        return response.data
    } else {
        throw Error(response)
    }
})
export default http