import { request, METHOD } from '@/utils/request'

/**
 * 应用列表
 * @param keyword 关键字检索,检索字段:title,name
 * @param sort 排序字段,默认sort
 * @param order_by 排序字段,默认 sort倒序
 * @returns {Promise<AxiosResponse<T>>}
 */
// 问政分页
export async function inquire_paginate(params) {
    return request('/api/inquire/paginate', params || {}, METHOD.POST)
}
// 问政增
export async function inquire_add(params) {
    return request('/api/inquire/add', params || {}, METHOD.POST)
}
// 问政编
export async function inquire_update(params) {
    return request('/api/inquire/update', params || {}, METHOD.POST)
}
// 问政获取
export async function inquire_get(params) {
    return request('/api/inquire/get', params || {}, METHOD.POST)
}
// 主持人开场/结束
export async function inquire_start(params) {
    return request('/api/inquire/start', params || {}, METHOD.POST)
}
// 发言
export async function prologue_insert(params) {
    return request('/api/prologue/insert', params || {}, METHOD.POST)
}
// 问政答复
export async function question_answer(params) {
    return request('/api/question/answer', params || {}, METHOD.POST)
}
// 现场图片上传
export async function inquire_banner(params) {
    return request('/api/inquire/banner', params || {}, METHOD.POST)
}

