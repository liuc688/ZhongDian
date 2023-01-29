import { request, METHOD } from '@/utils/request'

export async function messages_add(params) {
  return request('/api/message/add', params || {}, METHOD.POST)
}

export async function messages_paginate(params) {
  return request('/api/message/paginate', params || {}, METHOD.POST)
}

export async function messages_get(params) {
  return request('/api/message/get', params || {}, METHOD.POST)
}

export async function messages_total(params) {
  return request('/api/message/total', params || {}, METHOD.POST)
}

