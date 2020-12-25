import request from '@/common/js/request.js'


// 获取支付接口
export function getPay(data){
	return request({
		url: '/pay/test',
		data,
		method:"GET"
	})
}

// 获取支付接口list
export function test(data){
	return request({
		url: '/java8/retain',
		data,
		method:"GET"
	})
}