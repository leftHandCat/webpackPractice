

//使用sass-loader
var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		page1: './src/other.js',
    page2: './src/subChild.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name].bundle.js'    //区分文件有[name], [hash], [chunkhash]
	},
	module: {
		rules: [
		    {
    		    test: /\.js$/,   //用正则匹配找到所有的js文件
    		    include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
    		    use: {
    		       loader: 'babel-loader'
    		    }
		    },
		    {   //scss 运行
		    	test: /\.css$/,
		    	include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
    		    use: [{
                  loader: "style-loader" 
                }, {
                  loader: "css-loader" 
                },{
                  loader: "postcss-loader"
                }, {
                  loader: "sass-loader"
                }
            ]
		    },
		    {   //scss 转换
		    	test: /\.scss$/,
		    	include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
        	use: [{
                  loader: "style-loader"
              }, {
                loader: "css-loader" 
              },{
                loader: "postcss-loader"
              }, {
                loader: "sass-loader"
              }
            ]
		    },
        {
          test: /\.html$/,
          use: {
              loader: 'html-loader'
          }
        },
        {
          test: /\.(jpg|png|gif|svg)/,
          use:[
           // {loader: 'file-loader?name=asset.[ext]'},  file-loader 表示相对于当前执行 webpack 命令的目录的相对路径，可以不用
            {loader: 'img-loader'},
            {loader:'url-loader?limit=8000&name=img/[name].[hash:8].[ext]'}
          ]
        },{
          test: /\.(woff|woff2|svg|sot|ttf)\??.*$/,
          loader: 'url-loader?name=fonts/[name].[ext]'
        }
		]
	},
	plugins: [
		new htmlWebpackPlugin({
  			filename: 'one.html', //生成的文件名字
  			template: 'index.html',  //生成文件的 模板
  			inject: 'body',    //打包生成的js,css和其他东西插入的位置
  			title: 'two title',
        excludeChunks:['page2']   //不包含哪些 js
		}),
    new htmlWebpackPlugin({
        filename: 'two.html',
        template: 'index.html',
        inject: 'body',
        title: 'one title',
        excludeChunks:['page1']
    })
	]
}





























