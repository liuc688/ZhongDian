
import { request, METHOD } from '@/utils/request'

// 语料分页
export function corpus_paginate(data) {
  return request('/api/corpus/paginate',data)
}

//语料创建
export function corpus_create(data) {
  return request('/api/corpus/create',data)
}

// 语料标题验证
export function corpus_title_verify(data) {
  return request('/api/corpus/title/verify',data)
}

// 语料编辑
export function corpus_edit(data) {
  return request('/api/corpus/edit',data)
}

// 语料删除 
export function corpus_delete(data) {
  return request('/api/corpus/delete',data)
}

// 语料还原
export function corpus_restore(data) {
  return request('/api/corpus/restore',data)
}

// 语料详情
export function corpus_get(data) {
  return request('/api/corpus/get',data)
}

// 语料同步
export function corpus_static(data) {
  return request('/api/corpus/static',data)
}

