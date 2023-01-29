import {request, METHOD } from '@/utils/request'

// 添加
export async function riskrequest_add(params) {
  return request('/api/riskrequest/add', params || {},METHOD.POST)
}
// 编辑
export async function riskrequest_edit(params) {
  return request('/api/riskrequest/edit', params || {},METHOD.POST)
}
// 详情
export async function riskrequest_get(params) {
  return request('/api/riskrequest/get', params || {},METHOD.POST)
}
// 详情
export async function riskrequest_accept(params) {
  return request('/api/riskrequest/accept', params || {},METHOD.POST)
}
// 详情
export async function riskrequest_detail(params) {
  return request('/api/riskrequest/detail', params || {},METHOD.POST)
}

// 列表
export async function riskrequest_paginate(params) {
  return request('/api/riskrequest/paginate', params || {},METHOD.POST)
}
export async function riskrequest_delete(params) {
  return request('/api/riskrequest/delete', params || {},METHOD.POST)
}
