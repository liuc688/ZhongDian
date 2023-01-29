import { request, METHOD } from '@/utils/request'
// 组培目录列表
export async function channel_list(params) {
  return request('/api/channel/list', params || {}, METHOD.POST)
}
// 栏目列表
export async function directory_list(params) {
  return request('/api/directory/list', params || {}, METHOD.POST)
}
// 栏目文章
export async function directory_document(params) {
  return request('/api/directory/document', params || {}, METHOD.POST)
}
// 栏目文章删除
export async function directory_delete(params) {
  return request('/api/directory/delete', params || {}, METHOD.POST)
}
// 栏目详情
export async function directory_get(params) {
  return request('/api/directory/get', params || {}, METHOD.POST)
}
// 栏目新增
export async function directory_insert(params) {
  return request('/api/directory/insert', params || {}, METHOD.POST)
}
// 栏目编辑
export async function directory_edit(params) {
  return request('/api/directory/edit', params || {}, METHOD.POST)
}
// 栏目目录
export async function directory_channel(params) {
  return request('/api/directory/channel', params || {}, METHOD.POST)
}
// 栏目名称修改
export async function directory_editname(params) {
  return request('/api/directory/editname', params || {}, METHOD.POST)
}
// 名称认证
export async function directory_verifyname(params) {
  return request('/api/directory/verifyname', params || {}, METHOD.POST)
}
// 文章分页
export async function document_paginate(params) {
  return request('/api/document/paginate', params || {}, METHOD.POST)
}
// 文章删除
export async function document_delete(params) {
  return request('/api/document/delete', params || {}, METHOD.POST)
}
// 文章审核
export async function document_approved(params) {
  return request('/api/document/approved', params || {}, METHOD.POST)
}
//文章驳回
export async function document_rejection(params) {
  return request('/api/document/rejection', params || {}, METHOD.POST)
}

// 文章还原
export async function document_rollback(params) {
  return request('/api/document/rollback', params || {}, METHOD.POST)
}
// 文章新增
export async function document_insert(params) {
  return request('/api/document/insert', params || {}, METHOD.POST)
}
// 文章详情
export async function document_get(params) {
  return request('/api/document/get', params || {}, METHOD.POST)
}
// 文章编辑
export async function document_edit(params) {
  return request('/api/document/edit', params || {}, METHOD.POST)
}
// 提取关键词
export async function document_keyword(params) {
  return request('/api/document/keyword', params || {}, METHOD.POST)
}
//目录显隐
export async function channel_hidden(params) {
  return request('/api/channel/hidden', params || {}, METHOD.POST)
}
//目录详情
export async function channel_get(params) {
  return request('/api/channel/get', params || {}, METHOD.POST)
}
// 目录挂载表单
export async function channel_forms(params) {
  return request('/api/channel/forms', params || {}, METHOD.POST)
}
// 目录挂载表单
export async function sync_maps(params) {
  return request('/api/channel/sync/maps', params || {}, METHOD.POST)
}
//设置模板
export async function channel_template(params) {
  return request('/api/channel/templates', params || {}, METHOD.POST)
}
// 目录编辑
export async function channel_edit(params) {
  return request('/api/channel/edit', params || {}, METHOD.POST)
}
// 目录新增
export async function channel_insert(params) {
  return request('/api/channel/insert', params || {}, METHOD.POST)
}
// 目录删除
export async function channel_delete(params) {
  return request('/api/channel/delete', params || {}, METHOD.POST)
}
//目录映射列表
export async function channel_maps(params) {
  return request('/api/channel/maps', params || {}, METHOD.POST)
}
// 添加映射
export async function channel_editmaps(params) {
  return request('/api/channel/editmaps', params || {}, METHOD.POST)
}
// 删除映射
export async function channel_deletemaps(params) {
  return request('/api/channel/deletemaps', params || {}, METHOD.POST)
}

// 文章抄送/呈送
export async function document_source(params) {
  return request('/api/document/source', params || {}, METHOD.POST)
}
// 文章下达
export async function document_issued(params) {
  return request('/api/document/issued', params || {}, METHOD.POST)
}
// 文章迁移
export async function document_move(params) {
  return request('/api/document/move', params || {}, METHOD.POST)
}
// 双向绑定文章查询
export async function document_search(params) {
  return request('/api/document/search', params || {}, METHOD.POST)
}
// 目录过滤
export async function channel_black(params) {
  return request('/api/channel/black', params || {}, METHOD.POST)
}
// 目录过滤移除
export async function channel_filter(params) {
  return request('/api/channel/filter', params || {}, METHOD.POST)
}
// 栏目过滤
export async function directory_black(params) {
  return request('/api/directory/black', params || {}, METHOD.POST)
}
// 栏目过滤移除
export async function directory_filter(params) {
  return request('/api/directory/filter', params || {}, METHOD.POST)
}
// 目录排序
export async function channel_sort(params) {
  return request('/api/channel/sort', params || {}, METHOD.POST)
}
// 栏目排序
export async function directory_sort(params) {
  return request('/api/directory/sort', params || {}, METHOD.POST)
}
// 文章排序
export async function document_sort(params) {
  return request('/api/document/sort', params || {}, METHOD.POST)
}
// 日志
export function logs(data) {
  return request('/api/logs/list',data)
}
// 预览
export function document_router(data) {
  return request('/api/document/router',data)
}
// 分享平台绑定
export function thirdparty_binding(data) {
  return request('/api/thirdparty/binding',data)
}

// 获取第三方信息
export function thirdparty_get(data) {
  return request('/api/thirdparty/get',data)
}
// 发布删改型任务
export function risk_initiative(data) {
  return request('/api/risk/initiative',data)
}
// 验证排序
export function channel_verifsort(data) {
  return request('/api/channel/verifysort',data)
}
// 导出目录
export function channel_export(data) {
  return request('/api/channel/export',data)
}
// 导出目录发文量
export function channel_documentcount(data) {
  return request('/api/channel/document/count',data)
}
// 排序上锁
export function operate_lockclose(data) {
  return request('/api/operate/lock/close',data)
}
// 排序解锁
export function operate_lockopen(data) {
  return request('/api/operate/lock/open',data)
}
// 重新渲染
export function render_reset(data) {
  return request('/api/render/reset',data)
}
// 文章导入模板
export function channel_excel_template(data) {
  return request('/api/channel/excel/template',data)
}
// 文章批量导入
export function document_excel_import(data) {
  return request('/api/document/excel/import',data)
}
// 文章下载结果分页
export function download_result_paginate(data) {
  return request('/api/download/result/paginate',data)
}
// 文章下载结果详情
export function download_result_get(data) {
  return request('/api/download/result/get',data)
}