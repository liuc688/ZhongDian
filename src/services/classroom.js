import {request, METHOD } from '@/utils/request'

// 添加
export async function classroom_add(params) {
  return request('/api/classroom/add', params || {},METHOD.POST)
}
// 编辑
export async function classroom_edit(params) {
  return request('/api/classroom/edit', params || {},METHOD.POST)
}
// 详情
export async function classroom_get(params) {
  return request('/api/classroom/get', params || {},METHOD.POST)
}

// 评价
export async function classroom_grade(params) {
  return request('/api/classroom/grade', params || {},METHOD.POST)
}
// 获取评价
export async function classroom_get_grade(params) {
  return request('/api/classroom/get/grade', params || {},METHOD.POST)
}

// 删除
export async function classroom_delete(params) {
  return request('/api/classroom/delete', params || {},METHOD.POST)
}

// 列表
export async function classroom_paginate(params) {
  return request('/api/classroom/paginate', params || {},METHOD.POST)
}