const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    /*css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 20
                    })
                ]
            }
        }
    },*/
    /*publicPath : process.env.NODE_ENV === 'production' ? './' : '/',*/
    publicPath: './',
    outputDir:"dist",
    assetsDir:'static',
    filenameHashing: true,
    configureWebpack:config=>{
        if(process.env.NODE_ENV === 'production'){
            return{
                plugins: [

                    new CompressionPlugin({
                        test:/\.js$|\.html$|.\css/, //匹配文件名
                        threshold: 10240,//对超过10k的数据压缩
                        deleteOriginalAssets: false //不删除源文件
                    })
                ]
            }
        }

    },
    configureWebpack: {
        //关闭 webpack 的性能提示
        performance: {
            hints:false
        },
        performance: {
            hints:'warning',
            //入口起点的最大体积
            maxEntrypointSize: 50000000,
            //生成文件的最大体积
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    }


}