import { request, METHOD } from '@/utils/request'

/**
 * 应用列表
 * @param keyword 关键字检索,检索字段:title,name
 * @param sort 排序字段,默认sort
 * @param order_by 排序字段,默认 sort倒序
 * @returns {Promise<AxiosResponse<T>>}
 */
// 问答分页
export async function know_paginate(params) {
    return request('/api/vol/know/paginate', params || {}, METHOD.POST)
}
// 问答审核
export async function know_check(params) {
    return request('/api/vol/know/check', params || {}, METHOD.POST)
}
// 问答删除
export async function know_delete(params) {
    return request('/api/vol/know/delete', params || {}, METHOD.POST)
}
// 问答新增
export async function know_insert(params) {
    return request('/api/vol/know/insert', params || {}, METHOD.POST)
}
// 问答编辑
export async function know_edit(params) {
    return request('/api/vol/know/edit', params || {}, METHOD.POST)
}
// 问答获取
export async function know_get(params) {
    return request('/api/vol/know/get', params || {}, METHOD.POST)
}
// 答案审核
export async function answer_check(params) {
    return request('/api/vol/answer/check', params || {}, METHOD.POST)
}
// 答案还原
export async function know_restore(params) {
    return request('/api/vol/know/restore', params || {}, METHOD.POST)
}
