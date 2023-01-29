import { request, METHOD } from '@/utils/request'

export async function report_add(params) {
    return request('/api/report/add', params || {}, METHOD.POST)
}
export async function report_edit(params) {
    return request('/api/report/edit', params || {}, METHOD.POST)
}
export async function report_delete(params) {
    return request('/api/report/delete', params || {}, METHOD.POST)
}
export async function report_get(params) {
    return request('/api/report/get', params || {}, METHOD.POST)
}

export async function forecast_add(params) {
    return request('/api/forecast/add', params || {}, METHOD.POST)
}

export async function forecast_get(params) {
    return request('/api/forecast/get', params || {}, METHOD.POST)
}

export async function report_paginate(params) {
    return request('/api/report/paginate', params || {}, METHOD.POST)
}