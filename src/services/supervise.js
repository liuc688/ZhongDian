import { request} from '@/utils/request'

// 获取自定义表单
export function getform(data) {
    return request('/plugins/curstomform/forms.get', data)
}
// 任务列表
export function missionlist(data) {
    return request('/api/mission/list', data)
}
// 部门列表
export function sites(data) {
    return request('/plugins/initiative/site.list',data)
}
// 应用列表
export function applist(data) {
    return request('/api/application/list',data)
} 
// 目录列表
export function channellist(data) {
    return request('/api/channel/list',data)
}
// 系统任务增编
export function insert(data) {
    return request('/api/mission/insert',data)
}
//指派任务增编
export function appoint(data) {
    return request('/api/mission/appoint',data)
}
// 任务删除
export function missiondel(data) {
    return request('/plugins/mission/mission.delete',data)
}
// 任务详情
export function missionget(data) {
    return request('/api/mission/get',data)
}
//任务审核
export function finish(data) {
    return request('/api/mission/finished',data)
}
//任务审核
export function check(data) {
    return request('/api/mission/check',data)
}
