import { request, METHOD } from '@/utils/request'

export async function file_create_file(params) {
    return request("/api/file/create/file", params || {}, METHOD.POST)
}

export async function file_create_dir(params) {
    return request("/api/file/create/dir", params || {}, METHOD.POST)
}

export async function file_rename(params) {
    return request("/api/file/rename", params || {}, METHOD.POST)
}
export async function file_body(params) {
    return request("/api/file/body", params || {}, METHOD.POST)
}
export async function file_remove(params) {
    return request("/api/file/remove", params || {}, METHOD.POST)
}

export async function file_content(params) {
    return request("/api/file/content", params || {}, METHOD.POST)
}

export async function file_timeline(params) {
    return request("/api/file/timeline", params || {}, METHOD.POST)
}