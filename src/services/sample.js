import { request, METHOD } from '@/utils/request'

export async function sample_add(params) {
    return request('/api/sample/add', params || {}, METHOD.POST)
}
export async function sample_edit(params) {
    return request('/api/sample/edit', params || {}, METHOD.POST)
}
export async function sample_delete(params) {
    return request('/api/sample/delete', params || {}, METHOD.POST)
}

export async function sample_get(params) {
    return request('/api/sample/get', params || {}, METHOD.POST)
}

export async function sample_paginate(params) {
    return request('/api/sample/paginate', params || {}, METHOD.POST)
}