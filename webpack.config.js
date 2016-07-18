var  webpack = require('webpack');
//var  commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//var  ExtractTextPlugin = require("extract-text-webpack-plugin");//独立出来作为.css  new ExtractTextPlugin("[name].css"),
module.exports = {
	  entry: './src/js/entry.js',//'./src/js/page/index.js'
	  output: {
	    path: './dist/js',//__dirname,//path: 'dist/js/page',
	    filename: 'bundle1.js'
	  },
	  module: {
	  	//加载器配置
	    loaders: [
	      {test: /\.css$/, loader: 'style!css'},
	      { test: /\.less$/, loader: 'style!css!less'}
	     // { test: /\.js$/, loaders: ["babel"], exclude: /node_modules/ },
	      //{ test: /\.js$/, loader: 'jsx-loader?harmony' },
         //   { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
          //  { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
	    ]
	  },
	  plugins: [
	    new webpack.BannerPlugin('This file is created by wsp')
	  ],
	  //其它解决方案配置
   /* resolve: {
        root: 'E:/github/flux-example/src', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }*/
   //其他类库
//externals: {
 //   "jquery": "jQuery"
 //   }
//当在require一个模块的时候，如果在require中包含变量
//require("./mods/" + name + ".js");


}