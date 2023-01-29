import {request, METHOD } from '@/utils/request'

// 添加
export async function risktask_add(params) {
  return request('/api/risktask/add', params || {},METHOD.POST)
}
// 删除
export async function risktask_delete(params) {
  return request('/api/risktask/delete', params || {},METHOD.POST)
}
// 详情
export async function risktask_get(params) {
  return request('/api/risktask/get', params || {},METHOD.POST)
}

export async function risktask_user_paginate(params) {
  return request('/api/risktask/user/paginate', params || {},METHOD.POST)
}

// 列表
export async function risktask_paginate(params) {
  return request('/api/risktask/paginate', params || {},METHOD.POST)
}

// 回复协同任务
export async function risktask_handle_add(params) {
  return request('/api/risktask/handle/add', params || {},METHOD.POST)
}

// 回复编辑
export async function risktask_handle_edit(params) {
  return request('/api/risktask/handle/edit', params || {},METHOD.POST)
}
// 回复删除
export async function risktask_handle_delete(params) {
  return request('/api/risktask/handle/delete', params || {},METHOD.POST)
}
// 回复列表
export async function risktask_handle_list(params) {
  return request('/api/risktask/handle/list', params || {},METHOD.POST)
}

// 协同列表
export async function riskinfo_handle_list(params) {
  return request('/api/riskinfo/handle/list', params || {},METHOD.POST)
}