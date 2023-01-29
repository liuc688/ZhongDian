import { request, METHOD } from '@/utils/request'


/**
 * 应用列表
 * @param keyword 关键字检索,检索字段:title,name
 * @param sort 排序字段,默认sort
 * @param order_by 排序字段,默认 sort倒序
 * @returns {Promise<AxiosResponse<T>>}
 */
// 资源分页
export async function repository_paginate(params) {
    return request('/api/repository/paginate', params || {}, METHOD.POST)
}
// 资源查询条件
export async function category_list(params) {
    return request('/api/category/list', params || {}, METHOD.POST)
}
// 资源添加
export async function repository_add(params) {
    return request('/api/repository/add', params || {}, METHOD.POST)
}
// 资源获取
export async function repository_get(params) {
    return request('/api/repository/get', params || {}, METHOD.POST)
}
// 资源编辑
export async function repository_edit(params) {
    return request('/api/repository/edit', params || {}, METHOD.POST)
}
// 资源删除
export async function deletes(params) {
    return request('/api/repository/delete', params || {}, METHOD.POST)
}
// 资源删除
export async function download(params) {
    return request('/api/repository/download', params || {}, METHOD.POST)
}

// 服务分页
export async function manual_paginate(params) {
    return request('/api/manual/paginate', params || {}, METHOD.POST)
}
// 服务添加
export async function manual_add(params) {
    return request('/api/manual/add', params || {}, METHOD.POST)
}
// 服务编辑
export async function manual_edit(params) {
    return request('/api/manual/edit', params || {}, METHOD.POST)
}
// 服务删除
export async function manual_delete(params) {
    return request('/api/manual/delete', params || {}, METHOD.POST)
}
// 服务获取
export async function manual_get(params) {
    return request('/api/manual/get', params || {}, METHOD.POST)
}
// 评论
export async function manual_review(params) {
    return request('/api/manual/review', params || {}, METHOD.POST)
}
// 评论删除
export async function review_delete(params) {
    return request('/api/review/delete', params || {}, METHOD.POST)
}
manual_get