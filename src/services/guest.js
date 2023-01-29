import { request, METHOD } from '@/utils/request'


// 访客权限
export async function guest_get(params) {
    return request("/api/guest/get", params || {}, METHOD.POST)
}

// 访客权限编辑
export async function guest_edit(params) {
    return request("/api/guest/edit", params || {}, METHOD.POST)
}
