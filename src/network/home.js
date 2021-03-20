import { request } from './request'
export function getHomeMultidata() {
    return request({
        url: '/cookbooks'
    })
}
// export function getList(){
//     return request({
//         url: '/cookbooks/list'
//     })
// }
// export function getHomeGoods(type, page) {
//     return request({
//         url: '/home/data',
//         params: {
//             type,
//             page
//         }
//     })
// }