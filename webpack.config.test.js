
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
    entry: './test.js',
    output: {
        path: './dist',
        filename: DEBUG ? "./react-tab-test-debug.js" : "./react-tab-test-min.js",
        chunkFilename: DEBUG ? "./react-tab-test-debug.js" : "./react-tab-test-min.js"
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
        'react': 'React',
        'react-dom': 'ReactDOM'
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
