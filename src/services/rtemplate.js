import { request, METHOD } from '@/utils/request'

export async function rtemplate_add(params) {
    return request('/api/rtemplate/add', params || {}, METHOD.POST)
}
export async function rtemplate_edit(params) {
    return request('/api/rtemplate/edit', params || {}, METHOD.POST)
}
export async function rtemplate_delete(params) {
    return request('/api/rtemplate/delete', params || {}, METHOD.POST)
}

export async function rtemplate_get(params) {
    return request('/api/rtemplate/get', params || {}, METHOD.POST)
}
export async function rtemplate_paginate(params) {
    return request('/api/rtemplate/paginate', params || {}, METHOD.POST)
}