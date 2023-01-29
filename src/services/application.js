import {request, METHOD } from '@/utils/request'


/**
 * 应用列表
 * @param keyword 关键字检索,检索字段:title,name
 * @param sort 排序字段,默认sort
 * @param order_by 排序字段,默认 sort倒序
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function application_list(params) {
  return request('/api/application/list', params || {},METHOD.POST)
}

export async function application_get(params) {
  return request('/api/application/get', params || {},METHOD.POST)
}

export async function application_add(params) {
  return request('/api/application/add', params || {},METHOD.POST)
}

export async function application_edit(params) {
  return request('/api/application/edit', params || {},METHOD.POST)
}
export async function application_delete(params) {
  return request('/api/application/delete', params || {},METHOD.POST)
}
