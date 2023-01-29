import { request, METHOD } from '@/utils/request'


export async function template_add(params) {
    return request("/api/template/add", params || {}, METHOD.POST)
}

export async function template_edit(params) {
    return request("/api/template/edit", params || {}, METHOD.POST)
}

export async function template_list(params) {
    return request("/api/template/list", params || {}, METHOD.POST)
}

export async function template_paginate(params) {
    return request("/api/template/paginate", params || {}, METHOD.POST)
}

export async function template_dir(params) {
    return request("/api/template/dir", params || {}, METHOD.POST)
}

export async function template_share(params) {
    return request("/api/template/share", params || {}, METHOD.POST)
}

export async function template_delete(params) {
    return request("/api/template/delete", params || {}, METHOD.POST)
}

export async function template_timeline(params) {
    return request("/api/template/timeline", params || {}, METHOD.POST)
}