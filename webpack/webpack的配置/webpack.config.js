const path = require('path')

module.exports = {
	entry:'./src/main.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'bundle.js',
		publicPath:'dist/'
	},
	mnodule:{
		rules:[
			{
				test:/\.css$/,
				// css-loader只负责将css文件加载
				// style-loader负责将样式添加到DOM中
				// 使用多个loader时，是从右向左
				use:['css-loader','style-loader']
			},
			{
				test:/\.less$/,
				use:[{
					loader:"style-loader"
				},{
					loader:"css-loader"
				},{
					loader:"less-loader"
				}]
			},
			{
				test:/\.(png|jpg|gif|jpeg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							// 当加载的图片，小于limit时，会将图片编译成base64字符串形式
							// 当加载的图片，大于limit时，需要使用file-loader模块进行加载
							limit:8192
						},
						name:'img/[name]'
					}
				]
			},
			{
				test:/\.js$/,
				// exclude：排除
				// include：包含
				exclude:/(node_modules|bower_components)/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['@es2015']
					}
				}
			}
		]
	}
}

// 首先npm init 初始化包的名称