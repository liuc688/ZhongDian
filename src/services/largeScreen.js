import { request, METHOD } from '@/utils/request'

// --嘉明大屏--
// 年营业额
// http://jiaming.vm68.suncoolnet.cn/api/manage/year/yingyee
export async function year_yingyee(params) {
  return request('/api/manage/year/yingyee', params || {}, METHOD.POST)
}

// 纳税
// http://jiaming.vm68.suncoolnet.cn/api/manage/year/nashui
export async function year_nashui(params) {
  return request('/api/manage/year/nashui', params || {}, METHOD.POST)
}

// 行业分布
// http://jiaming.vm68.suncoolnet.cn/api/manage/industry/count
export async function industry_count(params) {
  return request('/api/manage/industry/count', params || {}, METHOD.POST)
}

// 规模分布
// http://jiaming.vm68.suncoolnet.cn/api/company/manage/scale
export async function manage_scale(params) {
  return request('/api/company/manage/scale', params || {}, METHOD.POST)
}

// 地图区域
// http://jiaming.vm68.suncoolnet.cn/api/company/address
export async function address(params) {
  return request('/api/company/address', params || {}, METHOD.POST)
}

// 数读嘉明
// http://jiaming.vm68.suncoolnet.cn/api/manage/company/amount
export async function company_amount(params) {
  return request('/api/manage/company/amount', params || {}, METHOD.POST)
}

// 明星企业
// http://jiaming.vm68.suncoolnet.cn/api/manage/company/contrast
export async function company_contrast(params) {
  return request('/api/manage/company/contrast', params || {}, METHOD.POST)
}
