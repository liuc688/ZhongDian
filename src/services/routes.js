import {request, METHOD } from '@/utils/request'
/**
 * 应用列表
 * @param keyword 关键字检索,检索字段:title,name
 * @param sort 排序字段,默认sort
 * @param order_by 排序字段,默认 sort倒序
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function route_list(params) {
  return request('/api/route/list', params || {},METHOD.POST)
}

export async function routeinfo_add(params) {
  return request('/api/routeinfo/add', params || {},METHOD.POST)
}

export async function routeinfo_edit(params) {
  return request('/api/routeinfo/edit', params || {},METHOD.POST)
}

export async function routeinfo_get(params) {
  return request('/api/routeinfo/get', params || {},METHOD.POST)
}
// 路由编辑
export async function route_edit(params) {
  return request('/api/route/edit', params || {},METHOD.POST)
}

// 路由删除
export async function route_delete(params) {
  return request('/api/route/delete', params || {},METHOD.POST)
}
// 同步
export async function route_sync(params) {
  return request('/api/route/sync', params || {},METHOD.POST)
}
// 路由分组
export async function routeinfo_group(params) {
  return request('/api/routeinfo/group', params || {},METHOD.POST)
}
