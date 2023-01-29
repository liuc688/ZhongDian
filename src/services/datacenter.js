import { request, METHOD } from '@/utils/request'

// --首页--
// 产品分页
export async function product_paginate(params) {
  return request('/api/product/paginate', params || {}, METHOD.POST)
}
// 企业营业额
export async function company_run_sum(params) {
  return request('/api/company/run/sum', params || {}, METHOD.POST)
}
// 营业额排行榜
export async function company_run_rank(params) {
  return request('/api/company/run/rank', params || {}, METHOD.POST)
}
// 企业用工情况
export async function company_number_sum(params) {
  return request('/api/company/number/sum', params || {}, METHOD.POST)
}
// 产品分类
export async function company_run_category(params) {
  return request('/api/company/run/category', params || {}, METHOD.POST)
}
// 企业产品列表（针对于某个企业的分页）
export async function company_products_list(params) {
  return request('/api/company/products/list', params || {}, METHOD.POST)
}
// 管委会产品新增
export async function product_create(params) {
  return request('/api/product/create', params || {}, METHOD.POST)
}
// 管委会产品编辑
export async function product_edit(params) {
  return request('/api/product/edit', params || {}, METHOD.POST)
}
// （管委会）产品详情
export async function product_get(params) {
  return request('/api/product/get', params || {}, METHOD.POST)
}
// 企业地址分布
export async function company_address(params) {
  return request('/api/company/address', params || {}, METHOD.POST)
}
// 填报折线图
export async function company_datetime_theme(params) {
  return request('/api/company/datetime/theme', params || {}, METHOD.POST)
}
// 管委会走访编辑
export async function company_managements_edit(params) {
  return request('/api/company/managements/edit', params || {}, METHOD.POST)
}
// 管委会走访获取
export async function company_managements_get(params) {
  return request('/api/company/managements/get', params || {}, METHOD.POST)
}
// 管委会走访列表
export async function company_managements_list(params) {
  return request('/api/company/managements/list', params || {}, METHOD.POST)
}
// 管委会走访删除
export async function company_managements_delete(params) {
  return request('/api/company/managements/delete', params || {}, METHOD.POST)
}
// --企业管理--
// 企业信息分页
export async function info_paginate(params) {
  return request('/api/info/paginate', params || {}, METHOD.POST)
}
// 企业基本信息新增
export async function info_create (params) {
  return request('/api/info/create', params || {}, METHOD.POST)
}
// 企业基本信息新增时的验证（如果公司名重复或者手机号重复，就新增不成功）
export async function info_admin_verify(params) {
  return request('/api/info/admin/verify', params || {}, METHOD.POST)
}
// 企业工商信息新增 和 编辑
export async function industry_create(params) {
  return request('/api/industry/create', params || {}, METHOD.POST)
}
// 字典下级树
export async function dict_tree(params) {
  return request('/api/dict/tree', params || {}, METHOD.POST)
}
// 企业基本信息编辑
export async function info_edit(params) {
  return request('/api/info/edit', params || {}, METHOD.POST)
}
// 企业信息详情
export async function info_get(params) {
  return request('/api/info/get', params || {}, METHOD.POST)
}
// 企业信息删除
export async function info_delete(params) {
  return request('/api/info/delete', params || {}, METHOD.POST)
}
// 企业信息还原
export async function info_restore (params) {
  return request('/api/info/restore ', params || {}, METHOD.POST)
}
// 企业列表
export async function info_list (params) {
  return request('/api/info/list ', params || {}, METHOD.POST)
}
// 企业经营信息
export async function manage_admin_paginate (params) {
  return request('/api/manage/admin/paginate', params || {}, METHOD.POST)
}
// 管委会新增企业经营信息
// 新增
export async function manage_create(params) {
  return request('/api/manage/create', params || {}, METHOD.POST)
}
// 企业经营信息验证
export async function manage_verify(params) {
  return request('/api/manage/verify', params || {}, METHOD.POST)
}
// 编辑
export async function manage_edit(params) {
  return request('/api/manage/edit', params || {}, METHOD.POST)
}
// 营业额折线图
export async function company_yingyee_enterprise (params) {
  return request('/api/company/yingyee/enterprise', params || {}, METHOD.POST)
}
// 纳税折线图
export async function company_nashui_enterprise (params) {
  return request('/api/company/nashui/enterprise', params || {}, METHOD.POST)
}
// 用工折线图
export async function company_yonggong_enterprise(params) {
  return request('/api/company/yonggong/enterprise', params || {}, METHOD.POST)
}
// 能耗折线图
export async function company_nenghao_enterprise(params) {
  return request('/api/company/nenghao/enterprise', params || {}, METHOD.POST)
}
// 利润总额折线图
export async function company_lirun_enterprise(params) {
  return request('/api/company/lirun/enterprise', params || {}, METHOD.POST)
}
// 研发费用折线图
export async function company_yanfa_enterprise(params) {
  return request('/api/company/yanfa/enterprise', params || {}, METHOD.POST)
}
// 工业总产值折线图
export async function company_chanzhi_enterprise(params) {
  return request('/api/company/chanzhi/enterprise', params || {}, METHOD.POST)
}
// 企业经营预警
export async function manage_admin_warning (params) {
  return request('/api/manage/admin/warning', params || {}, METHOD.POST)
}
// --企业数据中心--

