import { request, METHOD } from '@/utils/request'

// 表格分页
export async function table_paginate(params) {
    return request('/api/table/paginate', params || {}, METHOD.POST)
}
// 表格新增
export async function table_create(params) {
    return request('/api/table/create', params || {}, METHOD.POST)
}
// 表格编辑
export async function table_edit(params) {
    return request('/api/table/edit', params || {}, METHOD.POST)
}
// 表格删除
export async function table_delete(params) {
    return request('/api/table/delete', params || {}, METHOD.POST)
}
// 表格详情
export async function table_get(params) {
    return request('/api/table/get', params || {}, METHOD.POST)
}
// 表格名称校验
export async function table_name(params) {
    return request('/api/table/name', params || {}, METHOD.POST)
}
// 表格模板生成
export async function table_template(params) {
    return request('/api/table/excel/template', params || {}, METHOD.POST)
}
// 表格查询
export async function select_table(params) {
    return request('/api/select/table', params || {}, METHOD.POST)
}
// 查询记录
export async function select_record(params) {
    return request('/api/select/record', params || {}, METHOD.POST)
}
// 查看报表
export async function select_report(params) {
    return request('/api/select/report', params || {}, METHOD.POST)
}
// 接口文档
export async function interface_create(params) {
    return request('/api/table/word/template', params || {}, METHOD.POST)
}
// 设置表单
export async function table_form(params) {
    return request('/api/table/form', params || {}, METHOD.POST)
}

/**字段管理 */
// 字段排序
export async function field_sort(params) {
    return request('/api/field/sort', params || {}, METHOD.POST)
}
// 字段添加
export async function field_create(params) {
    return request('/api/field/create', params || {}, METHOD.POST)
}
// 字段编辑
export async function field_edit(params) {
    return request('/api/field/edit', params || {}, METHOD.POST)
}
// 字段删除
export async function field_delete(params) {
    return request('/api/field/delete', params || {}, METHOD.POST)
}
// 字段还原
export async function field_restore(params) {
    return request('/api/field/restore', params || {}, METHOD.POST)
}
// 字段列表
export async function field_list(params) {
    return request('/api/field/list', params || {}, METHOD.POST)
}
// 字段详情
export async function field_get(params) {
    return request('/api/field/get', params || {}, METHOD.POST)
}
// 字段验证
export async function field_verify(params) {
    return request('/api/field/verify', params || {}, METHOD.POST)
}
// 表单生成
export async function table_forms(params) {
    return request('/api/table/forms', params || {}, METHOD.POST)
}
// 表单获取
export async function table_formsget(params) {
    return request('/api/table/forms/get', params || {}, METHOD.POST)
}
// 表单编辑
export async function forms_edit(params) {
    return request('/api/forms/edit', params || {}, METHOD.POST)
}
// 结果导出
export async function value_export(params) {
    return request('/api/value/export', params || {}, METHOD.POST)
}
// 导出文件
// 分页
export async function download_paginate(params) {
    return request('/api/download/paginate', params || {}, METHOD.POST)
}
// 下载
export async function download_get(params) {
    return request('/api/download/get', params || {}, METHOD.POST)
}

/** 数据管理 */
// 数据创建
export async function value_create(params) {
    return request('/api/value/create', params || {}, METHOD.POST)
}
// 数据编辑
export async function value_edit(params) {
    return request('/api/value/edit', params || {}, METHOD.POST)
}
// 数据删除
export async function value_delete(params) {
    return request('/api/value/delete', params || {}, METHOD.POST)
}
// 数据还原
export async function value_restore(params) {
    return request('/api/value/restore', params || {}, METHOD.POST)
}
// 数据模板导入
export async function value_template(params) {
    return request('/api/value/template', params || {}, METHOD.POST)
}
// 数据详情
export async function select_get(params) {
    return request('/api/select/get', params || {}, METHOD.POST)
}



/**报表管理 */
// 分页
export async function report_paginate(params) {
    return request('/api/report/paginate', params || {}, METHOD.POST)
}
// 创建
export async function report_create(params) {
    return request('/api/report/create', params || {}, METHOD.POST)
}
// 编辑
export async function report_edit(params) {
    return request('/api/report/edit', params || {}, METHOD.POST)
}
// 删除
export async function report_delete(params) {
    return request('/api/report/delete', params || {}, METHOD.POST)
}
// 还原
export async function report_restore(params) {
    return request('/api/report/restore', params || {}, METHOD.POST)
}
// 运行
export async function report_run(params) {
    return request('/api/report/run', params || {}, METHOD.POST)
}
// 详情
export async function report_get(params) {
    return request('/api/report/get', params || {}, METHOD.POST)
}




/***事件管理 */
// 分页
export async function event_paginate(params) {
    return request('/api/event/paginate', params || {}, METHOD.POST)
}
// 创建
export async function event_create(params) {
    return request('/api/event/create', params || {}, METHOD.POST)
}
// 激活
export async function event_activate(params) {
    return request('/api/event/activate', params || {}, METHOD.POST)
}
// 关闭
export async function event_close(params) {
    return request('/api/event/close', params || {}, METHOD.POST)
}

/***查询管理 */
export async function select_filter(params) {
    return request('/api/select/filter	', params || {}, METHOD.POST)
}
// zhongtai
export async function value_sum(params) {
    return request('/api/value/sum', params || {}, METHOD.POST)
}
// chaxun
export async function filter_select(params) {
    return request('/api/filter/select', params || {}, METHOD.POST)
}
// luru
export async function create_select(params) {
    return request('/api/create/select', params || {}, METHOD.POST)
}