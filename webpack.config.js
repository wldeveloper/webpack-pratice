const path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry:['./src/script/main.js','./src/script/a.js'],
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/[name].bundle.js'
    },
    plugins:[
       new htmlWebpackPlugin({
        filename:'index.html',
        template:'index.html',
        inject:'body'
       })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/, 
                loader: "babel-loader",
                include:path.resolve(__dirname,'src'),
                query:{
                    presets:['latest']
                }
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:1
                        }
                    },
                    {
                        loader:'postcss-loader'
                    }
                ]
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test:'/\.scss/',
                loader:'style-loader!css-loader!postcss-loader!sass-loader'
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                test:/\.tpl$/,
                loader:'ejs-loader'
            },
            {
                test:/\.(png|jpg|gif|svg)$/i,
                use:[
                    {
                        // loader: 'file-loader',
                        loader: 'url-loader',
                        options: {
                          //
                          limit: 200000,
                          name: 'assets/[name]-[hash:5].[ext]'
                        }
                    },
                    {
                        //压缩图片文件
                        loader: 'image-webpack-loader',
                        options:{
                            bypassOnDebug:false
                        }
                    }
                ]
            }
        ]
    }
}