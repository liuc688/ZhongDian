import { request, METHOD } from '@/utils/request'

export async function account_plan_add(params) {
    return request('/api/account/plan/add', params || {}, METHOD.POST)
}

export async function account_plan_edit(params) {
    return request('/api/account/plan/edit', params || {}, METHOD.POST)
}

export async function account_plan_delete(params) {
    return request('/api/account/plan/delete', params || {}, METHOD.POST)
}

export async function account_plan_list(params) {
    return request('/api/account/plan/list', params || {}, METHOD.POST)
}

export async function account_plan_pay(params) {
    return request('/api/account/plan/pay', params || {}, METHOD.POST)
}

export async function account_list(params) {
    return request('/api/account/list', params || {}, METHOD.POST)
}