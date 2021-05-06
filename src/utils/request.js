import axios from 'axios'

const http = axios.create({
    baseURL: "https://cloud.seeyon.com",
    timeout: 1000 * 180,
    withCredentials: true
})
http.interceptors.request.use(request => {
    // get 增加时间参数 防止缓存
    if (request.method === 'get') {
        request.params = {
            ...request.params,
            ... {
                '_t': new Date().getTime()
            }
        }
    }
    return request
}, error => {
    return Promise.reject(error)
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