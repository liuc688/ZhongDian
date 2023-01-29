import { request, METHOD } from '@/utils/request'

export async function customer_add(params) {
    return request('/api/customer/add', params || {}, METHOD.POST)
}

export async function customer_edit(params) {
    return request('/api/customer/edit', params || {}, METHOD.POST)
}

export async function customer_delete(params) {
    return request('/api/customer/delete', params || {}, METHOD.POST)
}

export async function customer_list(params) {
    return request('/api/customer/list', params || {}, METHOD.POST)
}

