import { request, METHOD } from '@/utils/request'

export async function schedule_add(params) {
    return request('/api/schedule/add', params || {}, METHOD.POST)
}

export async function schedule_get(params) {
    return request('/api/schedule/get', params || {}, METHOD.POST)
}

export async function schedule_list(params) {
    return request('/api/schedule/list', params || {}, METHOD.POST)
}

export async function schedule_paginate(params) {
    return request('/api/schedule/paginate', params || {}, METHOD.POST)
}

export async function schedule_delete(params) {
    return request('/api/schedule/delete', params || {}, METHOD.POST)
}
/** 日程列表 */
export function schedule_risklist(params) {
    return request("/api/schedule/risk/list	", params || {}, METHOD.POST)
}
/** 日程详情 */
export function schedule_riskget(params) {
    return request("/api/schedule/risk/get	", params || {}, METHOD.POST)
}
/** 日程删除 */
export function schedule_riskdelete(params) {
    return request("/api/schedule/risk/delete	", params || {}, METHOD.POST)
}