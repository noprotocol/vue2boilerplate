var webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: {
        app: './src/bootstrap.js',
        vendor: ['vue'],
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public/build',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['','.js', '.vue'],
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
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
    ],
    babel: {
        presets: [
            "es2015"
        ],
        plugins: [
            "transform-vue-jsx"
        ]
    }
}

