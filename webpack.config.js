var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var IS_PRODUCTION = (process.argv.indexOf('-p') !== -1)
if (typeof process.env.NODE_ENV === 'undefined') {
    process.env.NODE_ENV = IS_PRODUCTION ? 'production' : 'development'
}

var config = {
    devtool: IS_PRODUCTION ? 'source-map' : 'cheap-module-eval-source-map',
    entry: {
        app: './src/bootstrap.js',
        common: './src/common.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public/build',
        publicPath: '/build/'
    },
    module: {
        loaders: [],
    },
    plugins: []
}

// Javascript
config.babel = {
    presets: [
        ['es2015']
    ],
    plugins: [
        'transform-vue-jsx',
        'babel-plugin-transform-object-rest-spread'
    ]
}
config.resolve = {
    extensions: ['', '.js', '.vue']
}
config.module.loaders.push({
    test: /\.vue$/,
    loader: 'vue',
    include: __dirname + '/src'
})
config.module.loaders.push({
    test: /\.js$/,
    loader: 'babel',
    include: __dirname + '/src'
})

// Styles
config.postcss = [
    autoprefixer(),
]
config.vue = {
    postcss: config.postcss
}
// Postprocces the scss files with postcss
var styleLoaders = ['css?sourceMap', 'postcss', 'sass?sourceMap']
if (IS_PRODUCTION) {
    // Extract css intro a style.css file
    var extractCss = new ExtractTextPlugin('style.css')
    config.plugins.push(extractCss)
    config.module.loaders.push({
        test: /\.scss$/,
        include: __dirname + '/src',
        loader: extractCss.extract('style', styleLoaders)
    })

    config.module.loaders.push({
        test: /\.css$/,
        exclude: __dirname + '/src',
        loader: extractCss.extract('style', ['css'])
    })
} else {
    config.module.loaders.push({
        test: /\.scss$/,
        include: __dirname + '/src',
        loaders: ['style'].concat(styleLoaders)
    })
    config.module.loaders.push({
        test: /\.css$/,
        exclude: __dirname + '/src',
        loaders: ['style', 'css']
    })
}
config.module.loaders.push({
    test: /\.(jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|eot)$/, // css resources
    loader: IS_PRODUCTION ? 'file' : 'url'
})

// Webpack Dev Server
config.devServer = {
    stats: {
        chunks: false,
        version: false,
        assets: false,
        hash: false,
        color: true,
    }
}
config.plugins.push(new webpack.DefinePlugin({
    INJECT_WEBPACK_DEV_SERVER_SCRIPT: (process.argv[1].match(/webpack-dev-server$/) !== null) && (process.argv.indexOf('--inline') === -1),
    IS_PRODUCTION: IS_PRODUCTION,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
}))

// Other
config.plugins.push(new webpack.optimize.CommonsChunkPlugin({ name: 'common' }))

module.exports = config
