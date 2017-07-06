var path=require("path")
var ET=require("extract-text-webpack-plugin")
var webpack=require("webpack")
var hwp=require("html-webpack-plugin")

module.exports={
	//入口文件
	entry: "./app/index.js",
	//输出文件的路径
	output:{
		filename:"app.js",//文件名称
		path:path.resolve(__dirname,'dist'),//文件路劲
		// publicPath: '/assets'//打包出去的编译路径
	},
	//准确查找出那个文件里面报错了
	devtool:"source-map",
	module:{
		rules:[
			{
				test:/\.js$/,
				use:[
					"babel"
				]
			},
			{
				test: /\.css$/,
				use:ET.extract({
					fallback:"style",
					use:{
							loader:"css",
							options: {
								modules:true
							}
					},
					publicPath:"/dist"
				}) 
			},
			{
				test: /\.less$/,
				use:ET.extract({
					fallback:"style",
					use:[
						{
							loader:"css",
							options: {
								modules:true
							}
					},
						"less"
					],
					publicPath:"/dist"
				})
				
			}
		]
	},
	//配置公共的-loader的简写模式
	resolveLoader:{
		moduleExtensions:["-loader"]
	},
	
	plugins:[
		//配置单独拉出css文件的操作插件
		new ET({
			filename:"bundles.css"
		}),
		new webpack.BannerPlugin({banner:"1506F"}),
		//注入依赖
		new hwp({
			title: 'My App',//标题的配置
			template:__dirname+'/index.html',//注入的首页
			inject:"body"
		})
	],
	//配置服务打包自启动的
	devServer:{
		/*contentBase:"build/",*/
		inline:true,
		port:9000,
		open:true
	}
}