import { request, METHOD } from '@/utils/request'

export async function human_add(params) {
    return request('/api/human/add', params || {}, METHOD.POST)
}

export async function human_edit(params) {
    return request('/api/human/edit', params || {}, METHOD.POST)
}

export async function human_delete(params) {
    return request('/api/human/delete', params || {}, METHOD.POST)
}

export async function human_list(params) {
    return request('/api/human/list', params || {}, METHOD.POST)
}

export async function human_get(params) {
    return request('/api/human/get', params || {}, METHOD.POST)
}