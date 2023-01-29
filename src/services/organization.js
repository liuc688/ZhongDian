import {request, METHOD } from '@/utils/request'

// 组织树状列表
export async function organization_tree(params) {
  return request('/api/organization/tree', params || {},METHOD.POST)
}
// 组织添加
export async function organization_add(params) {
  return request('/api/organization/add', params || {},METHOD.POST)
}
// 组织获取
export async function organization_get(params) {
  return request('/api/organization/get', params || {},METHOD.POST)
}
// 组织编辑
export async function organization_edit(params) {
  return request('/api/organization/edit', params || {},METHOD.POST)
}
// 组织列表
export async function organization_list(params) {
  return request('/api/organization/list', params || {},METHOD.POST)
}
// 导出站点下发文量
export async function site_documentcount(params) {
  return request('/api/site/document/count', params || {},METHOD.POST)
}