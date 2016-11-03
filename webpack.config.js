var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

var isProduction = process.env.NODE_ENV === 'production' ? true : false;

var webpackConfig = {
    devtool: 'source-map',
    entry: {
        app: './src/bootstrap.js',
        common: './src/common.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public/build',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue',
            include: __dirname + '/src'
        }, {
            test: /\.js$/,
            loader: 'babel',
            include: __dirname + '/src'
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'],
            include: __dirname + '/src'
        }, {
            test: /\.(jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf)$/, // css resources
            loader: isProduction ? "file-loader" : "url-loader"
        }],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: "common" }),
        new webpack.DefinePlugin({
            INJECT_WEBPACK_DEV_SERVER_SCRIPT: (process.argv[1].match(/webpack-dev-server$/) !== null) && (process.argv.indexOf('--inline') === -1)
        })
    ],
    babel: {
        presets: [
            ['es2015'],
            'stage-1'
        ],
        plugins: [
            "transform-vue-jsx"
        ]
    },
    postcss: [
        autoprefixer(),
    ],
    vue: {
    }
}
webpackConfig.vue.postcss = webpackConfig.postcss

module.exports = webpackConfig
