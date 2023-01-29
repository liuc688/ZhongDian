
import { request, METHOD } from '@/utils/request'

export async function pagiante(params) {
    return request("/api/order/paginate", params || {}, METHOD.POST)
}
export async function orders(params) {
    return request("/api/order/get", params || {}, METHOD.POST)
}
export async function forwardget(params) {
    return request("/api/forward/get", params || {}, METHOD.POST)
}
export async function dispose(params) {
    return request("/api/order/dispose", params || {}, METHOD.POST)
}
export async function disposed(params) {
    return request("/api/order/disposed", params || {}, METHOD.POST)
}
export async function orderclose(params) {
    return request("/api/order/close", params || {}, METHOD.POST)
}
export async function activate(params) {
    return request("/api/order/activate", params || {}, METHOD.POST)
}
export async function reject(params) {
    return request("/api/order/reject", params || {}, METHOD.POST)
}
export async function order_import(params) {
    return request("/api/order/import", params || {}, METHOD.POST)
}
export async function depart(params) {
    return request("/api/organization/list", params || {}, METHOD.POST)
}
export async function organization_add(params) {
    return request("/api/organization/add", params || {}, METHOD.POST)
}
export async function insert(params) {
    return request("/api/order/insert", params || {}, METHOD.POST)
}
export async function forward(params) {
    return request("/api/order/forward", params || {}, METHOD.POST)
}
export async function labellist(params) {
    return request("/api/label/list", params || {}, METHOD.POST)
}
export async function labelall(params) {
    return request("/api/label/all", params || {}, METHOD.POST)
}
export async function documentkeyword(params) {
    return request("/api/order/keywords", params || {}, METHOD.POST)
}
export async function projectlist(params) {
    return request("/api/project/all", params || {}, METHOD.POST)
}
export async function projectpaginate(params) {
    return request("/api/project/list", params || {}, METHOD.POST)
}
export async function label_Insert(params) {
    return request("/api/label/insert", params || {}, METHOD.POST)
}
export async function list(params) {
    return request("/api/label/list", params || {}, METHOD.POST)
}
export async function remove(params) {
    return request("/api/label/remove", params || {}, METHOD.POST)
}
export async function projectsave(params) {
    return request("/api/project/save", params || {}, METHOD.POST)
}
export async function projectinsert(params) {
    return request("/api/project/insert", params || {}, METHOD.POST)
}
export async function projectdel(params) {
    return request("/api/project/del", params || {}, METHOD.POST)
}
export async function label_save(params) {
    return request("/api/label/save", params || {}, METHOD.POST)
}
export async function departmentlis(params) {
    return request("/api/organization/list", params || {}, METHOD.POST)
}
export async function workerlis(params) {
    return request("/api/user/list", params || {}, METHOD.POST)
}
export async function departinser(params) {
    return request("/api/organization/edit", params || {}, METHOD.POST)
}
export async function workerinsert(params) {
    return request("/api/user/add", params || {}, METHOD.POST)
}
export async function workerremove(params) {
    return request("/api/user/delete", params || {}, METHOD.POST)
}
export async function application_list(params) {
    return request("/api/application/list", params || {}, METHOD.POST)
}
export async function form_get(params) {
    return request("/api/forms/get", params || {}, METHOD.POST)
}
// export async function order_import(params) {
//     return request("/api/order/activate", params || {}, METHOD.POST)
// }
// export async function user_edit(params) {
//     return request("/api/order/pagiante", params || {}, METHOD.POST)
// }
// export async function user_delete(params) {
//     return request("/api/order/pagiante", params || {}, METHOD.POST)
// }
// export async function policy_list(params) {
//     return request("/api/order/pagiante", params || {}, METHOD.POST)
// }

export async function getform(params) {
    return request("/api/forms/get", params || {}, METHOD.POST)
}