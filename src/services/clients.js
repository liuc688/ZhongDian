import {request, METHOD } from '@/utils/request'

// 添加
export async function client_add(params) {
  return request('/api/client/add', params || {},METHOD.POST)
}
// 编辑
export async function client_edit(params) {
  return request('/api/client/edit', params || {},METHOD.POST)
}
// 详情
export async function client_get(params) {
  return request('/api/client/get', params || {},METHOD.POST)
}

// 列表
export async function client_paginate(params) {
  return request('/api/client/paginate', params || {},METHOD.POST)
}
// 删除
export async function client_delete(params) {
  return request('/api/client/delete', params || {},METHOD.POST)
}
// 路由信息分组
export async function routeinfo_group(params) {
  return request('/api/routeinfo/group', params || {},METHOD.POST)
}
// 路由信息分组
export async function routeinfo_list(params) {
  return request('/api/routeinfo/list', params || {},METHOD.POST)
}
// 应用列表 application/list
export async function application_list(params) {
  return request('/api/application/list', params || {},METHOD.POST)
}