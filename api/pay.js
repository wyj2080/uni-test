import request from '@/common/js/request.js'


// 创建当面付
export function createPay(data){
	return request({
		url: '/pay/create',
		data,
		method:"GET"
	})
}

// 退款接口
export function refund(data){
	return request({
		url: '/pay/refund',
		data,
		method:"GET"
	})
}