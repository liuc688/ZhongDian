import { request, METHOD } from '@/utils/request'

export async function usenote_add(params) {
    return request('/api/usenote/add', params || {}, METHOD.POST)
}

export async function usenote_edit(params) {
    return request('/api/usenote/edit', params || {}, METHOD.POST)
}

export async function usenote_delete(params) {
    return request('/api/usenote/delete', params || {}, METHOD.POST)
}

export async function usenote_tree(params) {
    return request('/api/usenote/tree', params || {}, METHOD.POST)
}