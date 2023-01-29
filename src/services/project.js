import { request, METHOD } from '@/utils/request'

export async function project_add(params) {
    return request('/api/project/add', params || {}, METHOD.POST)
}

export async function project_edit(params) {
    return request('/api/project/edit', params || {}, METHOD.POST)
}

export async function project_delete(params) {
    return request('/api/project/delete', params || {}, METHOD.POST)
}

export async function project_list(params) {
    return request('/api/project/list', params || {}, METHOD.POST)
}

export async function project_get(params) {
    return request('/api/project/get', params || {}, METHOD.POST)
}
export async function project_export(params) {
    return request('/api/project/export', params || {}, METHOD.POST)
}
// 客户
export async function customer_export(params) {
    return request('/api/customer/export', params || {}, METHOD.POST)
}
// 账款
export async function account_export(params) {
    return request('/api/account/export', params || {}, METHOD.POST)
}