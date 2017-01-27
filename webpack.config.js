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
        rules: [],
    },
    plugins: []
}

// Javascript
const babelConfig = {
    presets: [
        ['es2015', { modules: false }]
    ],
    plugins: [
        'transform-vue-jsx',
        'babel-plugin-transform-object-rest-spread'
    ]
}
config.resolve = {
    extensions: ['.js', '.vue']
}
config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
    include: __dirname + '/src',
})
config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: __dirname + '/src'
})

// Styles
var styleLoaders = [{
    loader:'css-loader',
        // sourceMap: true
}, {
    loader: 'postcss-loader',
 }, {
      loader: 'sass-loader'
      // sourceMap: true
}]
// Postprocces the scss files with postcss
const postcssConfig = [
    autoprefixer()
]

if (IS_PRODUCTION) {
    // Extract css intro a style.css file
    var extractCss = new ExtractTextPlugin('style.css')
    config.plugins.push(extractCss)
    config.module.rules.push({
        test: /\.scss$/,
        include: __dirname + '/src',
        loader: extractCss.extract(styleLoaders)
    })

    config.module.rules.push({
        test: /\.css$/,
        exclude: __dirname + '/src',
        loader: extractCss.extract(['css-loader'])
    })
} else {
    config.module.rules.push({
        test: /\.scss$/,
        include: __dirname + '/src',
        loaders: ['style-loader'].concat(styleLoaders)
    })
    config.module.rules.push({
        test: /\.css$/,
        exclude: __dirname + '/src',
        loaders: ['style-loader', 'css-loader']
    })
}
config.plugins.push(
    new webpack.LoaderOptionsPlugin({
        minimize: IS_PRODUCTION,
        options: {
            context: __dirname,
            postcss: postcssConfig,
            babel: babelConfig,
            vue: {
                postcss: postcssConfig,
                loaders: {
                    js: 'babel-loader'
                }
            }
        }
    })
)
config.module.rules.push({
    test: /\.(jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|eot)$/, // css resources
    loader: IS_PRODUCTION ? 'file-loader' : 'url-loader'
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
