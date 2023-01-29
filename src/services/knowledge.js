import { request, METHOD } from '@/utils/request'

//分库分页
export async function bases_paginate(params) {
    return request("/api/bases/paginate", params || {}, METHOD.POST)
  }

// 分库添加
export async function bases_add(params) {
  return request("/api/bases/add", params || {}, METHOD.POST)
}

// 分库修改
export async function bases_edit(params) {
  return request("/api/bases/edit", params || {}, METHOD.POST)
}

// 分库删除
export async function bases_delete(params) {
  return request("/api/bases/delete", params || {}, METHOD.POST)
}

// 题目增加
export async function questions_add(params) {
  return request("/api/questions/add", params || {}, METHOD.POST)
}

// 题目编辑
export async function questions_edit(params) {
  return request("/api/questions/edit", params || {}, METHOD.POST)
}

// 题目删除
export async function questions_delete(params) {
  return request("/api/questions/delete", params || {}, METHOD.POST)
}

// 分库删除
export async function questions_paginate(params) {
  return request("/api/questions/paginate", params || {}, METHOD.POST)
}

// 科目添加
export async function subjects_add(params) {
  return request("/api/subjects/add", params || {}, METHOD.POST)
}

// 科目修改
export async function subjects_edit(params) {
  return request("/api/subjects/edit", params || {}, METHOD.POST)
}

// 科目删除
export async function subjects_delete(params) {
  return request("/api/subjects/delete", params || {}, METHOD.POST)
}

// 科目分页
export async function subjects_paginate(params) {
  return request("/api/subjects/paginate", params || {}, METHOD.POST)
}
//科目列表
export async function subjects_list(params) {
  return request("/api/subjects/list", params || {}, METHOD.POST)
}
//试卷添加
export async function papers_add(params) {
  return request("/api/papers/add", params || {}, METHOD.POST)
}
//试卷修改
export async function papers_edit(params) {
  return request("/api/papers/edit", params || {}, METHOD.POST)
}
//试卷删除
export async function papers_delete(params) {
  return request("/api/papers/delete", params || {}, METHOD.POST)
}
//试卷分页
export async function papers_paginate(params) {
  return request("/api/papers/paginate", params || {}, METHOD.POST)
}
//题目列表
export async function questions_list(params) {
  return request("/api/questions/list", params || {}, METHOD.POST)
}
//考试添加
export async function examinations_add(params) {
  return request("/api/examinations/add", params || {}, METHOD.POST)
}
//考试修改
export async function examinations_edit(params) {
  return request("/api/examinations/edit", params || {}, METHOD.POST)
}
//考试删除
export async function examinations_delete(params) {
  return request("/api/examinations/delete", params || {}, METHOD.POST)
}
//考试分页
export async function examinations_paginate(params) {
  return request("/api/examinations/paginate", params || {}, METHOD.POST)
}
//参加考试
export async function examinees_add(params) {
  return request("/api/examinees/add", params || {}, METHOD.POST)
}

//试卷获取
export async function examinees_get(params) {
  return request("/api/examinees/get", params || {}, METHOD.POST)
}
//自动打分
export async function examinees_chitotal(params) {
  return request("/api/examinees/chitotal", params || {}, METHOD.POST)
}
//成绩列表
export async function examinees_paginate(params) {
  return request("/api/examinees/paginate", params || {}, METHOD.POST)
}
//解答题获取
export async function short_get(params) {
  return request("/api/examinees/short/get", params || {}, METHOD.POST)
}
//试卷打分
export async function examinees_total(params) {
  return request("/api/examinees/total", params || {}, METHOD.POST)
}

// 供考试人员查看自己的错题
export async function examinees_case(params) {
  return request("/api/examinees/case", params || {}, METHOD.POST)
}
