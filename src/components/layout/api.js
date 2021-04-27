import http from '@/utils/request'
export function getMenu(data) {
    return http({
        url: "/commonapi/menu/mine",
        method: "post",
        data: data
    })
}
export function queryCases(data) {
    return http({
        url: "/searchapi/search/queryCases",
        method: "post",
        data: data
    })
}