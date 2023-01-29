
import { request, METHOD } from '@/utils/request'

//域名列表
export async function project_domain(params) {
    return request("/api/spider/project/domain", params || {}, METHOD.POST)
}
//归属地列表
export async function project_site(params) {
    return request("/api/spider/project/site", params || {}, METHOD.POST)
}
//类型列表
export async function project_type(params) {
    return request("/api/spider/project/type", params || {}, METHOD.POST)
}
//站点列表
export async function project_organization(params) {
    return request("/api/spider/project/organization", params || {}, METHOD.POST)
}
//招投标信息分页
export async function project_paginate(params) {
    return request("/api/spider/project/paginate", params || {}, METHOD.POST)
}