// --主题管理--
// 主题分页
export async function theme_paginate(params) {
  return request('/api/theme/paginate', params || {}, METHOD.POST)
}
// 主题填报创建
export async function theme_create(params) {
  return request('/api/theme/create', params || {}, METHOD.POST)
}
// 主题填报编辑
export async function theme_edit(params) {
  return request('/api/theme/edit', params || {}, METHOD.POST)
}
// 主题详情
export async function theme_get(params) {
  return request('/api/theme/get', params || {}, METHOD.POST)
}
// 主题信息，用于主题数据编辑，theme_get接口也可以，只是theme_get接口数据太多了，很多用不到，影响性能
export async function theme_info(params) {
  return request('/api/theme/info', params || {}, METHOD.POST)
}
// 主题删除
export async function theme_delete(params) {
  return request('/api/theme/delete', params || {}, METHOD.POST)
}
// 主题还原
export async function theme_restore(params) {
  return request('/api/theme/restore', params || {}, METHOD.POST)
}
// --沟通信息管理--
// 沟通中心分页
export async function message_admin_paginate(params) {
  return request('/api/message/admin/paginate', params || {}, METHOD.POST)
}
// 沟通中心分页
export async function qy_message_paginate(params) {
  return request('/api/qy/message/paginate', params || {}, METHOD.POST)
}
// 沟通回复
export async function qy_message_reply(params) {
  return request('/api/qy/message/reply', params || {}, METHOD.POST)
}
// 沟通信息详情
export async function qy_message_get(params) {
  return request('/api/qy/message/get', params || {}, METHOD.POST)
}
// --企业用户中心--
// 用户创建
export async function ruser_create(params) {
  return request('/api/ruser/create', params || {}, METHOD.POST)
}
// 策略列表
export async function ruser_policy(params) {
  return request('/api/ruser/policy', params || {}, METHOD.POST)
}
// 企业用户获取
export async function ruser_get(params) {
  return request('/api/ruser/get', params || {}, METHOD.POST)
}
// 用户分页
export async function ruser_paginate(params) {
  return request('/api/ruser/paginate', params || {}, METHOD.POST)
}
// 用户删除
export async function ruser_delete(params) {
  return request('/api/ruser/delete', params || {}, METHOD.POST)
}
// 用户还原
export async function ruser_restore(params) {
  return request('/api/ruser/restore', params || {}, METHOD.POST)
}
// --企业宏观经济--
// 企业规模分类
export async function company_manage_scale (params) {
  return request('/api/company/manage/scale', params || {}, METHOD.POST)
}
// 企业状态分类
export async function company_manage_status (params) {
  return request('/api/company/manage/status', params || {}, METHOD.POST)
}
// 企业产品分类
export async function product_company_category (params) {
  return request('/api/product/company/category', params || {}, METHOD.POST)
}
// 企业产品分类产值产量
export async function product_company_run (params) {
  return request('/api/product/company/run', params || {}, METHOD.POST)
}
// 企业按月营业额总计
export async function company_yingyee_sum (params) {
  return request('/api/company/yingyee/sum', params || {}, METHOD.POST)
}
// 营业额折线图
export async function manage_year_yingyee(params) {
  return request('/api/manage/year/yingyee', params || {}, METHOD.POST)
}
// 纳税额折线图
export async function manage_year_nashui(params) {
  return request('/api/manage/year/nashui', params || {}, METHOD.POST)
}
// 利润折线图
export async function manage_year_lirun(params) {
  return request('/api/manage/year/lirun', params || {}, METHOD.POST)
}
// 研发费用折线图
export async function manage_year_yanfa(params) {
  return request('/api/manage/year/yanfa', params || {}, METHOD.POST)
}
// 工业总产值折线图
export async function manage_year_chanzhi(params) {
  return request('/api/manage/year/chanzhi', params || {}, METHOD.POST)
}



// 企业未填报预警
export async function manage_input_warn (params) {
  return request('/api/manage/input/warn', params || {}, METHOD.POST)
}
// 经营预警分发
export async function info_message (params) {
  return request('/api/info/message', params || {}, METHOD.POST)
}
// 企业用户创建，新建一个企业，自动创建这个企业的账号和密码
export async function info_admin_create (params) {
  return request('/api/info/admin/create', params || {}, METHOD.POST)
}
// 企业列表
// export async function info_list (params) {
//   return request('/api/info/list', params || {}, METHOD.POST)
// }
// 企业重大事项
export async function manage_admin_event (params) {
  return request('/api/manage/admin/event', params || {}, METHOD.POST)
}
// 策略列表
export async function policy_list (params) {
  return request('/api/policy/list', params || {}, METHOD.POST)
}