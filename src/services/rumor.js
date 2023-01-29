import { request, METHOD } from '@/utils/request'

export async function rumortemplate_add(params) {
    return request('/api/rumortemplate/add', params || {}, METHOD.POST)
}
export async function rtemplate_edit(params) {
    return request('/api/rumortemplate/edit', params || {}, METHOD.POST)
}
export async function rtemplate_delete(params) {
    return request('/api/rumortemplate/delete', params || {}, METHOD.POST)
}

export async function rtemplate_get(params) {
    return request('/api/rumortemplate/get', params || {}, METHOD.POST)
}
export async function rtemplate_paginate(params) {
    return request('/api/rumortemplate/paginate', params || {}, METHOD.POST)
}

export async function sample_add(params) {
    return request('/api/rumorsamples/add', params || {}, METHOD.POST)
}
export async function sample_edit(params) {
    return request('/api/rumorsamples/edit', params || {}, METHOD.POST)
}
export async function sample_delete(params) {
    return request('/api/rumorsamples/delete', params || {}, METHOD.POST)
}

export async function sample_get(params) {
    return request('/api/rumorsamples/get', params || {}, METHOD.POST)
}

export async function sample_paginate(params) {
    return request('/api/rumorsamples/paginate', params || {}, METHOD.POST)
}