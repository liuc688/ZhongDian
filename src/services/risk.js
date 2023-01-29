import {request, METHOD } from '@/utils/request'

// 添加
export async function riskinfo_add(params) {
  return request('/api/riskinfo/add', params || {},METHOD.POST)
}
// 编辑
export async function riskinfo_edit(params) {
  return request('/api/riskinfo/edit', params || {},METHOD.POST)
}
// 详情
export async function riskinfo_get(params) {
  return request('/api/riskinfo/get', params || {},METHOD.POST)
}

// 详情
export async function riskinfo_detail(params) {
  return request('/api/riskinfo/detail', params || {},METHOD.POST)
}

// 列表
export async function riskinfo_paginate(params) {
  return request('/api/riskinfo/paginate', params || {},METHOD.POST)
}