import { request, METHOD } from '@/utils/request'

//预约详情
export async function bookings_get(params) {
    return request("/api/bookings/get", params || {}, METHOD.POST)
}

//添加预约
export async function person_add(params) {
    return request("/api/person/add", params || {}, METHOD.POST)
}

//我的预约
export async function person_list(params) {
    return request("/api/person/list", params || {}, METHOD.POST)
}

//预约受理
export async function person_accept(params) {
    return request("/api/person/accept", params || {}, METHOD.POST)
}

//预约列表
export async function bookings_paginate(params) {
    return request("/api/bookings/paginate", params || {}, METHOD.POST)
}

//预约项目所有人员的信息
export async function person_paginate(params) {
    return request("/api/person/paginate", params || {}, METHOD.POST)
}

