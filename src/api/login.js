import request from '@/utils/request'
export function getClassify(){
  return request({
    url: '/getcate',
    method: 'get'
  })
}
