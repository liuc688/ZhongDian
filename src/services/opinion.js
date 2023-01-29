import { request, METHOD } from '@/utils/request'

/**
 * 应用列表
 * @param keyword 关键字检索,检索字段:title,name
 * @param sort 排序字段,默认sort
 * @param order_by 排序字段,默认 sort倒序
 * @returns {Promise<AxiosResponse<T>>}
 */
// 意见征集分页
export async function draft_paginate(params) {
  return request('/api/draft/paginate', params || {}, METHOD.POST)
}
// 组织列表
export async function site_list(params) {
    return request('/api/opinion/site/list', params || {}, METHOD.POST)
}
// 组织树
export async function organization_tree(params) {
    return request('/api/organization/tree', params || {},METHOD.POST)
  }
// 草案添加
export async function draft_add(params) {
    return request('/api/draft/add', params || {}, METHOD.POST)
}
// 草案编辑
export async function draft_update(params) {
    return request('/api/draft/update', params || {}, METHOD.POST)
}
// 草案删除
export async function draft_delete(params) {
    return request('/api/draft/delete', params || {}, METHOD.POST)
}
// 草案详情
export async function draft_get(params) {
    return request('/api/draft/get', params || {}, METHOD.POST)
}
// 意见添加
export async function opinion_add(params) {
    return request('/api/opinion/add', params || {}, METHOD.POST)
}
// 意见审核
export async function opinion_check(params) {
    return request('/api/opinion/check', params || {}, METHOD.POST)
}
// 意见移除
export async function opinion_remove(params) {
    return request('/api/opinion/remove', params || {}, METHOD.POST)
}

// 草案分页
export async function mold_paginate(params) {
    return request('/api/mold/paginate', params || {}, METHOD.POST)
}
// 草案编辑
export async function mold_update(params) {
    return request('/api/mold/update', params || {}, METHOD.POST)
}
// 草案新增
export async function mold_add(params) {
    return request('/api/mold/add', params || {}, METHOD.POST)
}
// 草案删除
export async function mold_delete(params) {
    return request('/api/mold/delete', params || {}, METHOD.POST)
}
// 草案列表
export async function mold_list(params) {
    return request('/api/mold/list', params || {}, METHOD.POST)
}

// 草案类别获取
export async function mold_get(params) {
    return request('/api/mold/get', params || {}, METHOD.POST)
}
// 获取目录
export async function channel_list(params) {
    return request('/api/channel/list', params || {}, METHOD.POST)
}