

//uni read pages
const TransformPages = require('uni-read-pages')
const {webpack} = new TransformPages()
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name', 'aliasPath']
					});
					return JSON.stringify(tfPages.routes)
				}, true )
			})
		]
	},
	devServer: {
	  host: "localhost",
	  port: 80, // 端口号
	  // host: "www.biaoshengqi.com",
	  // port: 80,
	  https: false,
	  open: true, //配置自动启动浏览器
	  proxy: {
	    '/api': {
	      target: 'http://localhost:8080',//跨域地址
	      changeOrigin: true,//是否跨域
	      secure: false,//是否使用https
	      pathRewrite: {
	        '^/api': ''//这里要理解成用'/api'代替target里面的地址，后面的组件中我们调用接口的时候直接用api代替，比如我要调用'http://40.00.100:3002/user/add'，直接写成'/api/user/add'即可
	      }
	    },
		  'https://qr.alipay.com/': {
			  target: 'https://qr.alipay.com/',
			  changeOrigin: true,//是否跨域
			  secure: false,//是否使用https
			  pathRewrite: {
			    '^https://qr.alipay.com/': ''//这里要理解成用'/api'代替target里面的地址，后面的组件中我们调用接口的时候直接用api代替，比如我要调用'http://40.00.100:3002/user/add'，直接写成'/api/user/add'即可
			  }
		  }
	  }
	},
}
