
let webpack = require('webpack');
let fs = require('fs');

let DEBUG = (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'development') || false;

let plugins = [
    new webpack.optimize.OccurrenceOrderPlugin()
];
if (!DEBUG) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        function () {
            this.plugin("done", function (stats) {
                let jsonStats = stats.toJson({
                    chunkModules: true
                });
                fs.writeFileSync(
                    __dirname + "/webpack-assets.json",
                    JSON.stringify(jsonStats.assetsByChunkName)
                );
            });
        },
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.NoErrorsPlugin()
    );
}

module.exports = {
    target: 'web',
    entry: './test.jsx',
    output: {
        path: './dist',
        filename: DEBUG ? "./react-tab-debug.js" : "./react-tab-min.js",
        chunkFilename: DEBUG ? "./react-tab-debug.js" : "./react-tab-min.js",
        libraryTarget: 'umd',
        library: 'ReactTab'
    },

    cache: true,
    debug: DEBUG,

    devtool: DEBUG && "#inline-source-map",

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime'],
                    cacheDirectory: true
                }
            }
        ],
        noParse: [
        ]
    },

    plugins: plugins,

    externals: {
    },

    resolve: {
        modulesDirectories: [
            "node_modules",
            "web_modules"
        ],

        extensions: ["", ".js", ".jsx", ".es6", '.json'],

        alias: {
        }
    }
};
