import { request, METHOD } from '@/utils/request'


export async function policy_list(params) {
    return request('/api/policy/list', params || {}, METHOD.POST)
}
export async function policy_paginate(params) {
    return request('/api/policy/paginate', params || {}, METHOD.POST)
}
export async function policy_get(params) {
    return request('/api/policy/get', params || {}, METHOD.POST)
}
export async function policy_edit(params) {
    return request('/api/policy/edit', params || {}, METHOD.POST)
}
export async function policy_delete(params) {
    return request('/api/policy/delete', params || {}, METHOD.POST)
}
export async function policy_routes(params) {
    return request( '/api/policy/routes', params || {}, METHOD.POST)
}
export async function policy_add(params) {
    return request('/api/policy/add', params || {}, METHOD.POST)
}
// 策略树
export async function policy_tree(params) {
    return request('/api/policy/tree', params || {}, METHOD.POST)
}