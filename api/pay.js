import request from '@/common/js/request.js'


// 获取售后回访list
export function getPay(data){
	return request({
		url: '/pay/test',
		data,
		method:"GET"
	})
}
