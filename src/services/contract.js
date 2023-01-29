import { request, METHOD } from '@/utils/request'

export async function contract_add(params) {
    return request('/api/contract/add', params || {}, METHOD.POST)
}

export async function contract_edit(params) {
    return request('/api/contract/edit', params || {}, METHOD.POST)
}

export async function contract_delete(params) {
    return request('/api/contract/delete', params || {}, METHOD.POST)
}
export async function contract_get(params) {
    return request('/api/contract/get', params || {}, METHOD.POST)
}
export async function contract_list(params) {
    return request('/api/contract/list', params || {}, METHOD.POST)
}

