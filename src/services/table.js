import { request, METHOD } from '@/utils/request'

export async function table_form(params) {
    return request('/api/table/form', params || {}, METHOD.POST)
}

export async function table_form_get(params) {
    return request('/api/table/form/get', params || {}, METHOD.POST)
}