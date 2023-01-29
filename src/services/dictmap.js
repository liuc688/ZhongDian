import { request, METHOD } from '@/utils/request'

export async function dictmap_add(params) {
  return request('/api/dict/add', params || {}, METHOD.POST)
}

export async function dictmap_edit(params) {
  return request('/api/dict/edit', params || {}, METHOD.POST)
}

export async function dictmap_del(params) {
  return request('/api/dict/delete', params || {}, METHOD.POST)
}

export async function dictmap_tree(params) {
  return request('/api/dict/tree', params || {}, METHOD.POST)
}

export async function dictmap_list(params) {
  return request('/api/dict/list', params || {}, METHOD.POST)
}