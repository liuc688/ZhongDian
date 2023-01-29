import { request} from '@/utils/request'

/** 短信模板管理 */
// 短信模板分页
export function short_paginate(data) {
    return request('/api/short/template/paginate', data)
}
// 短信模板创建
export function short_create(data) {
    return request('/api/short/template/create', data)
}
// 短信模板编辑
export function short_edit(data) {
    return request('/api/short/template/edit', data)
}
// 短信模板删除
export function short_delete(data) {
    return request('/api/short/template/delete', data)
}
// 短信模板还原
export function short_restore(data) {
    return request('/api/short/template/restore', data)
}
// 短信模板详情
export function short_get(data) {
    return request('/api/short/template/get', data)
}
// 短信模板信息
export function short_info(data) {
    return request('/api/short/template/info', data)
}
// 短信模板统计折线图
export function short_count(data) {
    return request('/api/short/template/count', data)
}