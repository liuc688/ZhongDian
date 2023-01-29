import { request, METHOD } from '@/utils/request'

/**
 * 应用列表
 * @param keyword 关键字检索,检索字段:title,name
 * @param sort 排序字段,默认sort
 * @param order_by 排序字段,默认 sort倒序
 * @returns {Promise<AxiosResponse<T>>}
 */
// 用户表单 分页、添加、编辑
export async function forms_paginate(params) {
  return request('/api/forms/user/paginate', params || {}, METHOD.POST)
}
export async function forms_list(params) {
  return request('/api/forms/user/list', params || {}, METHOD.POST)
}
export async function forms_add(params) {
  return request('/api/forms/user/add', params || {}, METHOD.POST)
}
export async function forms_edit(params) {
  return request('/api/forms/user/edit', params || {}, METHOD.POST)
}
// 系统表单 分页、添加、编辑、列表
export async function system_paginate(params) {
  return request('/api/forms/system/paginate', params || {}, METHOD.POST)
}
export async function system_add(params) {
  return request('/api/forms/system/add', params || {}, METHOD.POST)
}
export async function system_edit(params) {
  return request('/api/forms/system/edit', params || {}, METHOD.POST)
}
export async function forms_system_list(params) {
  return request('/api/forms/system/list', params || {}, METHOD.POST)
}
// 流程表单 分页、添加、编辑
export async function workflow_paginate(params) {
  return request('/api/forms/workflow/paginate', params || {}, METHOD.POST)
}
export async function workflow_add(params) {
  return request('/api/forms/workflow/add', params || {}, METHOD.POST)
}
export async function workflow_edit(params) {
  return request('/api/forms/workflow/edit', params || {}, METHOD.POST)
}
// 公共方法：获取与删除
export async function form_get(params) {
  return request('/api/forms/get', params || {}, METHOD.POST)
}
export async function form_delete(params) {
  return request('/api/forms/delete', params || {}, METHOD.POST)
}
/**
 * 获取多个表单
 */
export async function form_multiple(params) {
  return request('/api/forms/multiple', params || {}, METHOD.POST)
}